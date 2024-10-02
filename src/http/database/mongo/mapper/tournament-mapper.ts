import { Tournament } from "../../../../core/entities/tournament"
import { TournamentDocument } from "../schemas/tournament.schema"

export class TournamentMapper {
    static toEntity(tournament: TournamentDocument) {
        const tournamentEntity = new Tournament({
            name: tournament.name,
            date: tournament.date,
            description: tournament.description,
            is_free: tournament.is_free,
            max_quorum: tournament.max_quorum,
            min_quorum: tournament.min_quorum,
            ticket: tournament.ticket,
            time: tournament.time,
        })
        tournamentEntity.idTransform = tournament._id
        tournamentEntity.secretKey = tournament.secret_key
        tournamentEntity.time = tournament.time

        return tournamentEntity
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