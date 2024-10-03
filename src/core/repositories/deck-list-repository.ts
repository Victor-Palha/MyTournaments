import { DeckListDocument } from "src/http/database/mongo/schemas/deck-list.schema";
import { DeckListProps } from "../entities/deck-list";

export abstract class DeckListRepository {
    abstract create(deck_list: DeckListProps): Promise<DeckListDocument>;
}