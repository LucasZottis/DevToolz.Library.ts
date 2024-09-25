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

Number.prototype.isEqual = function (value: Number): boolean {
    return this === value;
}

Number.prototype.isNotEqual = function (value: Number): boolean {
    return this !== value;
}

Number.prototype.greaterThan = function (value: Number): boolean {
    return this > value;
}

Number.prototype.lessThan = function (value: Number): boolean {
    return this < value;
}

Number.prototype.between = function (lowestValue: number, highestValue: number, inclusive: boolean): boolean {
    let value = this as number;
    if (inclusive)
        return value >= lowestValue && value <= highestValue;
    else
        return value > lowestValue && value < highestValue;
}

Number.prototype.toBoolean = function (): boolean {
    let value = this as number;

    return Math.abs(value).isNotEqual(0);
}