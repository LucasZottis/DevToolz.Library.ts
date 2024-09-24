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
    let value: string = this.toString();

    for (let i = 0; i < value.length; i++)
        action(value[i]);
}

String.prototype.isEqual = function (value: string): boolean {
    return value === this.toString();
}

String.prototype.isEmpty = function (): boolean {
    let value: string = this.toString();

    return value === undefined && value === null && value.trim() === "";
}

String.prototype.isNotEmpty = function (): boolean {
    let value: string = this.toString();

    return value !== undefined && value !== null && value.trim() !== "";
}

String.prototype.isNumber = function (): boolean {
    return isNaN(Number(this));
}

String.prototype.toNumber = function (): number {
    let value = Number(this.toString());
    return isNaN(value) ? 0 : value
}