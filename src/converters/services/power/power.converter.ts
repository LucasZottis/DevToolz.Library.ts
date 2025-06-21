import { ConverterBaseService } from '../base/converter-base';

export class PowerConverter extends ConverterBaseService {
    constructor() {
        super(
            [
                // Base: Watt
                { id: 'watt', name: 'Watt', symbol: 'W', conversionFactor: 1, isBaseUnit: true },
                { id: 'quilowatt', name: 'Quilowatt', symbol: 'kW', conversionFactor: 1000, isBaseUnit: false },
                { id: 'cavalo-vapor-eua', name: 'Cavalo-vapor (EUA)', symbol: 'hp (EUA)', conversionFactor: 745.69987158227022, isBaseUnit: false },
                { id: 'libra-pe-por-minuto', name: 'Libra-pé por minuto', symbol: 'lbf·ft/min', conversionFactor: 0.0225969658, isBaseUnit: false },
                { id: 'btu-por-minuto', name: 'BTU por minuto', symbol: 'BTU/min', conversionFactor: 17.5842666667, isBaseUnit: false },
            ]
        );
    }
}