import { Player } from "../../entities/player";
import { Tournament, TournamentProps } from "../../entities/tournament";
import { TournamentRepository } from "../tournament-repository";

export class InMemoryTournamentRepository implements TournamentRepository {
    private tournaments: Tournament[] = []

    public async create({name, description, date, time, min_quorum, max_quorum, ticket, is_free}: TournamentProps){

        const tournament = new Tournament({ name, description, date, time, min_quorum, max_quorum, ticket, is_free, players: [] })

        this.tournaments.push(tournament)

        return tournament
    }

    public async findById(id: string){
        const tournament = this.tournaments.find(tournament => tournament._id === id)
        return tournament
    }

    public async addPlayer(tournament_id: string, player: Player){
        const tournament = this.tournaments.find(tournament => tournament._id === tournament_id)

        if(!tournament){
            throw new Error("Tournament not found")
        }

        tournament.addPlayer(player)
        return tournament
    }

    public async fetchAll(open: boolean){
        const tournaments = this.tournaments.filter(tournament => tournament.is_open === open)
        
        return tournaments
    }
}