export { }

declare global {
    interface String {
        empty: string;

        forEach(action: (element: string) => void): void;
        isEqual(value: string): boolean;
        isEmpty(): boolean;
        isNotEmpty(): boolean;
        isNumber(): boolean;
        toNumber(): number;
    }
}

String.prototype.empty = "";

String.prototype.forEach = function (action: (element: string) => void): void {
    let value: string = this;

    for (let i = 0; i < value.length; i++)
        action(value[i]);
}

String.prototype.isEqual = function (value: string): boolean {
    return value === this;
}

String.prototype.isEmpty = function (): boolean {
    let value: string = this;

    return value === undefined && value === null && value.trim() === "";
}

String.prototype.isNotEmpty = function (): boolean {
    let value: string = this;

    return value !== undefined && value !== null && value.trim() !== "";
}

String.prototype.isNumber = function (): boolean {
    return isNaN(Number(this));
}

String.prototype.toNumber = function (): number {
    let value = Number(this);
    return isNaN(value) ? 0 : value
}