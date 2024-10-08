import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema  } from "mongoose";
import { Player, PlayerSchema } from "./player.schema";

export type TournamentDocument = HydratedDocument<Tournament>
@Schema()
export class Tournament {
    @Prop()
    public name: string

    @Prop()
    public date: Date

    @Prop()
    public time: string

    @Prop()
    public description: string

    @Prop()
    public min_quorum: number

    @Prop()
    public max_quorum: number

    @Prop()
    public ticket: number

    @Prop()
    public is_free: boolean

    @Prop({
        default: true
    })
    public is_open: boolean

    @Prop()
    public secret_key: string

    @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: Player.name }]})
    public players: Player[]
}

export const TournamentSchema = SchemaFactory.createForClass(Tournament)