import { Tournament, TournamentProps } from "../entities/tournament";

export interface TournamentRepository {
    create: (tournament: TournamentProps) => Promise<Tournament>

}