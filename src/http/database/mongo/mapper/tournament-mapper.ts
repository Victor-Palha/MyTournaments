import { Tournament } from "src/core/entities/tournament"

export class TournamentMapper {
    static toEntity(tournament: any) {
        return new Tournament({
            name: tournament.name,
            date: tournament.date,
            description: tournament.description,
            is_free: tournament.is_free,
            max_quorum: tournament.max_quorum,
            min_quorum: tournament.min_quorum,
            ticket: tournament.ticket,
            time: tournament.time
        })
    }

    static toPersistence(tournament: Tournament): any {
        return {
            name: tournament.name,
            date: tournament.date,
            description: tournament.description,
            is_free: tournament.is_free,
            max_quorum: tournament.max_quorum,
            min_quorum: tournament.min_quorum,
            ticket: tournament.ticket,
            time: tournament.time
        }
    }
}