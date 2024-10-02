export { };

declare global {
    interface Array<T> {
        aggregate(predicate: (previousValue: T, currentValue: T, index: number, array: T[]) => any): T;
        all(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
        any(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
        append(appendValue: T): T[];
        // average(predicate: (previousValue: T, currentValue: T, index: number, array: T[]) => T): T;
        cast<TDestination>(): TDestination[];
        concat(values: T[]): T[];
        contains(searchElement: T): boolean;
        count(): number;
    }
}

Array.prototype.aggregate = function <T>(predicate: (previousValue: T, currentValue: T, index: number, array: T[]) => T): T {
    let list: T[] = this;
    return list.reduce(predicate);
}

Array.prototype.all = function <T>(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean {
    let list: T[] = this;
    return list.every(predicate);
}

Array.prototype.any = function <T>(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean {
    let list: T[] = this;
    return list.some(predicate);
}

Array.prototype.append = function <T>(appendValue: T): T[] {
    let list: T[] = this;
    return [...list, appendValue];
}

// Array.prototype.average = function <T>(predicate: (previousValue: T, currentValue: T, index: number, array: T[]) => T): T {
//     let list: T[] = this;
//     return list.reduce(predicate);
// }

Array.prototype.cast = function <T, TDestination extends T>(): TDestination[] {
    let list: T[] = this;
    return list as TDestination[];
}

Array.prototype.concat = function <T>(values: T[]): T[] {
    let list: T[] = this;
    return [...list, ...values];
}

Array.prototype.contains = function <T>(searchElement: T): boolean {
    let list: T[] = this;
    // let item = list.find(predicate);

    // return item !== undefined || item !== null;

    return list.includes(searchElement);
}

Array.prototype.count = function <T>(): number {
    let list: T[] = this;
    return list.length;
}