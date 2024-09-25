import { DeckList, DeckListProps } from "../entities/deck-list";

export interface DeckListRepository {
    create(deck_list: DeckListProps): Promise<DeckList>
}