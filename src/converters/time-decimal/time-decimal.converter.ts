import { ConversionResult } from './models/conversion-result.model';
import { ITimeDecimalConverter } from './interfaces/ITimeDecimal.converter';

export class TimeDecimalConverter implements ITimeDecimalConverter {
    toDecimal(hours: number, minutes: number, seconds: number): ConversionResult {
        const totalHours = hours + (minutes / 60) + (seconds / 3600);

        return {
            days: totalHours / 24,
            hours: totalHours,
            minutes: minutes / 60,
            seconds: seconds / 3600,
        };
    }

    toTime(decimal: number): ConversionResult {
        const days = Math.floor(decimal / 24);
        const remainingHours = decimal - days * 24;
        const hours = Math.floor(remainingHours);
        const decimalPart = remainingHours - hours;
        const minutes = Math.floor(decimalPart * 60);
        const seconds = Math.floor((decimalPart * 60 - minutes) * 60);

        return { days, hours, minutes, seconds };
    }
}
