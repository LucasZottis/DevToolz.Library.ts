export { };

declare global {
    interface Number {
        between(lowestValue: Number, highestValue: Number, inclusive: boolean): boolean;
        isEqual(value: Number): boolean;
        isNotEqual(value: Number): boolean;
        greaterThan(value: Number): boolean;
        lessThan(value: Number): boolean;
        toBoolean(value: Number): boolean;
    }
}

Number.prototype.isEqual = function (value: number): boolean {
    return this.valueOf() === value;
}

Number.prototype.isNotEqual = function (value: number): boolean {
    return this.valueOf() !== value;
}

Number.prototype.greaterThan = function (value: number): boolean {
    return this.valueOf() > value;
}

Number.prototype.lessThan = function (value: number): boolean {
    return this.valueOf() < value;
}

Number.prototype.between = function (lowestValue: number, highestValue: number, inclusive: boolean): boolean {
    let value = this.valueOf();

    if (inclusive)
        return value >= lowestValue && value <= highestValue;
    else
        return value > lowestValue && value < highestValue;
}

Number.prototype.toBoolean = function (): boolean {
    return Math.abs(this as number) !== 0;
}