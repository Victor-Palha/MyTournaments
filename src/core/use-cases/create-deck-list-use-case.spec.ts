import {beforeEach, describe, expect, it} from "vitest";
import { DeckListProps } from "../entities/deck-list";
import { CreateDeckListUseCase } from "./create-deck-list-use-case";
import { InMemoryDeckListRepository } from "../repositories/in-memory/in-memory-deck-list-repository";
import { InMemoryPlayerRepository } from "../repositories/in-memory/in-memory-player-repository";

describe("create deck list use case", () => {
    let sut: CreateDeckListUseCase
    let repository: InMemoryDeckListRepository
    let playerRepository: InMemoryPlayerRepository

    beforeEach(()=>{
        repository = new InMemoryDeckListRepository()
        playerRepository = new InMemoryPlayerRepository()
        sut = new CreateDeckListUseCase(repository, playerRepository)
    })

    it("should be able to create a deck list", async () => {
        const deckListInformation = {
            deck_name: "Deck 1",
            main_deck: [],
            side_deck: [],
            extra_deck: [],
            player_name: "Ash"
        }

        const {player} = await sut.execute(deckListInformation)
        expect(player.deckList.deck_name).toBe("Deck 1")
        expect(player.name).toBe("Ash")
    })
})