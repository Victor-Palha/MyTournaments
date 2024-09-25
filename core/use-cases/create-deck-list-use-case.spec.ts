import {beforeEach, describe, expect, it} from "vitest";
import { DeckListProps } from "../entities/deck-list";
import { CreateDeckListUseCase } from "./create-deck-list-use-case";
import { InMemoryDeckListRepository } from "../repositories/in-memory/in-memory-deck-list-repository";

describe("create deck list use case", () => {
    let sut: CreateDeckListUseCase
    let repository: InMemoryDeckListRepository

    beforeEach(()=>{
        repository = new InMemoryDeckListRepository()
        sut = new CreateDeckListUseCase(repository)
    })

    it("should be able to create a deck list", async () => {
        const deckListInformation: DeckListProps = {
            deck_name: "Deck 1",
            main_deck: [],
            side_deck: [],
            extra_deck: [],
            player_id: "1"
        }

        const {deck_list} = await sut.execute(deckListInformation)
        expect(deck_list.deck_name).toBe("Deck 1")
        expect(deck_list.player_id).toBe("1")
    })
})