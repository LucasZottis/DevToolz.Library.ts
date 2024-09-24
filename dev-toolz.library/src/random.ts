import { IValueGenerator } from "./interfaces/valueGenerator";

export class Random implements IValueGenerator {
    int: boolean = false;
    min: number = 0;
    max: number = 1;

    constructor()
    constructor(min: number, max: number, int: boolean)
    constructor(min?: number, max?: number, int?: boolean) {
        this.int = int ?? false;
        this.min = min ?? 0;
        this.max = max ?? 9999;
    }

    private _getRandomNumber(min: number, max: number): number {
        return Math.random() * (max - min) + min
    }

    private _getRandomInteger(min: number, max: number): number {
        min = Math.ceil(min)
        max = Math.floor(max)

        return Math.floor(Math.random() * (max - min)) + min
    }

    generate(): number;
    generate(condition: boolean): number;
    generate(condition?: boolean): number {
        this.int = condition ?? false;

        if (this.int)
            return this._getRandomInteger(this.min, this.max);
        else
            return this._getRandomNumber(this.min, this.max);
    }
}