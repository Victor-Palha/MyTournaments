import { Injectable } from "@nestjs/common";
import { Tournament, TournamentProps } from "../entities/tournament";
import { TournamentRepository } from "../repositories/tournament-repository";

interface CreateTournamentUseCaseRequest extends TournamentProps{}
type CreateTournamentUseCaseResponse = {
    tournament: Tournament
    secret_key: string
}

@Injectable()
export class CreateTournamentUseCase {
    constructor(
        private tournamentRepository: TournamentRepository
    ){}

    async execute({name, description, date, time, min_quorum, max_quorum, is_free, ticket}: CreateTournamentUseCaseRequest): Promise<CreateTournamentUseCaseResponse>{
        const tournamenteInformation = {name, description, date, time, min_quorum, max_quorum, is_free, ticket}

        const new_tournament = await this.tournamentRepository.create(tournamenteInformation)

        return {
            tournament: new_tournament,
            secret_key: new_tournament.secretKey
        }
    }
}