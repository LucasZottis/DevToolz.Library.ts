import { ConverterBaseService } from '../../converter-base';

export class TimeConverter extends ConverterBaseService {
    constructor() {
        super(
            [
                // Base: segundo
                { id: 'picossegundo', name: 'Picossegundo', symbol: 'ps', conversionFactor: 1e-12, isBaseUnit: false },
                { id: 'microssegundo', name: 'Microssegundo', symbol: 'µs', conversionFactor: 1e-6, isBaseUnit: false },
                { id: 'milissegundo', name: 'Milissegundo', symbol: 'ms', conversionFactor: 0.001, isBaseUnit: false },
                { id: 'segundo', name: 'Segundo', symbol: 's', conversionFactor: 1, isBaseUnit: true },
                { id: 'minuto', name: 'Minuto', symbol: 'min', conversionFactor: 60, isBaseUnit: false },
                { id: 'hora', name: 'Hora', symbol: 'h', conversionFactor: 3600, isBaseUnit: false },
                { id: 'dia', name: 'Dia', symbol: 'd', conversionFactor: 86400, isBaseUnit: false },
                { id: 'semana', name: 'Semana', symbol: 'wk', conversionFactor: 604800, isBaseUnit: false },
                { id: 'ano', name: 'Ano', symbol: 'a', conversionFactor: 31536000, isBaseUnit: false },
            ]
        );
    }
}
