import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { PlayerRepository } from "../../../../core/repositories/player-repository";
import { Player, PlayerProps } from "../../../../core/entities/player";
import { PlayerDocument, Player as PlayerSchema } from "../schemas/player.schema";
import { PlayerMapper } from "../mapper/player-mapper";

@Injectable()
export class MongoPlayerRepository implements PlayerRepository{
    constructor(
        @InjectModel(PlayerSchema.name) private readonly playerModel: Model<PlayerSchema>
    ){}

    async create(player: PlayerProps): Promise<Player | PlayerDocument>{
        const player_created = await this.playerModel.create({
            name: player.name,
            deck_list: new Types.ObjectId(player.deck_list._id)
        })

        return player_created
    }
}