import { ConversionResult } from '../models/conversion-result.model';

export interface ITimeDecimalConverter {
    toDecimal(hours: number, minutes: number, seconds: number): ConversionResult;
    toTime(decimal: number): ConversionResult;
}
