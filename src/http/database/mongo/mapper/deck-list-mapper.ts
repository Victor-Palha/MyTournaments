import { DeckList } from "src/core/entities/deck-list"

export class DeckListMapper{
    static toEntity(deck_list: any): DeckList{
        return new DeckList({
            _id: deck_list._id,
            player_id: deck_list.player_id,
            deck_name: deck_list.deck_name,
            main_deck: deck_list.main_deck,
            side_deck: deck_list.side_deck,
            extra_deck: deck_list.extra_deck
        })
    }

    static toPersistence(deck_list: DeckList): any{
        return {
            player_id: deck_list.player_id,
            deck_name: deck_list.deck_name,
            main_deck: deck_list.main_deck,
            side_deck: deck_list.side_deck,
            extra_deck: deck_list.extra_deck
        }
    }
}