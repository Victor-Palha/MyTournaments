import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { TournamentRepository } from "src/core/repositories/tournament-repository";
import { Tournament as TournamentSchema } from "../schemas/tournament.schema";
import { Model } from "mongoose";
import { TournamentMapper } from "../mapper/tournament-mapper";
import { Tournament } from "src/core/entities/tournament";
import { Player } from "src/core/entities/player";

@Injectable()
export class MongoTournamentRepository implements TournamentRepository{
    constructor(
        @InjectModel(TournamentSchema.name) private readonly tournamentModel: Model<TournamentSchema>
    ){}

    async create(tournament: Tournament): Promise<Tournament>{
        const data = TournamentMapper.toPersistence(tournament)
        const created_tournament = await this.tournamentModel.create(data)
        return TournamentMapper.toEntity(created_tournament)
    }

    async close(id: string, key: string): Promise<Tournament>{
        const tournament = await this.tournamentModel.findOneAndUpdate({ _id: id, key }, { is_open: true })
        return TournamentMapper.toEntity(tournament)
    };

    async findById(id: string): Promise<Tournament | undefined>{
        const tournament = await this.tournamentModel.findById(id)
        return TournamentMapper.toEntity(tournament)
    };

    async fetchAll(open: boolean): Promise<Tournament[]>{
        const tournaments = await this.tournamentModel.find({ is_open: open })
        return tournaments.map(tournament => TournamentMapper.toEntity(tournament))
    };

    addPlayer: (tournament_id: string, player: Player) => Promise<Tournament>;
}