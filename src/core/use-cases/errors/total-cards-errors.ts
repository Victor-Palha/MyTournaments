export class MainDeckNotEnoughError extends Error {
    constructor() {
        super('Main deck must have at least 40 cards');
    }
}

export class MainDeckTooManyError extends Error {
    constructor() {
        super('Main deck must have at most 60 cards');
    }
}

export class ExtraDeckTooManyError extends Error {
    constructor() {
        super('Extra deck must have at most 15 cards');
    }
}

export class SideDeckTooManyError extends Error {
    constructor() {
        super('Side deck must have at most 15 cards');
    }
}