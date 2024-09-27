import { Player } from "../entities/player";
import { Tournament } from "../entities/tournament";
import { TournamentRepository } from "../repositories/tournament-repository";
import { TournamentNotFoundError } from "./errors/tournament-not-found-error";

interface RegisterToTournamentUseCaseRequest {
    player: Player
    tournament_id: string
}
type RegisterToTournamentUseCaseResponse = {
    message: string,
    tournament: Tournament
}

export class RegisterToTournamentUseCase{
    constructor(
        private tournamentRepository: TournamentRepository
    ){}

    async execute({player, tournament_id}: RegisterToTournamentUseCaseRequest): Promise<RegisterToTournamentUseCaseResponse>{
        const tournament = await this.tournamentRepository.findById(tournament_id)

        if(!tournament){
            throw new TournamentNotFoundError()
        }

        await this.tournamentRepository.addPlayer(tournament_id, player)
        
        return {
            message: "Player registered to tournament",
            tournament
        }
    }
}