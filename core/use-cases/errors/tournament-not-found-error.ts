export class TournamentNotFoundError extends Error {
    constructor() {
        super("Tournament not found");
    }
}