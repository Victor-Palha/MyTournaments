import { Player } from "src/core/entities/player";
import { PlayerDocument } from "../schemas/player.schema";
import { DeckList } from "src/core/entities/deck-list";
import { Types } from "mongoose";

export class PlayerMapper{
    static toEntity(player: PlayerDocument, player_id: Types.ObjectId, deck_list_id: Types.ObjectId){
        const deck_list = new DeckList({
            deck_name: player.deck_list.deck_name,
            extra_deck: player.deck_list.extra_deck,
            main_deck: player.deck_list.main_deck,
            side_deck: player.deck_list.side_deck
        })

        return new Player({
            name: player.name,
            deck_list
        })
    }
}