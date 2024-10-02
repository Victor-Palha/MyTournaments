import { Injectable } from "@nestjs/common";
import { Tournament } from "../entities/tournament";
import { TournamentRepository } from "../repositories/tournament-repository";
import { TournamentNotFoundError } from "./errors/tournament-not-found-error";

interface GetTournamentByIdUseCaseRequest {
    id: string;
}
interface GetTournamentByIdUseCaseResponse {
    tournament: Tournament;
}

@Injectable()
export class GetTournamentByIdUseCase {
    constructor(
        private tournamentRepository: TournamentRepository
    ){}

    async execute({id}: GetTournamentByIdUseCaseRequest): Promise<GetTournamentByIdUseCaseResponse>{
        const tournament = await this.tournamentRepository.findById(id)
        if(!tournament){
            throw new TournamentNotFoundError()
        }
        return {
            tournament
        }
    }
}