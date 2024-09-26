import { TournamentProps } from "../../entities/tournament";
import { TournamentRepository } from "../../repositories/tournament-repository";

export async function createTournamentHelper(tournamentRepository: TournamentRepository){
    const tournamentInformation: TournamentProps = {
        name: "Tournament New Era",
        date: new Date(),
        description: "This is a tournament",
        time: "19:00",
        min_quorum: 8,
        max_quorum: 12,
        ticket: 5,
        is_free: false,
    }

    const tournament = await tournamentRepository.create(tournamentInformation)
    return {tournament}
}