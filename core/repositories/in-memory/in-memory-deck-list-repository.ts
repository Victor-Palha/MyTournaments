import { DeckList } from "../../entities/deck-list";

export class InMemoryDeckListRepository {
    private deck_lists: DeckList[] = []

    async create(deck_list: DeckList): Promise<DeckList>{
        this.deck_lists.push(deck_list)
        return deck_list
    }
}