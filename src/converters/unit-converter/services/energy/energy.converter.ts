import { ConverterBaseService } from '../../converter-base';

export class LengthConverter extends ConverterBaseService {
    constructor() {
        super(
            [
                // Base: Joule
                { id: 'joule', name: 'Joule', symbol: 'J', conversionFactor: 1, isBaseUnit: true },
                { id: 'quilojoule', name: 'Quilojoule', symbol: 'kJ', conversionFactor: 1000, isBaseUnit: false },
                { id: 'eletron-volt', name: 'Elétron-volt', symbol: 'eV', conversionFactor: 1.602176634e-19, isBaseUnit: false },
                { id: 'caloria-termica', name: 'Caloria térmica (cal)', symbol: 'cal', conversionFactor: 4.184, isBaseUnit: false },
                { id: 'caloria-alimentar', name: 'Caloria alimentar (kcal)', symbol: 'kcal', conversionFactor: 4184, isBaseUnit: false },
                { id: 'libra-pe', name: 'Libra-pé', symbol: 'lbf·ft', conversionFactor: 1.3558179483314, isBaseUnit: false },
                { id: 'btu', name: 'Unidade Térmica Britânica (BTU)', symbol: 'BTU', conversionFactor: 1055.05585262, isBaseUnit: false },
                // { id: 'quilowatt-hora', name: 'Quilowatt-hora', symbol: 'kWh', conversionFactor: 3.6e6, isBaseUnit: false }
            ]
        );
    }
}