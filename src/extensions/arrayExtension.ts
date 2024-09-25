export { };

declare global {
    interface Array<T> {
        contains(predicate: (value: T, index: number, array: T[]) => boolean): boolean;
    }
}

Array.prototype.contains = function <T>(predicate: (value: any, index: number, array: any[]) => any): boolean {
    let list: T[] = this;
    let item = list.find(predicate);

    return item !== undefined || item !== null;
}