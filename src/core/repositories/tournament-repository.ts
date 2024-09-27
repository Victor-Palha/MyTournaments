import { Player } from "../entities/player";
import { Tournament, TournamentProps } from "../entities/tournament";

export interface TournamentRepository {
    create: (tournament: TournamentProps) => Promise<Tournament>
    findById: (id: string) => Promise<Tournament | undefined>
    addPlayer: (tournament_id: string, player: Player) => Promise<Tournament>
    fetchAll: (open: boolean) => Promise<Tournament[]>
    close: (id: string, key: string) => Promise<Tournament>
}