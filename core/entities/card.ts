import { randomUUID } from "node:crypto"

export class Card {
    public _id: string
    public id_card_pro: string
    public card_name: string
    public quantity: number
    public id_deck_list: string

    constructor({id_card_pro, card_name, quantity, id_deck_list}: Card){
        this._id = randomUUID()
        this.id_card_pro = id_card_pro
        this.card_name = card_name
        this.quantity = quantity
        this.id_deck_list = id_deck_list
    }
}