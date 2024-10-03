import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Player, PlayerSchema } from "./schemas/player.schema";
import { Tournament, TournamentSchema } from "./schemas/tournament.schema";
import { DeckList, DeckListSchema } from "./schemas/deck-list.schema";
import { DeckListRepository } from "../../../core/repositories/deck-list-repository";
import { MongoDeckListRepository } from "./repositories/mongo-deck-list.repository";
import { TournamentRepository } from "../../../core/repositories/tournament-repository";
import { MongoTournamentRepository } from "./repositories/mongo-tournament.repository";
import { EnvModule, EnvService } from "../../env";
import { PlayerRepository } from "../../../core/repositories/player-repository";
import { MongoPlayerRepository } from "./repositories/mongo-player.repository";

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [EnvModule],
            useFactory: (envService: EnvService) => ({
                uri: envService.get('DB_URI'),
            }),
            inject: [EnvService],
        }),
        MongooseModule.forFeature([
            { name: Player.name, schema: PlayerSchema },
            { name: Tournament.name, schema: TournamentSchema },
            { name: DeckList.name, schema: DeckListSchema }
        ])
    ],
    providers: [
        {
            provide: DeckListRepository,
            useClass: MongoDeckListRepository
        },
        {
            provide: TournamentRepository,
            useClass: MongoTournamentRepository
        },
        {
            provide: PlayerRepository,
            useClass: MongoPlayerRepository
        }
    ],
    exports: [
        DeckListRepository,
        TournamentRepository,
        PlayerRepository
    ]
})
export class MongoModule {}