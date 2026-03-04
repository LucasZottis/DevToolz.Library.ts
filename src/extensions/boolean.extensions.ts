export { };

declare global {
    interface Boolean {
        toNumber(value: boolean): number;
    }
}

Boolean.prototype.toNumber = function (): number {
    return this.valueOf() ? 1 : 0;
}