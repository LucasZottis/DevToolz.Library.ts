export { };

declare global {
    interface Boolean {
        toNumber(value: boolean): number;
    }
}

Boolean.prototype.toNumber = function (value: boolean): number {
    return value ? 1 : 0;
}