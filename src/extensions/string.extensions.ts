declare global {
    interface String {
        empty: string;

        forEach(action: (element: string) => void): void;
        isEqual(value: string): boolean;
        isEmpty(): boolean;
        isNotEmpty(): boolean;
        isNumber(): boolean;
        toNumber(): number;
        removeAccents(): string;
    }
}

// String.prototype.empty = "";

String.prototype.forEach = function (action: (element: string) => void): void {
    let value: string = this.toString();

    for (let i = 0; i < value.length; i++)
        action(value[i]);
}

String.prototype.isEqual = function (value: string): boolean {
    return value === this.toString();
}

String.prototype.isEmpty = function (this: string): boolean {
    return this.trim() === EMPTY_STRING;
};

String.prototype.isNotEmpty = function (): boolean {
    let value: string = this.toString().trim();
    return value !== "";
};

String.prototype.isNumber = function (): boolean {
    const val = this.toString().trim();
    return val.length > 0 && !isNaN(Number(val));
}

String.prototype.toNumber = function (): number {
    let value = Number(this.toString());
    return isNaN(value) ? 0 : value
}

String.prototype.removeAccents = function (): string {
    return this.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export { }
export const EMPTY_STRING = "";