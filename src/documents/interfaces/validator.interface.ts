import { IValidationResult } from "../models/validation-result.model";

export interface IValidator {
    validate(value: string): IValidationResult;
}