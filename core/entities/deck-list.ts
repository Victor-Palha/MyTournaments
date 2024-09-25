import { randomUUID } from "node:crypto"
import { Card } from "./card"

export class DeckList {
    public _id: string
    public player_id: string
    public deck_name: string

    constructor({player_id, deck_name}: DeckList){
        this._id = randomUUID()
        this.player_id = player_id
        this.deck_name = deck_name
    }

    
}