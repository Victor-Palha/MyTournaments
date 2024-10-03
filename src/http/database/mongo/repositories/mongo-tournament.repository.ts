import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { TournamentRepository } from "../../../../core/repositories/tournament-repository";
import { Tournament as TournamentSchema } from "../schemas/tournament.schema";
import { Model, Types } from "mongoose";
import { TournamentMapper } from "../mapper/tournament-mapper";
import { Tournament, TournamentProps } from "../../../../core/entities/tournament";
import { Player } from "../../../../core/entities/player";
import { randomUUID } from "node:crypto";
import { DeckList } from "../schemas/deck-list.schema";
import { PlayerDocument } from "../schemas/player.schema";

@Injectable()
export class MongoTournamentRepository implements TournamentRepository{
    constructor(
        @InjectModel(TournamentSchema.name) private readonly tournamentModel: Model<TournamentSchema>
    ){}

    async create(tournament: TournamentProps): Promise<Tournament>{
        const created_tournament = await this.tournamentModel.create({
            name: tournament.name,
            date: tournament.date,
            time: tournament.time,
            description: tournament.description,
            is_free: tournament.is_free,
            is_open: true,
            max_quorum: tournament.max_quorum,
            min_quorum: tournament.min_quorum,
            ticket: tournament.ticket,
            secret_key: randomUUID()
        })

        const tournamentEntity = TournamentMapper.toEntity(created_tournament)
        return tournamentEntity
    }

    async close(key: string): Promise<Tournament>{
        const tournament = await this.tournamentModel.findOneAndUpdate({
            secret_key: key
        }, {
            is_open: false
        })
        return TournamentMapper.toEntity(tournament)
    };

    async findById(id: string): Promise<Tournament | undefined>{
        const tournament = await this.tournamentModel.findById(id)
        return TournamentMapper.toEntity(tournament)
    };

    async fetchAll(open: boolean): Promise<Tournament[]>{
        const tournaments = await this.tournamentModel.find({ is_open: open })
        const tournamentsEntities = tournaments.map(tournament => TournamentMapper.toEntity(tournament))
        return tournamentsEntities
    };

    async addPlayer(tournament_id: string, player: PlayerDocument): Promise<Tournament>{
        const updatedTournament = await this.tournamentModel.findByIdAndUpdate(
            tournament_id,
            {
                $push: {
                    players: player.id
                }
            },
            { new: true }  // Retorna o documento atualizado
        ).populate('players.deck_list');  
        // Salva o torneio com o novo jogador

        return TournamentMapper.toEntity(updatedTournament)
    };
}