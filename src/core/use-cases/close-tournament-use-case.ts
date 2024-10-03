import { Injectable } from "@nestjs/common"
import { TournamentRepository } from "../repositories/tournament-repository"
import { TournamentAlreadyClosedError } from "./errors/tournament-already-closed-error"
import { TournamentInvalidKeyError } from "./errors/tournament-invalid-key-error"
import { TournamentNotFoundError } from "./errors/tournament-not-found-error"
import { TournamentDocument } from "src/http/database/mongo/schemas/tournament.schema"

interface CloseTournamentUseCaseRequest {
    id: string
    key: string
}
type CloseTournamentUseCaseResponse = {
    tournament: TournamentDocument
}

@Injectable()
export class CloseTournamentUseCase{
    constructor(
        private tournamentRepository: TournamentRepository
    ){}

    async execute({id, key}: CloseTournamentUseCaseRequest): Promise<CloseTournamentUseCaseResponse>{
        const tournament = await this.tournamentRepository.findById(id)
        if(!tournament){
            throw new TournamentNotFoundError()
        }
        if(tournament.is_open == false){
            throw new TournamentAlreadyClosedError()
        }
        if(tournament.secret_key !== key){
            throw new TournamentInvalidKeyError()
        }

        const closedTournament = await this.tournamentRepository.close(key)

        return {
            tournament: closedTournament
        }
    }
}