import { randomUUID } from "node:crypto"
export interface CardProps {
    id_card_pro: string
    card_name: string
    image_url: string
    quantity: number
    id_deck_list: string
}
export class Card {
    public _id: string
    public id_card_pro: string
    public card_name: string
    public image_url: string
    public quantity: number
    public id_deck_list: string

    constructor({id_card_pro, card_name, image_url, quantity, id_deck_list}: CardProps){
        this._id = randomUUID()
        this.id_card_pro = id_card_pro
        this.card_name = card_name
        this.image_url = image_url
        this.quantity = quantity
        this.id_deck_list = id_deck_list
    }
}