import { DeckList, DeckListProps } from "../entities/deck-list";
import { Player, PlayerProps } from "../entities/player";
import { DeckListRepository } from "../repositories/deck-list-repository";
import { PlayerRepository } from "../repositories/player-repository";

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
            extra_deck,
            main_deck,
            player_id,
            side_deck
        }

        const deck_list = await this.deckListRepository.create(deckListInformation)
        return {
            deck_list
        }
    }
}