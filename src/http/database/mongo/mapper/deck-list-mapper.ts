import { DeckList } from "../../../../core/entities/deck-list"
import { DeckListDocument } from "../schemas/deck-list.schema"
import { TournamentDocument } from "../schemas/tournament.schema"

export class DeckListMapper{
    static toEntity(deck_list: DeckListDocument): DeckList{
        const deckList = new DeckList({
            deck_name: deck_list.deck_name,
            main_deck: deck_list.main_deck,
            side_deck: deck_list.side_deck,
            extra_deck: deck_list.extra_deck
        })

        deckList.idTransform = deck_list.id

        return deckList
    }

    static toPersistence(deck_list: DeckList): any{
        return {
            deck_name: deck_list.deck_name,
            main_deck: deck_list.main_deck,
            side_deck: deck_list.side_deck,
            extra_deck: deck_list.extra_deck
        }
    }
}