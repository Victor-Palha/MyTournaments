import { PlayerDocument } from "src/http/database/mongo/schemas/player.schema";
import { TournamentProps } from "../entities/tournament";
import { TournamentDocument } from "src/http/database/mongo/schemas/tournament.schema";

export abstract class TournamentRepository {
    abstract create(tournament: TournamentProps): Promise<TournamentDocument>
    abstract findById(id: string): Promise<TournamentDocument | undefined>
    abstract addPlayer(tournament_id: string, player: PlayerDocument): Promise<TournamentDocument>
    abstract fetchAll(open: boolean): Promise<TournamentDocument[]>
    abstract close(key: string): Promise<TournamentDocument>
}