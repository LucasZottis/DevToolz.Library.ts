import { ConverterBaseService } from '../base/converter-base';

export class AreaConverter extends ConverterBaseService {
    constructor() {
        super(
            [
                // Base: metro quadrado (m²)
                { id: 'micrometro-quadrado', name: 'Micrômetro quadrado', symbol: 'µm²', conversionFactor: 1e-12, isBaseUnit: false },
                { id: 'milimetro-quadrado', name: 'Milímetro quadrado', symbol: 'mm²', conversionFactor: 1e-6, isBaseUnit: false },
                { id: 'centimetro-quadrado', name: 'Centímetro quadrado', symbol: 'cm²', conversionFactor: 1e-4, isBaseUnit: false },
                { id: 'decimetro-quadrado', name: 'Decímetro quadrado', symbol: 'dm²', conversionFactor: 1e-2, isBaseUnit: false },
                { id: 'metro-quadrado', name: 'Metro quadrado', symbol: 'm²', conversionFactor: 1, isBaseUnit: true },
                { id: 'hectare', name: 'Hectare', symbol: 'ha', conversionFactor: 1e4, isBaseUnit: false },
                { id: 'quilometro-quadrado', name: 'Quilômetro quadrado', symbol: 'km²', conversionFactor: 1e6, isBaseUnit: false },

                { id: 'polegada-quadrada', name: 'Polegada quadrada', symbol: 'in²', conversionFactor: 0.00064516, isBaseUnit: false },
                { id: 'pe-quadrado', name: 'Pé quadrado', symbol: 'ft²', conversionFactor: 0.09290304, isBaseUnit: false },
                { id: 'jarda-quadrada', name: 'Jarda quadrada', symbol: 'yd²', conversionFactor: 0.83612736, isBaseUnit: false },
                { id: 'acre', name: 'Acre', symbol: 'ac', conversionFactor: 4046.8564224, isBaseUnit: false },
                { id: 'milha-quadrada', name: 'Milha quadrada', symbol: 'mi²', conversionFactor: 2.589988110336e6, isBaseUnit: false },
            ]
        );
    }
}