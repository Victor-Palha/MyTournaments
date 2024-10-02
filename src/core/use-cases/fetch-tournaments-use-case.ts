import { Injectable } from "@nestjs/common";
import { Tournament } from "../entities/tournament";
import { TournamentRepository } from "../repositories/tournament-repository";

interface FetchTournamentsUseCaseRequest{
    open: boolean
}
type FetchTournamentsUseCaseResponse = {
    tournaments: Tournament[] 
}

@Injectable()
export class FetchTournamentsUseCase{
    constructor(
        private tournamentRepository: TournamentRepository
    ){}

    async execute({open}: FetchTournamentsUseCaseRequest): Promise<FetchTournamentsUseCaseResponse>{
        const tournaments = await this.tournamentRepository.fetchAll(open)
        return { tournaments }
    }
}