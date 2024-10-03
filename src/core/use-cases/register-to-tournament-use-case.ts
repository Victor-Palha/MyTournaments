import { Injectable } from "@nestjs/common";
import { Player } from "../entities/player";
import { Tournament } from "../entities/tournament";
import { TournamentRepository } from "../repositories/tournament-repository";
import { TournamentNotFoundError } from "./errors/tournament-not-found-error";
import { PlayerDocument } from "src/http/database/mongo/schemas/player.schema";
import { TournamentDocument } from "src/http/database/mongo/schemas/tournament.schema";

interface RegisterToTournamentUseCaseRequest {
    player: PlayerDocument
    tournament_id: string
}
type RegisterToTournamentUseCaseResponse = {
    message: string,
    tournament: TournamentDocument
}

@Injectable()
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