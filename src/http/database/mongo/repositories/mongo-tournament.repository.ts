import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { TournamentRepository } from "../../../../core/repositories/tournament-repository";
import { Tournament as TournamentSchema } from "../schemas/tournament.schema";
import { Model, Types } from "mongoose";
import { TournamentProps } from "../../../../core/entities/tournament";
import { randomUUID } from "node:crypto";
import { PlayerDocument } from "../schemas/player.schema";

@Injectable()
export class MongoTournamentRepository implements TournamentRepository{
    constructor(
        @InjectModel(TournamentSchema.name) private readonly tournamentModel: Model<TournamentSchema>
    ){}

    async create(tournament: TournamentProps){
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

        return created_tournament
    }

    async close(key: string){
        const tournament = await this.tournamentModel.findOneAndUpdate({
            secret_key: key
        }, {
            is_open: false
        })
        return tournament
    };

    async findById(id: string){
        const tournament = await this.tournamentModel.findById(id)
        if(tournament.is_open === false){
            await tournament.populate({
                path: 'players',
                populate: {
                  path: 'deck_list', // Popula também o deck_list dentro de cada player
                }
            });
        }
        if(tournament.is_open === true){
            await tournament.populate("players")
        }
        return tournament
    };

    async fetchAll(open: boolean){
        const tournaments = await this.tournamentModel.find({ is_open: open })

        return tournaments
    };

    async addPlayer(tournament_id: string, player: PlayerDocument){
        const tournament = await this.tournamentModel.findByIdAndUpdate(tournament_id, {
            $push: {
                players: player._id
            }
        })

        return tournament
    };
}