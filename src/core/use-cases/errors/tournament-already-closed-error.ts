import { ConflictException } from "@nestjs/common";

export class TournamentAlreadyClosedError extends ConflictException{
    constructor(){
        super('Tournament is already closed')
    }
}