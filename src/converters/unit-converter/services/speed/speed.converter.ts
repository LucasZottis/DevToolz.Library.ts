import { ConverterBaseService } from '../../converter-base';

export class SpeedConverter extends ConverterBaseService {
    constructor() {
        super(
            [
                // Base: m/s (metro por segundo)
                { id: 'centimetro-por-segundo', name: 'Centímetro por segundo', symbol: 'cm/s', conversionFactor: 0.01, isBaseUnit: false },
                { id: 'metro-por-segundo', name: 'Metro por segundo', symbol: 'm/s', conversionFactor: 1, isBaseUnit: true },
                { id: 'quilometro-por-hora', name: 'Quilômetro por hora', symbol: 'km/h', conversionFactor: 0.2777777778, isBaseUnit: false },
                { id: 'pes-por-segundo', name: 'Pés por segundo', symbol: 'ft/s', conversionFactor: 0.3048, isBaseUnit: false },
                { id: 'milha-por-hora', name: 'Milha por hora', symbol: 'mph', conversionFactor: 0.44704, isBaseUnit: false },
                { id: 'nos', name: 'Nó náutico', symbol: 'kn', conversionFactor: 0.514444, isBaseUnit: false },
                { id: 'mach', name: 'Mach (nível do mar)', symbol: 'Mach', conversionFactor: 340.29, isBaseUnit: false },
                { id: 'velocidade-da-luz', name: 'Velocidade da luz no vácuo', symbol: 'c', conversionFactor: 299792458, isBaseUnit: false },
                { id: 'quilometro-por-segundo', name: 'Quilômetro por segundo', symbol: 'km/s', conversionFactor: 1000, isBaseUnit: false },
                { id: 'polegada-por-segundo', name: 'Polegada por segundo', symbol: 'in/s', conversionFactor: 0.0254, isBaseUnit: false },
            ]
        );
    }
}