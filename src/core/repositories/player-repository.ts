import { PlayerDocument } from "src/http/database/mongo/schemas/player.schema";
import { Player, PlayerProps } from "../entities/player";

export abstract class PlayerRepository {
    abstract create(player: PlayerProps): Promise<Player | PlayerDocument>
}