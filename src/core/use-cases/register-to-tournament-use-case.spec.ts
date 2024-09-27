import {beforeEach, describe, expect, it} from "vitest";
import { InMemoryTournamentRepository } from "../repositories/in-memory/in-memory-tournament-repositoy";
import { Player, PlayerProps } from "../entities/player";
import { createTournamentHelper } from "./helpers/create-tournament-helper";
import { createDeckListHelper } from "./helpers/create-deck-list-helper";
import { InMemoryDeckListRepository } from "../repositories/in-memory/in-memory-deck-list-repository";
import { RegisterToTournamentUseCase } from "./register-to-tournament-use-case";

describe("register to an tournament use case", () => {
    let sut: RegisterToTournamentUseCase
    let tournamentRepository: InMemoryTournamentRepository
    let deckListRepository: InMemoryDeckListRepository

    beforeEach(()=>{
        tournamentRepository = new InMemoryTournamentRepository()
        deckListRepository = new InMemoryDeckListRepository()
        sut = new RegisterToTournamentUseCase(tournamentRepository)

    })

    it("should be able to a player register to an tournament", async () => {
        const {tournament} = await createTournamentHelper(tournamentRepository)
        const {deck_list} = await createDeckListHelper(deckListRepository)
        const playerInformation: PlayerProps = {
            name: "Player 1",
            deck_list: deck_list
        }
        const player = new Player(playerInformation)

        const {
            message,
            tournament: tournamentUpdated
        } = await sut.execute({player, tournament_id: tournament._id})


        expect(tournamentUpdated.players).toContain(player)
        expect(message).toBe("Player registered to tournament")
    })
})