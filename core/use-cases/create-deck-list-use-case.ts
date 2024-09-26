import { DeckList, DeckListProps } from "../entities/deck-list";
import { DeckListRepository } from "../repositories/deck-list-repository";


interface CreateDeckListUseCaseRequest extends DeckListProps {}
type CreateDeckListUseCaseResponse = {
    deck_list: DeckList
}

export class CreateDeckListUseCase {
    constructor(
        private readonly deckListRepository: DeckListRepository
    ){}

    async execute({deck_name, extra_deck, main_deck, player_id, side_deck}: CreateDeckListUseCaseRequest): Promise<CreateDeckListUseCaseResponse>{
        const deckListInformation: DeckListProps = {
            deck_name,
            main_deck,
            extra_deck,
            side_deck,
            player_id
        }

        const deck_list = await this.deckListRepository.create(deckListInformation)
        return {
            deck_list
        }
    }
}