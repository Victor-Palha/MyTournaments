import {beforeEach, describe, expect, it} from "vitest";
import { InMemoryTournamentRepository } from "../repositories/in-memory/in-memory-tournament-repositoy";
import { TournamentProps } from "../entities/tournament";
import { CreateTournamentUseCase } from "./create-tournament-use-case";

describe("create tournament use case", () => {
    let sut: CreateTournamentUseCase
    let repository: InMemoryTournamentRepository

    beforeEach(()=>{
        repository = new InMemoryTournamentRepository()
        sut = new CreateTournamentUseCase(repository)
    })

    it("should be able to create a tournament", async () => {
        const tournamentInformation: TournamentProps = {
            name: "Tournament 1",
            date: new Date(),
            description: "This is a tournament",
            time: "10:00",
            min_quorum: 8,
            max_quorum: 12,
            ticket: 5,
            is_free: false,
        }

        const {tournament} = await sut.execute(tournamentInformation)

        expect(tournament.name).toBe("Tournament 1")
        expect(tournament.date).toBeInstanceOf(Date)
        expect(tournament.description).toBe("This is a tournament")
        expect(tournament.players.length).toBe(0)
    })
})