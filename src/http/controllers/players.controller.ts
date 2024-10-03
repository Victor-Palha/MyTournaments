import { Body, Controller, Param, Post } from "@nestjs/common";
import { RegisterToTournamentDTO } from "../dto/players-dto";
import { CreateDeckListUseCase } from "../../core/use-cases/create-deck-list-use-case";
import { CreateCardsUseCase } from "../../core/use-cases/create-cards-use-case";
import { RegisterToTournamentUseCase } from "../../core/use-cases/register-to-tournament-use-case";

@Controller("/player")
export class PlayersController{
    constructor(
        private createDeckListUseCase: CreateDeckListUseCase,
        private createCardsUseCase: CreateCardsUseCase,
        private registerToTournamentUseCase: RegisterToTournamentUseCase
    ){}
    @Post("/:id")
    public async registerToTournament(@Param("id") id: string, @Body() body: RegisterToTournamentDTO){

        const { deck_name, extra_deck, main_deck, player_name, side_deck } = body

        const { main_deck: mainDeck, extra_deck: extraDeck, side_deck: sideDeck } = this.createCardsUseCase.execute({
            extra_deck,
            main_deck,
            side_deck
        })

        const {player} = await this.createDeckListUseCase.execute({
            deck_name,
            extra_deck: extraDeck,
            main_deck: mainDeck,
            side_deck: sideDeck,
            player_name
        })

        const {message} = await this.registerToTournamentUseCase.execute({
            player,
            tournament_id: id
        })

        return {
            message
        }
    }
}