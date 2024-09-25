import { randomUUID } from "node:crypto"
import { Player } from "./player"

interface TournamentProps {
    name: string
    datetime: Date
    min_quorum: number
    max_quorum: number
    ticket: number
    is_free: boolean
    players: Player[] | undefined
}

export class Tournament{
    public _id: string
    public name: string
    public datetime: Date
    public min_quorum: number
    public max_quorum: number
    public ticket: number
    public is_free: boolean
    public players: Player[]

    constructor({name, datetime, min_quorum, max_quorum, ticket, is_free}: TournamentProps){
        this._id = randomUUID()
        this.name = name
        this.datetime = datetime
        this.min_quorum = min_quorum
        this.max_quorum = max_quorum
        this.ticket = ticket
        this.is_free = is_free
        this.players = []
    }

    static create({name, datetime, min_quorum, max_quorum, ticket, is_free}: TournamentProps){
        return new Tournament({
            name,
            datetime, 
            min_quorum,
            max_quorum,
            ticket, 
            is_free,
            players: []
        })
    }
}