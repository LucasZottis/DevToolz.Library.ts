import { ConverterBaseService } from '../../converter-base';

export class LengthConverter extends ConverterBaseService {
    constructor() {
        super(
            [
                // Base: Metro
                { id: 'angstrom', name: 'Ångström', symbol: 'Å', conversionFactor: 1e-10, isBaseUnit: false },
                { id: 'micron', name: 'Mícron', symbol: 'µ', conversionFactor: 1e-6, isBaseUnit: false },
                { id: 'picometro', name: 'Picômetro', symbol: 'pm', conversionFactor: 1e-12, isBaseUnit: false },
                { id: 'nanometro', name: 'Nanômetro', symbol: 'nm', conversionFactor: 1e-9, isBaseUnit: false },
                { id: 'micrometro', name: 'Micrômetro', symbol: 'µm', conversionFactor: 1e-6, isBaseUnit: false },
                { id: 'milimetro', name: 'Milímetro', symbol: 'mm', conversionFactor: 1e-3, isBaseUnit: false },
                { id: 'centimetro', name: 'Centímetro', symbol: 'cm', conversionFactor: 1e-2, isBaseUnit: false },
                { id: 'decimetro', name: 'Decímetro', symbol: 'dm', conversionFactor: 1e-1, isBaseUnit: false },
                { id: 'metro', name: 'Metro', symbol: 'm', conversionFactor: 1, isBaseUnit: true },
                { id: 'quilometro', name: 'Quilômetro', symbol: 'km', conversionFactor: 1e3, isBaseUnit: false },

                { id: 'polegada', name: 'Polegada', symbol: 'in', conversionFactor: 0.0254, isBaseUnit: false },
                { id: 'pes', name: 'Pé', symbol: 'ft', conversionFactor: 0.3048, isBaseUnit: false },
                { id: 'jarda', name: 'Jarda', symbol: 'yd', conversionFactor: 0.9144, isBaseUnit: false },
                { id: 'milha', name: 'Milha terrestre', symbol: 'mi', conversionFactor: 1609.344, isBaseUnit: false },
                { id: 'milha-nautica', name: 'Milha náutica', symbol: 'nmi', conversionFactor: 1852, isBaseUnit: false },

                { id: 'parsec', name: 'Parsec', symbol: 'pc', conversionFactor: 3.085677581491367e16, isBaseUnit: false },
                { id: 'distancia-lunar', name: 'Distância lunar média', symbol: 'LD', conversionFactor: 384400000, isBaseUnit: false },
                { id: 'unidade-astronomica', name: 'Unidade astronômica', symbol: 'au', conversionFactor: 1.495978707e11, isBaseUnit: false },
                { id: 'ano-luz', name: 'Ano-luz', symbol: 'ly', conversionFactor: 9.4607304725808e15, isBaseUnit: false },
            ]
        );
    }
}