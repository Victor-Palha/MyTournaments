import { Injectable } from "@nestjs/common";
import { DeckList, DeckListProps } from "../entities/deck-list";
import { Player } from "../entities/player";
import { DeckListRepository } from "../repositories/deck-list-repository";
import { PlayerRepository } from "../repositories/player-repository";


interface CreateDeckListUseCaseRequest extends DeckListProps {
    player_name: string
}
type CreateDeckListUseCaseResponse = {
    player: Player
}

@Injectable()
export class CreateDeckListUseCase {
    constructor(
        private readonly deckListRepository: DeckListRepository,
        private readonly playerRepository: PlayerRepository
    ){}

    async execute({deck_name, extra_deck, main_deck, side_deck, player_name}: CreateDeckListUseCaseRequest): Promise<CreateDeckListUseCaseResponse>{
        const deckListInformation: DeckListProps = {
            deck_name,
            main_deck,
            extra_deck,
            side_deck
        }

        const deck_list = await this.deckListRepository.create(deckListInformation)
        const player = await this.playerRepository.create({
            name: player_name,
            deck_list
        })

        return {
            player
        }
    }
}