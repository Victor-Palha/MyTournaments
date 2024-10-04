import { BadRequestException } from "@nestjs/common";

export class MainDeckNotEnoughError extends BadRequestException {
    constructor() {
        super('Main deck must have at least 40 cards');
    }
}

export class MainDeckTooManyError extends BadRequestException {
    constructor() {
        super('Main deck must have at most 60 cards');
    }
}

export class ExtraDeckTooManyError extends BadRequestException {
    constructor() {
        super('Extra deck must have at most 15 cards');
    }
}

export class SideDeckTooManyError extends BadRequestException {
    constructor() {
        super('Side deck must have at most 15 cards');
    }
}