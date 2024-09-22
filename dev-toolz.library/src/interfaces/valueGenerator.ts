export interface IValueGenerator {
    generate<T>(): T;
    generate<T>(condition?: boolean): T;
}