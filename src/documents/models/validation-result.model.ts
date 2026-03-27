export interface IValidationResult {
    readonly isValid: boolean;
    readonly message: string;
    readonly type: "empty" | "format" | "pattern" | "invalid" | "";
}