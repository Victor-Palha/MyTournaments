import { IsNotEmpty } from "class-validator";
import { CardProps } from "src/core/entities/card";

export class RegisterToTournamentDTO{
    @IsNotEmpty()
    player_name: string
    
    @IsNotEmpty()
    deck_name: string
    
    @IsNotEmpty()
    main_deck: CardProps[]
    
    @IsNotEmpty()
    extra_deck: CardProps[]
    
    @IsNotEmpty()
    side_deck: CardProps[]
}