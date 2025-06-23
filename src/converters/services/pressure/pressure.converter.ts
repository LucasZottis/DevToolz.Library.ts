import { ConverterBaseService } from '../base/converter-base';

export class Pressure extends ConverterBaseService {
    constructor() {
        super(
            [
                // Base: Pascal
                { id: 'pascal', name: 'Pascal', symbol: 'Pa', conversionFactor: 1, isBaseUnit: true },
                { id: 'quilopascal', name: 'Quilopascal', symbol: 'kPa', conversionFactor: 1000, isBaseUnit: false },
                { id: 'bar', name: 'Bar', symbol: 'bar', conversionFactor: 100000, isBaseUnit: false },
                { id: 'atmosfera', name: 'Atmosfera padrão', symbol: 'atm', conversionFactor: 101325, isBaseUnit: false },
                { id: 'milimetro-de-mercurio', name: 'Milímetro de mercúrio', symbol: 'mmHg', conversionFactor: 133.322387415, isBaseUnit: false },
                { id: 'psi', name: 'Libra por polegada quadrada', symbol: 'psi', conversionFactor: 6894.76, isBaseUnit: false },
                
            ]
        );
    }
}