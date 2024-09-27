import { Tournament } from "../entities/tournament"
import { TournamentRepository } from "../repositories/tournament-repository"
import { TournamentAlreadyClosedError } from "./errors/tournament-already-closed-error"
import { TournamentInvalidKeyError } from "./errors/tournament-invalid-key-error"
import { TournamentNotFoundError } from "./errors/tournament-not-found-error"

interface CloseTournamentUseCaseRequest {
    id: string
    key: string
}
type CloseTournamentUseCaseResponse = {
    tournament: Tournament
}
export class CloseTournamentUseCase{
    constructor(
        private tournamentRepository: TournamentRepository
    ){}

    async execute(data: CloseTournamentUseCaseRequest): Promise<CloseTournamentUseCaseResponse>{
        const tournament = await this.tournamentRepository.findById(data.id)
        if(!tournament){
            throw new TournamentNotFoundError()
        }
        if(tournament.is_open == false){
            throw new TournamentAlreadyClosedError()
        }
        if(tournament.secretKey !== data.key){
            throw new TournamentInvalidKeyError()
        }

        const closedTournament = await this.tournamentRepository.close(data.id, data.key)

        return {
            tournament: closedTournament
        }
    }
}