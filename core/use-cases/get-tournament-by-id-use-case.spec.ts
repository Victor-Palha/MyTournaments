import {beforeEach, describe, expect, it} from "vitest";
import { InMemoryTournamentRepository } from "../repositories/in-memory/in-memory-tournament-repositoy";
import { createTournamentHelper } from "./helpers/create-tournament-helper";
import { TournamentNotFoundError } from "./errors/tournament-not-found-error";
import { GetTournamentByIdUseCase } from "./get-tournament-by-id-use-case";

describe("Get tournament by id use case", () => {
    let sut: GetTournamentByIdUseCase
    let repository: InMemoryTournamentRepository

    beforeEach(()=>{
        repository = new InMemoryTournamentRepository()
        sut = new GetTournamentByIdUseCase(repository)
    })

    it("should be able to get a tournament by id", async () => {

        const {tournament} = await createTournamentHelper(repository)
        await createTournamentHelper(repository)
        await createTournamentHelper(repository)

        const allTournaments = await repository.fetchAll(true)

        expect(allTournaments.length).toBe(3)
        expect(allTournaments[0]._id).toBe(tournament._id)
        expect(tournament.name).toBe("Tournament New Era")
    })

    it("should not be able to get a tournament that doesn`t exists", async () => {

        await createTournamentHelper(repository)
        await createTournamentHelper(repository)

        const allTournaments = await repository.fetchAll(true)
        
        expect(allTournaments.length).toBe(2)
        expect(async () => {
            await sut.execute({
                id: "invalid_id"
            })
        }).rejects.toThrow(TournamentNotFoundError)
        
    })
})