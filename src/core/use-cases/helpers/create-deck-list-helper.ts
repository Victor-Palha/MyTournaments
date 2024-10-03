import { CardProps } from "../../entities/card";
import { DeckListRepository } from "../../repositories/deck-list-repository";
import { CreateCardsUseCase } from "../create-cards-use-case";

export async function createDeckListHelper(deckListRepository: DeckListRepository){
    const mainDeckInformation: CardProps[] = [{
        card_name: "Mimighoul Master",
        id_card_pro: "55537983",
        image_url: "https://images.ygoprodeck.com/images/cards_small/55537983.jpg",
        quantity: 2
    },{
        card_name: "Mimighoul Dragon",
        id_card_pro: "81522098",
        image_url: "https://images.ygoprodeck.com/images/cards_small/81522098.jpg",
        quantity: 3
    },{
        card_name: "Mimighoul Archfiend",
        id_card_pro: "50415441",
        image_url: "https://images.ygoprodeck.com/images/cards_small/50415441.jpg",
        quantity: 3
    },{
        card_name: "Mimighoul Cerberus",
        id_card_pro: "23920796",
        image_url: "https://images.ygoprodeck.com/images/cards_small/23920796.jpg",
        quantity: 1
    },{
        card_name: "Mimighoul Dungeon",
        id_card_pro: "86809440",
        image_url: "https://images.ygoprodeck.com/images/cards_small/86809440.jpg",
        quantity: 3
    },{
        card_name: "Mimighoul Room",
        id_card_pro: "59293853",
        image_url: "https://images.ygoprodeck.com/images/cards_small/59293853.jpg",
        quantity: 3
    },{
        card_name: "Mimighoul Maker",
        id_card_pro: "13204145",
        image_url: "https://images.ygoprodeck.com/images/cards_small/13204145.jpg",
        quantity: 3
    },{
        card_name: "Summoning Curse",
        id_card_pro: "61650133",
        image_url: "https://images.ygoprodeck.com/images/cards_small/61650133.jpg",
        quantity: 2
    },{
        card_name: "There Can Be Only One",
        id_card_pro: "24207889",
        image_url: "https://images.ygoprodeck.com/images/cards_small/24207889.jpg",
        quantity: 1
    },{
        card_name: "Terraforming",
        id_card_pro: "73628505",
        image_url: "https://images.ygoprodeck.com/images/cards_small/73628505.jpg",
        quantity: 1
    },{
        card_name: "Preparation of Rites",
        id_card_pro: "96729612",
        image_url: "https://images.ygoprodeck.com/images/cards_small/96729612.jpg",
        quantity: 1
    },{
        card_name: "Illusion of Chaos",
        id_card_pro: "12266229",
        image_url: "https://images.ygoprodeck.com/images/cards_small/12266229.jpg",
        quantity: 1
    },{
        card_name: "Magicians' Souls",
        id_card_pro: "97631303",
        image_url: "https://images.ygoprodeck.com/images/cards_small/97631303.jpg",
        quantity: 1
    },{
        card_name: "Nibiru, the Primal Being",
        id_card_pro: "27204311",
        image_url: "https://images.ygoprodeck.com/images/cards_small/27204311.jpg",
        quantity: 2
    },{
        card_name: "Dimension Shifter",
        id_card_pro: "91800273",
        image_url: "https://images.ygoprodeck.com/images/cards_small/91800273.jpg",
        quantity: 3
    },{
        card_name: "Ash Blossom & Joyous Spring",
        id_card_pro: "14558127",
        image_url: "https://images.ygoprodeck.com/images/cards_small/14558127.jpg",
        quantity: 3
    },{
        card_name: "Infinite Impermanence",
        id_card_pro: "10045474",
        image_url: "https://images.ygoprodeck.com/images/cards_small/10045474.jpg",
        quantity: 3
    },{
        card_name: "Solemn Strike",
        id_card_pro: "40605147",
        image_url: "https://images.ygoprodeck.com/images/cards_small/40605147.jpg",
        quantity: 3
    },{
        card_name: "Pot of Prosperity",
        id_card_pro: "84211599",
        image_url: "https://images.ygoprodeck.com/images/cards_small/84211599.jpg",
        quantity: 1
    }]

    const extraDeckInformation: CardProps[] = [{
        card_name: "I:P Masquerena",
        id_card_pro: "65741786",
        image_url: "https://images.ygoprodeck.com/images/cards_small/65741786.jpg",
        quantity: 2
    },{
        card_name: "Herald of the Arc Light",
        id_card_pro: "79606837",
        image_url: "https://images.ygoprodeck.com/images/cards_small/79606837.jpg",
        quantity: 1
    },{
        card_name: "Accesscode Talker",
        id_card_pro: "86066372",
        image_url: "https://images.ygoprodeck.com/images/cards_small/86066372.jpg",
        quantity: 1
    },{
        card_name: "Decode Talker",
        id_card_pro: "1861629",
        image_url: "https://images.ygoprodeck.com/images/cards_small/1861629.jpg",
        quantity: 1
    },{
        card_name: "Ancient Fairy Dragon",
        id_card_pro: "25862681",
        image_url: "https://images.ygoprodeck.com/images/cards_small/25862681.jpg",
        quantity: 1
    },{
        card_name: "Knightmare Unicorn",
        id_card_pro: "38342335",
        image_url: "https://images.ygoprodeck.com/images/cards_small/38342335.jpg",
        quantity: 2
    }]

    const sideDeckInformation: CardProps[] = [{
        card_name: "Cosmic Cyclone",
        id_card_pro: "8267140",
        image_url: "https://images.ygoprodeck.com/images/cards_small/8267140.jpg",
        quantity: 3
    },{
        card_name: "Evenly Matched",
        id_card_pro: "15693423",
        image_url: "https://images.ygoprodeck.com/images/cards_small/15693423.jpg",
        quantity: 3
    },{
        card_name: "Dimensional Barrier",
        id_card_pro: "83326048",
        image_url: "https://images.ygoprodeck.com/images/cards_small/83326048.jpg",
        quantity: 3
    },{
        card_name: "Droll & Lock Bird",
        id_card_pro: "94145021",
        image_url: "https://images.ygoprodeck.com/images/cards_small/94145021.jpg",
        quantity: 3
    },{
        card_name: "Lightning Storm",
        id_card_pro: "14532163",
        image_url: "https://images.ygoprodeck.com/images/cards_small/14532163.jpg",
        quantity: 2
    }]

    const {main_deck, extra_deck, side_deck} = await new CreateCardsUseCase().execute({
        extra_deck: extraDeckInformation,
        main_deck: mainDeckInformation,
        side_deck: sideDeckInformation
    })

    const deckList = await deckListRepository.create({
        main_deck,
        extra_deck,
        side_deck,
        deck_name: "Mimighoul Deck",
    })

    return {deck_list: deckList}
}