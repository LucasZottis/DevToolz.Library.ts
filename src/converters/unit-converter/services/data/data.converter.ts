import { ConverterBaseService } from '../../converter-base';

export class DataConverter extends ConverterBaseService {
    constructor() {
        super(
            [
                // Base: bit
                { id: 'bit', name: 'Bit', symbol: 'bit', conversionFactor: 1, isBaseUnit: true },
                { id: 'byte', name: 'Byte', symbol: 'B', conversionFactor: 8, isBaseUnit: false },
                { id: 'kilobit', name: 'Kilobit', symbol: 'kbit', conversionFactor: 1000, isBaseUnit: false },
                { id: 'kilobyte', name: 'Kilobyte', symbol: 'kB', conversionFactor: 8000, isBaseUnit: false },
                { id: 'megabit', name: 'Megabit', symbol: 'Mbit', conversionFactor: 1000000, isBaseUnit: false },
                { id: 'megabyte', name: 'Megabyte', symbol: 'MB', conversionFactor: 8000000, isBaseUnit: false },
                { id: 'gigabit', name: 'Gigabit', symbol: 'Gbit', conversionFactor: 1000000000, isBaseUnit: false },
                { id: 'gigabyte', name: 'Gigabyte', symbol: 'GB', conversionFactor: 8000000000, isBaseUnit: false },
                { id: 'terabit', name: 'Terabit', symbol: 'Tbit', conversionFactor: 1000000000000, isBaseUnit: false },
                { id: 'terabyte', name: 'Terabyte', symbol: 'TB', conversionFactor: 8000000000000, isBaseUnit: false },
                { id: 'petabit', name: 'Petabit', symbol: 'Pbit', conversionFactor: 1000000000000000, isBaseUnit: false },
                { id: 'petabyte', name: 'Petabyte', symbol: 'PB', conversionFactor: 8000000000000000, isBaseUnit: false },
                { id: 'exabit', name: 'Exabit', symbol: 'Ebit', conversionFactor: 1000000000000000000, isBaseUnit: false },
                { id: 'exabyte', name: 'Exabyte', symbol: 'EB', conversionFactor: 8000000000000000000, isBaseUnit: false },
                { id: 'zetabit', name: 'Zetabit', symbol: 'Zbit', conversionFactor: 1000000000000000000000, isBaseUnit: false },
                { id: 'zetabyte', name: 'Zetabyte', symbol: 'ZB', conversionFactor: 8000000000000000000000, isBaseUnit: false },
                { id: 'yottabit', name: 'Yottabit', symbol: 'Ybit', conversionFactor: 1000000000000000000000000, isBaseUnit: false },
                { id: 'yottabyte', name: 'Yottabyte', symbol: 'YB', conversionFactor: 8000000000000000000000000, isBaseUnit: false }
            ]
        );
    }
}