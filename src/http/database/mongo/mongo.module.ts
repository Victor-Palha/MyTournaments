import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { env } from "src/http/env/config.env";
import { Player, PlayerSchema } from "./schemas/player.schema";
import { Tournament, TournamentSchema } from "./schemas/tournament.schema";
import { DeckList, DeckListSchema } from "./schemas/deck-list.schema";

@Module({
    imports: [
        MongooseModule.forRoot(env.DB_URI),
        MongooseModule.forFeature([
            { name: Player.name, schema: PlayerSchema },
            { name: Tournament.name, schema: TournamentSchema },
            { name: DeckList.name, schema: DeckListSchema }
        ])
    ]
})
export class MongoModule {}