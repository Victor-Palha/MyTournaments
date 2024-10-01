import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { DeckListRepository } from "src/core/repositories/deck-list-repository";
import { DeckList as DeckListSchema } from "../schemas/deck-list.schema";
import { Model } from "mongoose";
import { DeckList } from "src/core/entities/deck-list";
import { DeckListMapper } from "../mapper/deck-list-mapper";

@Injectable()
export class MongoDeckListRepository implements DeckListRepository{
    constructor(
        @InjectModel(DeckListSchema.name) private readonly deckListModel: Model<DeckListSchema>
    ){}

    async create(deck_list: DeckList): Promise<DeckList>{
        const deck = DeckListMapper.toPersistence(deck_list)
        const created_deck = await this.deckListModel.create(deck)
        return DeckListMapper.toEntity(created_deck)
    }
}