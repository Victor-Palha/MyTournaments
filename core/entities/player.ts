import {randomUUID} from "node:crypto"

export interface PlayerProps {
    name: string,
}

export class Player{
    public _id: string
    public name: string

    constructor({name}: PlayerProps){
        this._id = randomUUID()
        this.name = name
    }

    static create({name}){
        return new Player({name})
    }
}