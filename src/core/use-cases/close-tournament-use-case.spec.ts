import {beforeEach, describe, expect, it} from "vitest";
import { InMemoryTournamentRepository } from "../repositories/in-memory/in-memory-tournament-repositoy";
import { createTournamentHelper } from "./helpers/create-tournament-helper";
import { FetchTournamentsUseCase } from "./fetch-tournaments-use-case";
import { CloseTournamentUseCase } from "./close-tournament-use-case";
import { TournamentAlreadyClosedError } from "./errors/tournament-already-closed-error";
import { TournamentInvalidKeyError } from "./errors/tournament-invalid-key-error";
import { TournamentNotFoundError } from "./errors/tournament-not-found-error";

describe("Close tournaments use case", () => {
    let sut: CloseTournamentUseCase
    let repository: InMemoryTournamentRepository

    beforeEach(()=>{
        repository = new InMemoryTournamentRepository()
        sut = new CloseTournamentUseCase(repository)
    })

    it("should be able to close a tournament", async () => {

        const {tournament} = await createTournamentHelper(repository)

        const {tournament: closedTournament} = await sut.execute({
            id: tournament._id,
            key: tournament.secretKey
        })
        expect(closedTournament.is_open).toBe(false)
    })

    it("should not be able to close a tournament if it already closed", async () => {

        const {tournament} = await createTournamentHelper(repository)
        await sut.execute({
            id: tournament._id,
            key: tournament.secretKey
        })

        expect(async() => {
            await sut.execute({
                id: tournament._id,
                key: tournament.secretKey
            })
        }).rejects.toThrow(TournamentAlreadyClosedError)
    })

    it("should not be able to close a tournament if it does not exist", async () => {

        expect(async() => {
            await sut.execute({
                id: "invalid_id",
                key: "invalid_key"
            })
        }).rejects.toThrow(TournamentNotFoundError)
    })

    it("should not be able to close a tournament if the key is invalid", async () => {

        const {tournament} = await createTournamentHelper(repository)

        expect(async() => {
            await sut.execute({
                id: tournament._id,
                key: "invalid_key"
            })
        }).rejects.toThrow(TournamentInvalidKeyError)
    })
})