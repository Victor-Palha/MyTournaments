import { NotFoundException } from "@nestjs/common";

export class TournamentNotFoundError extends NotFoundException {
    constructor() {
        super("Tournament not found");
    }
}