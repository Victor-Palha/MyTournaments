import {randomUUID} from "node:crypto"
import { DeckList } from "./deck-list"

export interface PlayerProps {
    name: string,
    deck_list: DeckList
}

export class Player{
    public _id: string
    public name: string
    private deck_list: DeckList

    constructor({name, deck_list}: PlayerProps){
        this._id = randomUUID()
        this.name = name
        this.deck_list = deck_list
    }

    get deckList(){
        return this.deck_list
    }
}