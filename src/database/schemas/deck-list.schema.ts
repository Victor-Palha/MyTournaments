import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type Card = {
    id_card_pro: string
    card_name: string
    image_url: string
    quantity: number
}
export type DeckListDocument = HydratedDocument<DeckList>
@Schema()
export class DeckList {
    @Prop({ type: String })
    public player_id: string;

    @Prop({ type: String })
    public deck_name: string;

    @Prop({ type: [{ id_card_pro: String, card_name: String, image_url: String, quantity: Number }] })
    public main_deck: Card[];

    @Prop({ type: [{ id_card_pro: String, card_name: String, image_url: String, quantity: Number }] })
    public side_deck: Card[];

    @Prop({ type: [{ id_card_pro: String, card_name: String, image_url: String, quantity: Number }] })
    public extra_deck: Card[];
}

export const DeckListSchema = SchemaFactory.createForClass(DeckList)