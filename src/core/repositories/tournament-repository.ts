import { Player } from "../entities/player";
import { Tournament, TournamentProps } from "../entities/tournament";

export abstract class TournamentRepository {
    abstract create: (tournament: TournamentProps) => Promise<Tournament>
    abstract findById: (id: string) => Promise<Tournament | undefined>
    abstract addPlayer: (tournament_id: string, player: Player) => Promise<Tournament>
    abstract fetchAll: (open: boolean) => Promise<Tournament[]>
    abstract close: (id: string, key: string) => Promise<Tournament>
}