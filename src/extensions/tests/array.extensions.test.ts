import '../array.extensions';

// ─── contains ────────────────────────────────────────────────────────────────

describe('Array.prototype.contains', () => {
    it('returns true when predicate matches an element', () => {
        expect([1, 2, 3].contains(v => v === 2)).toBe(true);
    });
    it('returns false when no element matches', () => {
        expect([1, 2, 3].contains(v => v === 5)).toBe(false);
    });
    it('returns false for empty array', () => {
        expect([].contains(() => true)).toBe(false);
    });
});

// ─── aggregate ───────────────────────────────────────────────────────────────

describe('Array.prototype.aggregate', () => {
    it('folds over numbers using a sum accumulator', () => {
        expect([1, 2, 3, 4].aggregate(0, (acc, v) => acc + v)).toBe(10);
    });
    it('builds a string from characters', () => {
        expect(['a', 'b', 'c'].aggregate('', (acc, v) => acc + v)).toBe('abc');
    });
    it('returns seed for empty array', () => {
        expect([].aggregate(42, (acc, v) => acc + v)).toBe(42);
    });
    it('passes index to accumulator', () => {
        const indices: number[] = [];
        [10, 20, 30].aggregate(0, (acc, v, i) => { indices.push(i); return acc + v; });
        expect(indices).toEqual([0, 1, 2]);
    });
});

// ─── all ─────────────────────────────────────────────────────────────────────

describe('Array.prototype.all', () => {
    it('returns true when all elements match predicate', () => {
        expect([2, 4, 6].all(v => v % 2 === 0)).toBe(true);
    });
    it('returns false when any element does not match', () => {
        expect([2, 3, 6].all(v => v % 2 === 0)).toBe(false);
    });
    it('returns true for empty array (vacuously true)', () => {
        expect([].all(() => false)).toBe(true);
    });
});

// ─── any ─────────────────────────────────────────────────────────────────────

describe('Array.prototype.any', () => {
    it('returns true when array has elements and no predicate given', () => {
        expect([1].any()).toBe(true);
    });
    it('returns false for empty array and no predicate', () => {
        expect([].any()).toBe(false);
    });
    it('returns true when any element matches predicate', () => {
        expect([1, 2, 3].any(v => v > 2)).toBe(true);
    });
    it('returns false when no element matches predicate', () => {
        expect([1, 2, 3].any(v => v > 10)).toBe(false);
    });
});

// ─── append ──────────────────────────────────────────────────────────────────

describe('Array.prototype.append', () => {
    it('returns new array with element at end', () => {
        expect([1, 2].append(3)).toEqual([1, 2, 3]);
    });
    it('does not mutate the original array', () => {
        const original = [1, 2];
        original.append(3);
        expect(original).toEqual([1, 2]);
    });
    it('works on empty array', () => {
        expect(([] as number[]).append(1)).toEqual([1]);
    });
});

// ─── average ─────────────────────────────────────────────────────────────────

describe('Array.prototype.average', () => {
    it('computes average of numbers', () => {
        expect([1, 2, 3].average()).toBe(2);
    });
    it('uses selector to extract numeric values from objects', () => {
        expect([{ v: 10 }, { v: 20 }].average(x => x.v)).toBe(15);
    });
    it('throws for empty array', () => {
        expect(() => [].average()).toThrow('Sequence contains no elements.');
    });
});

// ─── cast ────────────────────────────────────────────────────────────────────

describe('Array.prototype.cast', () => {
    it('returns the same array as a different type', () => {
        const result = [1, 2, 3].cast<number>();
        expect(result).toEqual([1, 2, 3]);
    });
});

// ─── count ───────────────────────────────────────────────────────────────────

describe('Array.prototype.count', () => {
    it('returns length when no predicate given', () => {
        expect([1, 2, 3].count()).toBe(3);
    });
    it('returns 0 for empty array', () => {
        expect([].count()).toBe(0);
    });
    it('counts elements matching predicate', () => {
        expect([1, 2, 3, 4].count(v => v % 2 === 0)).toBe(2);
    });
});

// ─── defaultIfEmpty ──────────────────────────────────────────────────────────

describe('Array.prototype.defaultIfEmpty', () => {
    it('returns the array when not empty', () => {
        expect([1, 2].defaultIfEmpty(0)).toEqual([1, 2]);
    });
    it('returns array with default value when empty', () => {
        expect(([] as number[]).defaultIfEmpty(0)).toEqual([0]);
    });
    it('returns empty array when no default provided and array is empty', () => {
        expect(([] as number[]).defaultIfEmpty()).toEqual([]);
    });
});

// ─── distinct ────────────────────────────────────────────────────────────────

describe('Array.prototype.distinct', () => {
    it('removes duplicate primitives', () => {
        expect([1, 2, 2, 3, 3].distinct()).toEqual([1, 2, 3]);
    });
    it('uses custom comparer', () => {
        const result = [{ id: 1 }, { id: 1 }, { id: 2 }].distinct((a, b) => a.id === b.id);
        expect(result).toHaveLength(2);
    });
    it('returns same array when no duplicates', () => {
        expect([1, 2, 3].distinct()).toEqual([1, 2, 3]);
    });
});

// ─── elementAt ───────────────────────────────────────────────────────────────

describe('Array.prototype.elementAt', () => {
    it('returns element at given index', () => {
        expect([10, 20, 30].elementAt(1)).toBe(20);
    });
    it('throws when index is out of range', () => {
        expect(() => [1, 2].elementAt(5)).toThrow('out of range');
    });
    it('throws for negative index', () => {
        expect(() => [1, 2].elementAt(-1)).toThrow('out of range');
    });
});

// ─── elementAtOrDefault ──────────────────────────────────────────────────────

describe('Array.prototype.elementAtOrDefault', () => {
    it('returns element at given index', () => {
        expect([10, 20, 30].elementAtOrDefault(2)).toBe(30);
    });
    it('returns default value when index is out of range', () => {
        expect([1, 2].elementAtOrDefault(5, -1)).toBe(-1);
    });
    it('returns undefined when index is out of range and no default given', () => {
        expect([1, 2].elementAtOrDefault(5)).toBeUndefined();
    });
});

// ─── except ──────────────────────────────────────────────────────────────────

describe('Array.prototype.except', () => {
    it('returns elements not in second array', () => {
        expect([1, 2, 3, 4].except([2, 4])).toEqual([1, 3]);
    });
    it('returns all elements when second is empty', () => {
        expect([1, 2, 3].except([])).toEqual([1, 2, 3]);
    });
    it('uses custom comparer', () => {
        const result = [{ id: 1 }, { id: 2 }].except([{ id: 1 }], (a, b) => a.id === b.id);
        expect(result).toHaveLength(1);
        expect(result[0].id).toBe(2);
    });
});

// ─── first ───────────────────────────────────────────────────────────────────

describe('Array.prototype.first', () => {
    it('returns first element', () => {
        expect([1, 2, 3].first()).toBe(1);
    });
    it('returns first matching element', () => {
        expect([1, 2, 3].first(v => v > 1)).toBe(2);
    });
    it('throws for empty array', () => {
        expect(() => [].first()).toThrow('Sequence contains no elements.');
    });
    it('throws when no element matches predicate', () => {
        expect(() => [1, 2].first(v => v > 10)).toThrow('Sequence contains no matching element.');
    });
});

// ─── firstOrDefault ──────────────────────────────────────────────────────────

describe('Array.prototype.firstOrDefault', () => {
    it('returns first element', () => {
        expect([1, 2, 3].firstOrDefault()).toBe(1);
    });
    it('returns default when array is empty', () => {
        expect(([] as number[]).firstOrDefault(undefined, 0)).toBe(0);
    });
    it('returns first matching element', () => {
        expect([1, 2, 3].firstOrDefault(v => v > 1)).toBe(2);
    });
    it('returns default when no element matches', () => {
        expect([1, 2].firstOrDefault(v => v > 10, -1)).toBe(-1);
    });
});

// ─── groupBy ─────────────────────────────────────────────────────────────────

describe('Array.prototype.groupBy', () => {
    it('groups elements by key', () => {
        const result = [1, 2, 3, 4].groupBy(v => v % 2 === 0 ? 'even' : 'odd');
        expect(result.get('even')).toEqual([2, 4]);
        expect(result.get('odd')).toEqual([1, 3]);
    });
    it('returns empty map for empty array', () => {
        expect([].groupBy(v => v)).toEqual(new Map());
    });
    it('groups objects by property', () => {
        const data = [{ type: 'a', v: 1 }, { type: 'b', v: 2 }, { type: 'a', v: 3 }];
        const result = data.groupBy(x => x.type);
        expect(result.get('a')).toHaveLength(2);
        expect(result.get('b')).toHaveLength(1);
    });
});

// ─── intersect ───────────────────────────────────────────────────────────────

describe('Array.prototype.intersect', () => {
    it('returns common elements', () => {
        expect([1, 2, 3].intersect([2, 3, 4])).toEqual([2, 3]);
    });
    it('returns empty when no common elements', () => {
        expect([1, 2].intersect([3, 4])).toEqual([]);
    });
    it('uses custom comparer', () => {
        const result = [{ id: 1 }, { id: 2 }].intersect([{ id: 2 }], (a, b) => a.id === b.id);
        expect(result).toHaveLength(1);
    });
});

// ─── last ────────────────────────────────────────────────────────────────────

describe('Array.prototype.last', () => {
    it('returns last element', () => {
        expect([1, 2, 3].last()).toBe(3);
    });
    it('returns last matching element', () => {
        expect([1, 2, 3].last(v => v < 3)).toBe(2);
    });
    it('throws for empty array', () => {
        expect(() => [].last()).toThrow('Sequence contains no elements.');
    });
    it('throws when no element matches predicate', () => {
        expect(() => [1, 2].last(v => v > 10)).toThrow('Sequence contains no matching element.');
    });
});

// ─── lastOrDefault ───────────────────────────────────────────────────────────

describe('Array.prototype.lastOrDefault', () => {
    it('returns last element', () => {
        expect([1, 2, 3].lastOrDefault()).toBe(3);
    });
    it('returns default when array is empty', () => {
        expect(([] as number[]).lastOrDefault(undefined, 0)).toBe(0);
    });
    it('returns last matching element', () => {
        expect([1, 2, 3].lastOrDefault(v => v < 3)).toBe(2);
    });
    it('returns default when no element matches', () => {
        expect([1, 2].lastOrDefault(v => v > 10, -1)).toBe(-1);
    });
});

// ─── max ─────────────────────────────────────────────────────────────────────

describe('Array.prototype.max', () => {
    it('returns maximum number', () => {
        expect([3, 1, 4, 1, 5].max()).toBe(5);
    });
    it('uses selector for objects', () => {
        expect([{ v: 10 }, { v: 30 }, { v: 20 }].max(x => x.v)).toBe(30);
    });
    it('throws for empty array', () => {
        expect(() => [].max()).toThrow('Sequence contains no elements.');
    });
});

// ─── min ─────────────────────────────────────────────────────────────────────

describe('Array.prototype.min', () => {
    it('returns minimum number', () => {
        expect([3, 1, 4, 1, 5].min()).toBe(1);
    });
    it('uses selector for objects', () => {
        expect([{ v: 10 }, { v: 30 }, { v: 5 }].min(x => x.v)).toBe(5);
    });
    it('throws for empty array', () => {
        expect(() => [].min()).toThrow('Sequence contains no elements.');
    });
});

// ─── ofType ──────────────────────────────────────────────────────────────────

describe('Array.prototype.ofType', () => {
    it('filters elements by constructor type', () => {
        class Dog { name = 'dog'; }
        class Cat { name = 'cat'; }
        const animals: object[] = [new Dog(), new Cat(), new Dog()];
        const dogs = animals.ofType(Dog);
        expect(dogs).toHaveLength(2);
        expect(dogs[0]).toBeInstanceOf(Dog);
    });
});

// ─── orderBy / orderByDescending / thenBy / thenByDescending ─────────────────

describe('Array.prototype.orderBy', () => {
    it('sorts numbers ascending', () => {
        expect([3, 1, 2].orderBy(v => v)).toEqual([1, 2, 3]);
    });
    it('sorts strings ascending', () => {
        expect(['banana', 'apple', 'cherry'].orderBy(v => v)).toEqual(['apple', 'banana', 'cherry']);
    });
    it('does not mutate original array', () => {
        const arr = [3, 1, 2];
        arr.orderBy(v => v);
        expect(arr).toEqual([3, 1, 2]);
    });
});

describe('Array.prototype.orderByDescending', () => {
    it('sorts numbers descending', () => {
        expect([3, 1, 2].orderByDescending(v => v)).toEqual([3, 2, 1]);
    });
});

describe('IOrderedArray.thenBy', () => {
    it('applies secondary ascending sort', () => {
        const data = [{ a: 2, b: 2 }, { a: 1, b: 3 }, { a: 1, b: 1 }];
        const result = data.orderBy(x => x.a).thenBy(x => x.b);
        expect(result.map(x => x.b)).toEqual([1, 3, 2]);
    });
});

describe('IOrderedArray.thenByDescending', () => {
    it('applies secondary descending sort', () => {
        const data = [{ a: 1, b: 1 }, { a: 1, b: 3 }, { a: 2, b: 2 }];
        const result = data.orderBy(x => x.a).thenByDescending(x => x.b);
        expect(result.map(x => x.b)).toEqual([3, 1, 2]);
    });
});

// ─── reverse ─────────────────────────────────────────────────────────────────

describe('Array.prototype.reverse', () => {
    it('returns a new reversed array', () => {
        expect([1, 2, 3].reverse()).toEqual([3, 2, 1]);
    });
    it('does not mutate the original array', () => {
        const arr = [1, 2, 3];
        arr.reverse();
        expect(arr).toEqual([1, 2, 3]);
    });
    it('works on empty array', () => {
        expect([].reverse()).toEqual([]);
    });
});

// ─── select ──────────────────────────────────────────────────────────────────

describe('Array.prototype.select', () => {
    it('projects each element', () => {
        expect([1, 2, 3].select(v => v * 2)).toEqual([2, 4, 6]);
    });
    it('passes index to selector', () => {
        expect(['a', 'b'].select((v, i) => `${i}:${v}`)).toEqual(['0:a', '1:b']);
    });
    it('returns empty for empty array', () => {
        expect([].select(v => v)).toEqual([]);
    });
});

// ─── selectMany ──────────────────────────────────────────────────────────────

describe('Array.prototype.selectMany', () => {
    it('flattens nested arrays', () => {
        expect([[1, 2], [3, 4]].selectMany(v => v)).toEqual([1, 2, 3, 4]);
    });
    it('projects and flattens', () => {
        expect([1, 2, 3].selectMany(v => [v, v * 10])).toEqual([1, 10, 2, 20, 3, 30]);
    });
    it('returns empty for empty array', () => {
        expect([].selectMany(v => v)).toEqual([]);
    });
});

// ─── single ──────────────────────────────────────────────────────────────────

describe('Array.prototype.single', () => {
    it('returns single element', () => {
        expect([42].single()).toBe(42);
    });
    it('returns single matching element', () => {
        expect([1, 2, 3].single(v => v === 2)).toBe(2);
    });
    it('throws when array is empty', () => {
        expect(() => [].single()).toThrow('Sequence contains no matching element.');
    });
    it('throws when more than one element exists', () => {
        expect(() => [1, 2].single()).toThrow('Sequence contains more than one matching element.');
    });
    it('throws when more than one element matches predicate', () => {
        expect(() => [1, 2, 3].single(v => v > 1)).toThrow('Sequence contains more than one matching element.');
    });
});

// ─── singleOrDefault ─────────────────────────────────────────────────────────

describe('Array.prototype.singleOrDefault', () => {
    it('returns single element', () => {
        expect([42].singleOrDefault()).toBe(42);
    });
    it('returns default when array is empty', () => {
        expect(([] as number[]).singleOrDefault(undefined, 0)).toBe(0);
    });
    it('throws when more than one element matches', () => {
        expect(() => [1, 2].singleOrDefault()).toThrow('Sequence contains more than one matching element.');
    });
});

// ─── skip ────────────────────────────────────────────────────────────────────

describe('Array.prototype.skip', () => {
    it('skips first n elements', () => {
        expect([1, 2, 3, 4].skip(2)).toEqual([3, 4]);
    });
    it('returns empty when skipping all', () => {
        expect([1, 2].skip(5)).toEqual([]);
    });
    it('returns all elements when skipping 0', () => {
        expect([1, 2, 3].skip(0)).toEqual([1, 2, 3]);
    });
});

// ─── skipWhile ───────────────────────────────────────────────────────────────

describe('Array.prototype.skipWhile', () => {
    it('skips elements while predicate is true', () => {
        expect([1, 2, 3, 1].skipWhile(v => v < 3)).toEqual([3, 1]);
    });
    it('returns empty when all elements match predicate', () => {
        expect([1, 2, 3].skipWhile(v => v > 0)).toEqual([]);
    });
    it('returns all elements when first does not match', () => {
        expect([5, 1, 2].skipWhile(v => v < 3)).toEqual([5, 1, 2]);
    });
});

// ─── sum ─────────────────────────────────────────────────────────────────────

describe('Array.prototype.sum', () => {
    it('sums numbers', () => {
        expect([1, 2, 3, 4].sum()).toBe(10);
    });
    it('uses selector for objects', () => {
        expect([{ v: 5 }, { v: 10 }].sum(x => x.v)).toBe(15);
    });
    it('returns 0 for empty array', () => {
        expect([].sum()).toBe(0);
    });
});

// ─── take ────────────────────────────────────────────────────────────────────

describe('Array.prototype.take', () => {
    it('takes first n elements', () => {
        expect([1, 2, 3, 4].take(2)).toEqual([1, 2]);
    });
    it('returns all when count exceeds length', () => {
        expect([1, 2].take(10)).toEqual([1, 2]);
    });
    it('returns empty when count is 0', () => {
        expect([1, 2, 3].take(0)).toEqual([]);
    });
});

// ─── takeWhile ───────────────────────────────────────────────────────────────

describe('Array.prototype.takeWhile', () => {
    it('takes elements while predicate is true', () => {
        expect([1, 2, 3, 1].takeWhile(v => v < 3)).toEqual([1, 2]);
    });
    it('returns empty when first element does not match', () => {
        expect([5, 1, 2].takeWhile(v => v < 3)).toEqual([]);
    });
    it('returns all when all match', () => {
        expect([1, 2, 3].takeWhile(v => v > 0)).toEqual([1, 2, 3]);
    });
});

// ─── union ───────────────────────────────────────────────────────────────────

describe('Array.prototype.union', () => {
    it('returns distinct elements from both arrays', () => {
        expect([1, 2, 3].union([2, 3, 4])).toEqual([1, 2, 3, 4]);
    });
    it('uses custom comparer', () => {
        const result = [{ id: 1 }].union([{ id: 1 }, { id: 2 }], (a, b) => a.id === b.id);
        expect(result).toHaveLength(2);
    });
    it('works when arrays are disjoint', () => {
        expect([1, 2].union([3, 4])).toEqual([1, 2, 3, 4]);
    });
});

// ─── where ───────────────────────────────────────────────────────────────────

describe('Array.prototype.where', () => {
    it('filters elements by predicate', () => {
        expect([1, 2, 3, 4].where(v => v % 2 === 0)).toEqual([2, 4]);
    });
    it('returns empty when no element matches', () => {
        expect([1, 3, 5].where(v => v % 2 === 0)).toEqual([]);
    });
    it('returns all when all match', () => {
        expect([2, 4].where(v => v % 2 === 0)).toEqual([2, 4]);
    });
});

// ─── zip ─────────────────────────────────────────────────────────────────────

describe('Array.prototype.zip', () => {
    it('merges two arrays into pairs', () => {
        expect([1, 2, 3].zip(['a', 'b', 'c'])).toEqual([[1, 'a'], [2, 'b'], [3, 'c']]);
    });
    it('truncates to shorter array length', () => {
        expect([1, 2, 3].zip(['a', 'b'])).toEqual([[1, 'a'], [2, 'b']]);
    });
    it('uses resultSelector when provided', () => {
        expect([1, 2].zip([10, 20], (a, b) => a + b)).toEqual([11, 22]);
    });
    it('returns empty for empty arrays', () => {
        expect([].zip([])).toEqual([]);
    });
});

// ─── Array.empty ─────────────────────────────────────────────────────────────

describe('Array.empty', () => {
    it('returns an empty array', () => {
        expect(Array.empty()).toEqual([]);
    });
    it('returns a new array each call', () => {
        const a = Array.empty();
        const b = Array.empty();
        a.push(1);
        expect(b).toHaveLength(0);
    });
});
