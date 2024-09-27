export class TournamentAlreadyClosedError extends Error{
    constructor(){
        super('Tournament is already closed')
    }
}