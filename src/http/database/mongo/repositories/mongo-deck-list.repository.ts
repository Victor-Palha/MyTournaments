import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { DeckListRepository } from "../../../../core/repositories/deck-list-repository";
import { DeckList as DeckListSchema } from "../schemas/deck-list.schema";
import { Model } from "mongoose";
import { DeckListProps } from "../../../../core/entities/deck-list";

@Injectable()
export class MongoDeckListRepository implements DeckListRepository{
    constructor(
        @InjectModel(DeckListSchema.name) private readonly deckListModel: Model<DeckListSchema>
    ){}

    async create(deck_list: DeckListProps){
        const created_deck = await this.deckListModel.create({
            deck_name:deck_list.deck_name,
            extra_deck: deck_list.extra_deck,
            main_deck: deck_list.main_deck,
            side_deck: deck_list.side_deck
        })
        
        return created_deck
    }
}