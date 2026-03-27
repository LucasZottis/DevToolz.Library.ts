export { };

const nativeReverse = Array.prototype.reverse;

interface IOrderedArray<T> extends Array<T> {
    thenBy<TKey>(keySelector: (value: T) => TKey, comparer?: (a: TKey, b: TKey) => number): IOrderedArray<T>;
    thenByDescending<TKey>(keySelector: (value: T) => TKey, comparer?: (a: TKey, b: TKey) => number): IOrderedArray<T>;
}

type SortKey<T> = {
    keySelector: (value: T) => any;
    descending: boolean;
    comparer?: (a: any, b: any) => number;
};

function createOrderedArray<T>(source: T[], sortKeys: SortKey<T>[]): IOrderedArray<T> {
    const sorted = [...source].sort((a, b) => {
        for (const key of sortKeys) {
            const ka = key.keySelector(a);
            const kb = key.keySelector(b);
            let cmp: number;
            if (key.comparer) {
                cmp = key.comparer(ka, kb);
            } else {
                cmp = ka < kb ? -1 : ka > kb ? 1 : 0;
            }
            if (cmp !== 0) return key.descending ? -cmp : cmp;
        }
        return 0;
    });

    const ordered = sorted as IOrderedArray<T>;
    Object.defineProperty(ordered, 'thenBy', {
        value: function <TKey>(keySelector: (value: T) => TKey, comparer?: (a: TKey, b: TKey) => number): IOrderedArray<T> {
            return createOrderedArray(source, [...sortKeys, { keySelector, descending: false, comparer }]);
        },
        enumerable: false,
        configurable: true,
        writable: true,
    });
    Object.defineProperty(ordered, 'thenByDescending', {
        value: function <TKey>(keySelector: (value: T) => TKey, comparer?: (a: TKey, b: TKey) => number): IOrderedArray<T> {
            return createOrderedArray(source, [...sortKeys, { keySelector, descending: true, comparer }]);
        },
        enumerable: false,
        configurable: true,
        writable: true,
    });
    return ordered;
}

declare global {
    interface Array<T> {
        contains(predicate: (value: T, index: number, array: T[]) => boolean): boolean;
        aggregate<TAccumulate>(seed: TAccumulate, accumulator: (acc: TAccumulate, current: T, index: number) => TAccumulate): TAccumulate;
        all(predicate: (value: T, index: number, array: T[]) => boolean): boolean;
        any(predicate?: (value: T, index: number, array: T[]) => boolean): boolean;
        append(element: T): T[];
        average(selector?: (value: T) => number): number;
        cast<TResult>(): TResult[];
        count(predicate?: (value: T, index: number, array: T[]) => boolean): number;
        defaultIfEmpty(defaultValue?: T): T[];
        distinct(comparer?: (a: T, b: T) => boolean): T[];
        elementAt(index: number): T;
        elementAtOrDefault(index: number, defaultValue?: T): T | undefined;
        except(second: T[], comparer?: (a: T, b: T) => boolean): T[];
        first(predicate?: (value: T, index: number, array: T[]) => boolean): T;
        firstOrDefault(predicate?: (value: T, index: number, array: T[]) => boolean, defaultValue?: T): T | undefined;
        groupBy<TKey>(keySelector: (value: T) => TKey): Map<TKey, T[]>;
        intersect(second: T[], comparer?: (a: T, b: T) => boolean): T[];
        last(predicate?: (value: T, index: number, array: T[]) => boolean): T;
        lastOrDefault(predicate?: (value: T, index: number, array: T[]) => boolean, defaultValue?: T): T | undefined;
        max(selector?: (value: T) => number): number;
        min(selector?: (value: T) => number): number;
        ofType<TResult>(constructor: new (...args: any[]) => TResult): TResult[];
        orderBy<TKey>(keySelector: (value: T) => TKey, comparer?: (a: TKey, b: TKey) => number): IOrderedArray<T>;
        orderByDescending<TKey>(keySelector: (value: T) => TKey, comparer?: (a: TKey, b: TKey) => number): IOrderedArray<T>;
        reverse(): T[];
        select<TResult>(selector: (value: T, index: number) => TResult): TResult[];
        selectMany<TResult>(selector: (value: T, index: number) => TResult[]): TResult[];
        single(predicate?: (value: T, index: number, array: T[]) => boolean): T;
        singleOrDefault(predicate?: (value: T, index: number, array: T[]) => boolean, defaultValue?: T): T | undefined;
        skip(count: number): T[];
        skipWhile(predicate: (value: T, index: number) => boolean): T[];
        sum(selector?: (value: T) => number): number;
        take(count: number): T[];
        takeWhile(predicate: (value: T, index: number) => boolean): T[];
        union(second: T[], comparer?: (a: T, b: T) => boolean): T[];
        where(predicate: (value: T, index: number, array: T[]) => boolean): T[];
        zip<TSecond>(second: TSecond[]): [T, TSecond][];
        zip<TSecond, TResult>(second: TSecond[], resultSelector: (first: T, second: TSecond) => TResult): TResult[];
    }

    interface ArrayConstructor {
        empty<T>(): T[];
    }
}

Array.prototype.contains = function <T>(predicate: (value: T, index: number, array: T[]) => boolean): boolean {
    const list: T[] = this;
    const item = list.find(predicate);
    return item !== undefined && item !== null;
};

Array.prototype.aggregate = function <T, TAccumulate>(
    seed: TAccumulate,
    accumulator: (acc: TAccumulate, current: T, index: number) => TAccumulate
): TAccumulate {
    const list: T[] = this;
    let result = seed;
    for (let i = 0; i < list.length; i++) {
        result = accumulator(result, list[i], i);
    }
    return result;
};

Array.prototype.all = function <T>(predicate: (value: T, index: number, array: T[]) => boolean): boolean {
    const list: T[] = this;
    return list.every(predicate);
};

Array.prototype.any = function <T>(predicate?: (value: T, index: number, array: T[]) => boolean): boolean {
    const list: T[] = this;
    if (!predicate) return list.length > 0;
    return list.some(predicate);
};

Array.prototype.append = function <T>(element: T): T[] {
    return [...this, element];
};

Array.prototype.average = function <T>(selector?: (value: T) => number): number {
    const list: T[] = this;
    if (list.length === 0) throw new Error('Sequence contains no elements.');
    const values = selector ? list.map(selector) : (list as unknown as number[]);
    return (values as number[]).reduce((acc, v) => acc + v, 0) / list.length;
};

Array.prototype.cast = function <TResult>(): TResult[] {
    return this as unknown as TResult[];
};

Array.prototype.count = function <T>(predicate?: (value: T, index: number, array: T[]) => boolean): number {
    const list: T[] = this;
    if (!predicate) return list.length;
    return list.filter(predicate).length;
};

Array.prototype.defaultIfEmpty = function <T>(defaultValue?: T): T[] {
    const list: T[] = this;
    if (list.length > 0) return list;
    return defaultValue !== undefined ? [defaultValue] : [];
};

Array.prototype.distinct = function <T>(comparer?: (a: T, b: T) => boolean): T[] {
    const list: T[] = this;
    if (!comparer) return [...new Set(list)];
    const result: T[] = [];
    for (const item of list) {
        if (!result.some(r => comparer(r, item))) {
            result.push(item);
        }
    }
    return result;
};

Array.prototype.elementAt = function <T>(index: number): T {
    const list: T[] = this;
    if (index < 0 || index >= list.length) throw new Error(`Index ${index} is out of range.`);
    return list[index];
};

Array.prototype.elementAtOrDefault = function <T>(index: number, defaultValue?: T): T | undefined {
    const list: T[] = this;
    if (index < 0 || index >= list.length) return defaultValue;
    return list[index];
};

Array.prototype.except = function <T>(second: T[], comparer?: (a: T, b: T) => boolean): T[] {
    const list: T[] = this;
    if (!comparer) return list.filter(item => !second.includes(item));
    return list.filter(item => !second.some(s => comparer(item, s)));
};

Array.prototype.first = function <T>(predicate?: (value: T, index: number, array: T[]) => boolean): T {
    const list: T[] = this;
    if (!predicate) {
        if (list.length === 0) throw new Error('Sequence contains no elements.');
        return list[0];
    }
    const found = list.find(predicate);
    if (found === undefined) throw new Error('Sequence contains no matching element.');
    return found;
};

Array.prototype.firstOrDefault = function <T>(
    predicate?: (value: T, index: number, array: T[]) => boolean,
    defaultValue?: T
): T | undefined {
    const list: T[] = this;
    if (!predicate) return list.length > 0 ? list[0] : defaultValue;
    const found = list.find(predicate);
    return found !== undefined ? found : defaultValue;
};

Array.prototype.groupBy = function <T, TKey>(keySelector: (value: T) => TKey): Map<TKey, T[]> {
    const list: T[] = this;
    const map = new Map<TKey, T[]>();
    for (const item of list) {
        const key = keySelector(item);
        const group = map.get(key);
        if (group) {
            group.push(item);
        } else {
            map.set(key, [item]);
        }
    }
    return map;
};

Array.prototype.intersect = function <T>(second: T[], comparer?: (a: T, b: T) => boolean): T[] {
    const list: T[] = this;
    if (!comparer) return list.filter(item => second.includes(item));
    return list.filter(item => second.some(s => comparer(item, s)));
};

Array.prototype.last = function <T>(predicate?: (value: T, index: number, array: T[]) => boolean): T {
    const list: T[] = this;
    if (!predicate) {
        if (list.length === 0) throw new Error('Sequence contains no elements.');
        return list[list.length - 1];
    }
    for (let i = list.length - 1; i >= 0; i--) {
        if (predicate(list[i], i, list)) return list[i];
    }
    throw new Error('Sequence contains no matching element.');
};

Array.prototype.lastOrDefault = function <T>(
    predicate?: (value: T, index: number, array: T[]) => boolean,
    defaultValue?: T
): T | undefined {
    const list: T[] = this;
    if (!predicate) return list.length > 0 ? list[list.length - 1] : defaultValue;
    for (let i = list.length - 1; i >= 0; i--) {
        if (predicate(list[i], i, list)) return list[i];
    }
    return defaultValue;
};

Array.prototype.max = function <T>(selector?: (value: T) => number): number {
    const list: T[] = this;
    if (list.length === 0) throw new Error('Sequence contains no elements.');
    const values = selector ? list.map(selector) : (list as unknown as number[]);
    return Math.max(...(values as number[]));
};

Array.prototype.min = function <T>(selector?: (value: T) => number): number {
    const list: T[] = this;
    if (list.length === 0) throw new Error('Sequence contains no elements.');
    const values = selector ? list.map(selector) : (list as unknown as number[]);
    return Math.min(...(values as number[]));
};

Array.prototype.ofType = function <T, TResult>(constructor: new (...args: any[]) => TResult): TResult[] {
    const list: T[] = this;
    return list.filter(item => item instanceof constructor) as unknown as TResult[];
};

Array.prototype.orderBy = function <T, TKey>(
    keySelector: (value: T) => TKey,
    comparer?: (a: TKey, b: TKey) => number
): IOrderedArray<T> {
    return createOrderedArray<T>(this, [{ keySelector, descending: false, comparer }]);
};

Array.prototype.orderByDescending = function <T, TKey>(
    keySelector: (value: T) => TKey,
    comparer?: (a: TKey, b: TKey) => number
): IOrderedArray<T> {
    return createOrderedArray<T>(this, [{ keySelector, descending: true, comparer }]);
};

Array.prototype.reverse = function <T>(): T[] {
    const copy = [...this] as T[];
    return nativeReverse.call(copy) as T[];
};

Array.prototype.select = function <T, TResult>(selector: (value: T, index: number) => TResult): TResult[] {
    return (this as T[]).map(selector);
};

Array.prototype.selectMany = function <T, TResult>(selector: (value: T, index: number) => TResult[]): TResult[] {
    return (this as T[]).flatMap(selector);
};

Array.prototype.single = function <T>(predicate?: (value: T, index: number, array: T[]) => boolean): T {
    const list: T[] = this;
    const filtered = predicate ? list.filter(predicate) : list;
    if (filtered.length === 0) throw new Error('Sequence contains no matching element.');
    if (filtered.length > 1) throw new Error('Sequence contains more than one matching element.');
    return filtered[0];
};

Array.prototype.singleOrDefault = function <T>(
    predicate?: (value: T, index: number, array: T[]) => boolean,
    defaultValue?: T
): T | undefined {
    const list: T[] = this;
    const filtered = predicate ? list.filter(predicate) : list;
    if (filtered.length === 0) return defaultValue;
    if (filtered.length > 1) throw new Error('Sequence contains more than one matching element.');
    return filtered[0];
};

Array.prototype.skip = function <T>(count: number): T[] {
    return (this as T[]).slice(count);
};

Array.prototype.skipWhile = function <T>(predicate: (value: T, index: number) => boolean): T[] {
    const list: T[] = this;
    let i = 0;
    while (i < list.length && predicate(list[i], i)) i++;
    return list.slice(i);
};

Array.prototype.sum = function <T>(selector?: (value: T) => number): number {
    const list: T[] = this;
    const values = selector ? list.map(selector) : (list as unknown as number[]);
    return (values as number[]).reduce((acc, v) => acc + v, 0);
};

Array.prototype.take = function <T>(count: number): T[] {
    return (this as T[]).slice(0, count);
};

Array.prototype.takeWhile = function <T>(predicate: (value: T, index: number) => boolean): T[] {
    const list: T[] = this;
    const result: T[] = [];
    for (let i = 0; i < list.length; i++) {
        if (!predicate(list[i], i)) break;
        result.push(list[i]);
    }
    return result;
};

Array.prototype.union = function <T>(second: T[], comparer?: (a: T, b: T) => boolean): T[] {
    const combined = [...this, ...second] as T[];
    if (!comparer) return [...new Set(combined)];
    const result: T[] = [];
    for (const item of combined) {
        if (!result.some(r => comparer(r, item))) {
            result.push(item);
        }
    }
    return result;
};

Array.prototype.where = function <T>(predicate: (value: T, index: number, array: T[]) => boolean): T[] {
    return (this as T[]).filter(predicate);
};

Array.prototype.zip = function <T, TSecond, TResult>(
    second: TSecond[],
    resultSelector?: (first: T, second: TSecond) => TResult
): [T, TSecond][] | TResult[] {
    const list: T[] = this;
    const length = Math.min(list.length, second.length);
    if (resultSelector) {
        const result: TResult[] = [];
        for (let i = 0; i < length; i++) result.push(resultSelector(list[i], second[i]));
        return result;
    }
    const result: [T, TSecond][] = [];
    for (let i = 0; i < length; i++) result.push([list[i], second[i]]);
    return result;
};

Array.empty = function <T>(): T[] {
    return [];
};
