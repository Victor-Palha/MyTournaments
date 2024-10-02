export class CreateTournamentDTO {
    name: string;
    date: Date;
    time: string;
    description: string;
    min_quorum: number;
    max_quorum: number;
    ticket: number;
    is_free: boolean;
}