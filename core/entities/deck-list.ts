import { randomUUID } from "node:crypto"
import { Card } from "./card"

export class DeckList {
    public _id: string
    public player_id: string
    public deck_name: string
    public main_deck: Card[]
    public side_deck: Card[]
    public extra_deck: Card[]

    constructor({player_id, deck_name, main_deck, extra_deck, side_deck}: DeckList){
        this._id = randomUUID()
        this.player_id = player_id
        this.deck_name = deck_name
        this.main_deck = main_deck
        this.side_deck = side_deck
        this.extra_deck = extra_deck
    }

    
}