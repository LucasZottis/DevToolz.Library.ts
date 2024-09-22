export interface IValidator {
    isValid(): boolean;
    isValid(value: string): boolean;
}