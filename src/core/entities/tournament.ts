import { randomUUID } from "node:crypto"
import { Player } from "./player"
import { Types } from "mongoose"

export interface TournamentProps {
    name: string
    date: Date
    time: string
    description: string
    min_quorum: number
    max_quorum: number
    ticket: number
    is_free: boolean
    players?: Player[]
}

export class Tournament{
    public _id: string
    public name: string
    public description: string
    public date: Date
    public time: string
    public min_quorum: number
    public max_quorum: number
    public ticket: number
    public is_free: boolean
    public players: Player[]
    public is_open: boolean = true
    private secret_key: string

    constructor({name, description, date, time, min_quorum, max_quorum, ticket, is_free}: TournamentProps){
        this._id = randomUUID()
        this.name = name
        this.description = description
        this.date = date
        this.time = time
        this.min_quorum = min_quorum
        this.max_quorum = max_quorum
        this.ticket = ticket
        this.is_free = is_free
        this.players = []
        this.secret_key = randomUUID()
    }

    get secretKey(){
        return this.secret_key
    }

    public addPlayer(player: Player){
        this.players.push(player)
    }

    public closeTournament(key: string){
        if(key === this.secret_key){
            this.is_open = false
        }
    }

    set secretKey(key: string){
        this.secret_key = key
    }

    set idTransform(id: Types.ObjectId){
        this._id = id.toHexString()
    }
}