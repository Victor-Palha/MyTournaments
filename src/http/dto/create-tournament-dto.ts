import { IsNotEmpty } from "class-validator";

export class CreateTournamentDTO {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    date: Date;

    @IsNotEmpty()
    time: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    min_quorum: number;

    @IsNotEmpty()
    max_quorum: number;

    @IsNotEmpty()
    ticket: number;

    @IsNotEmpty()
    is_free: boolean;
}