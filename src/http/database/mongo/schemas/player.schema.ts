import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema  } from 'mongoose';
import { DeckList } from "./deck-list.schema";

export type PlayerDocument = HydratedDocument<Player>
@Schema()
export class Player {
    @Prop()
    public name: string

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: DeckList.name})
    public deck_list: DeckList
}
export const PlayerSchema = SchemaFactory.createForClass(Player)