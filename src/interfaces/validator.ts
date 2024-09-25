export interface IValidator {
    message: string;

    isValid(): boolean;
    isValid(value: string): boolean;
}