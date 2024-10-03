import { Injectable } from "@nestjs/common";
import { Card, CardProps } from "../entities/card";
import { ExtraDeckTooManyError, MainDeckNotEnoughError, MainDeckTooManyError, SideDeckTooManyError } from "./errors/total-cards-errors";

interface CreateCardsUseCaseRequest {
    main_deck: CardProps[]
    side_deck: CardProps[]
    extra_deck: CardProps[]
}

interface CreateCardsUseCaseResponse {
    main_deck: Card[]
    side_deck: Card[]
    extra_deck: Card[]
    total_main_deck: number
    total_side_deck: number
    total_extra_deck: number
}

@Injectable()
export class CreateCardsUseCase{
    execute({main_deck, extra_deck, side_deck}: CreateCardsUseCaseRequest): CreateCardsUseCaseResponse{
        let total_main_deck = 0;
        let total_extra_deck = 0;
        let total_side_deck = 0;

        const mainDeck = main_deck.map(card => {
            const newCard = new Card(card);
            total_main_deck += newCard.quantity;
            return newCard;
        });

        const extraDeck = extra_deck.map(card => {
            const newCard = new Card(card);
            total_extra_deck += newCard.quantity;
            return newCard;
        });

        const sideDeck = side_deck.map(card => {
            const newCard = new Card(card);
            total_side_deck += newCard.quantity;
            return newCard;
        });

        if(total_main_deck < 40){
            throw new MainDeckNotEnoughError();
        }
        if(total_main_deck > 60){
            throw new MainDeckTooManyError();
        }
        if(total_extra_deck > 15){
            throw new ExtraDeckTooManyError();
        }
        if(total_side_deck > 15){
            throw new SideDeckTooManyError();
        }

        return {
            main_deck: mainDeck,
            extra_deck: extraDeck,
            side_deck: sideDeck,
            total_main_deck,
            total_extra_deck,
            total_side_deck
        }
    }
}