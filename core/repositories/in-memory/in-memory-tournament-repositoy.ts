import { Tournament, TournamentProps } from "../../entities/tournament";
import { TournamentRepository } from "../tournament-repository";

export class InMemoryTournamentRepository implements TournamentRepository {
    private tournaments: Tournament[] = []

    async create({name, description, date, time, min_quorum, max_quorum, ticket, is_free}: TournamentProps){

        const tournament = new Tournament({ name, description, date, time, min_quorum, max_quorum, ticket, is_free, players: [] })

        this.tournaments.push(tournament)

        return tournament
    }
}