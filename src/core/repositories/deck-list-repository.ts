import { DeckList, DeckListProps } from "../entities/deck-list";

export abstract class DeckListRepository {
    abstract create(deck_list: DeckListProps): Promise<DeckList>;
}