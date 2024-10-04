import { BadRequestException } from "@nestjs/common";

export class TournamentInvalidKeyError extends BadRequestException{
    constructor(){
        super("Invalid key")
    }
}