import { Player, PlayerProps } from "../entities/player";

export abstract class PlayerRepository {
    abstract create(player: PlayerProps): Promise<Player>
}