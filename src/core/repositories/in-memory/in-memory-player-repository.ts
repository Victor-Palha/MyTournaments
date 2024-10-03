import { Player, PlayerProps } from "../../entities/player";
import { PlayerRepository } from "../player-repository";

export class InMemoryPlayerRepository implements PlayerRepository{
    private players: Player[] = []

    async create(player: PlayerProps): Promise<Player>{
        const PlayerEntity = new Player(player)
        this.players.push(PlayerEntity)
        return PlayerEntity
    }
}