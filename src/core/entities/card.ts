export interface CardProps {
    id_card_pro: string
    card_name: string
    image_url: string
    quantity: number
}
export class Card {
    public id_card_pro: string
    public card_name: string
    public image_url: string
    public quantity: number

    constructor({id_card_pro, card_name, image_url, quantity}: CardProps){
        this.id_card_pro = id_card_pro
        this.card_name = card_name
        this.image_url = image_url
        this.quantity = quantity
    }
}