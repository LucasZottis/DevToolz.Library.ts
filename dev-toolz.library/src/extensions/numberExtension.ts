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

Number.prototype.between = function (lowestValue: Number, highestValue: Number, inclusive: boolean): boolean {
    if (inclusive)
        return this >= lowestValue && this <= highestValue;
    else
        return this > lowestValue && this < highestValue;
}

Number.prototype.toBoolean = function (value: Number): boolean {
    return Math.abs(this).isNotEqual(0);
}