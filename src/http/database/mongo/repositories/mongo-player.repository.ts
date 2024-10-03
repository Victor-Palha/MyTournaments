import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { PlayerRepository } from "../../../../core/repositories/player-repository";
import { PlayerProps } from "../../../../core/entities/player";
import { Player as PlayerSchema } from "../schemas/player.schema";

@Injectable()
export class MongoPlayerRepository implements PlayerRepository{
    constructor(
        @InjectModel(PlayerSchema.name) private readonly playerModel: Model<PlayerSchema>
    ){}

    async create(player: PlayerProps){
        const player_created = await this.playerModel.create({
            name: player.name,
            deck_list: player.deck_list
        })

        return player_created
    }
}