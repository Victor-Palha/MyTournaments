import {beforeEach, describe, expect, it} from "vitest";
import { InMemoryTournamentRepository } from "../repositories/in-memory/in-memory-tournament-repositoy";
import { createTournamentHelper } from "./helpers/create-tournament-helper";
import { FetchTournamentsUseCase } from "./fetch-tournaments-use-case";

describe("fetch tournaments use case", () => {
    let sut: FetchTournamentsUseCase
    let repository: InMemoryTournamentRepository

    beforeEach(()=>{
        repository = new InMemoryTournamentRepository()
        sut = new FetchTournamentsUseCase(repository)
    })

    it("should be able to fetch a tournament", async () => {

        await createTournamentHelper(repository)
        await createTournamentHelper(repository)
        await createTournamentHelper(repository)

        const {tournaments} = await sut.execute({
            open: true
        })

        expect(tournaments.length).toBe(3)
    })

    it("should be able to fetch a tournament that are closed", async () => {

        await createTournamentHelper(repository)

        const {tournaments} = await sut.execute({
            open: false
        })
        
        expect(tournaments.length).toBe(0)
    })
})