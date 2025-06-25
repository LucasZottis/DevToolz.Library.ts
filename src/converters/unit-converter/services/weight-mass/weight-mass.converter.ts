import { ConverterBaseService } from '../../converter-base';

export class WeightMassConverter extends ConverterBaseService {
    constructor() {
        super(
            [
                // Base: grama
                { id: 'micrograma', name: 'Micrograma', symbol: 'µg', conversionFactor: 0.000001, isBaseUnit: false },
                { id: 'miligrama', name: 'Miligrama', symbol: 'mg', conversionFactor: 0.001, isBaseUnit: false },
                { id: 'centigrama', name: 'Centigrama', symbol: 'cg', conversionFactor: 0.01, isBaseUnit: false },
                { id: 'decigrama', name: 'Decigrama', symbol: 'dg', conversionFactor: 0.1, isBaseUnit: false },
                { id: 'grama', name: 'Grama', symbol: 'g', conversionFactor: 1, isBaseUnit: true },
                { id: 'decagrama', name: 'Decagrama', symbol: 'dag', conversionFactor: 10, isBaseUnit: false },
                { id: 'hectograma', name: 'Hectograma', symbol: 'hg', conversionFactor: 100, isBaseUnit: false },
                { id: 'quilograma', name: 'Quilograma', symbol: 'kg', conversionFactor: 1000, isBaseUnit: false },
                { id: 'tonelada-metrica', name: 'Tonelada Métrica', symbol: 't', conversionFactor: 1000000, isBaseUnit: false },
                { id: 'grao', name: 'Grão', symbol: 'gr', conversionFactor: 0.06479891, isBaseUnit: false },
                { id: 'quilate', name: 'Quilate (métrico)', symbol: 'ct', conversionFactor: 0.2, isBaseUnit: false },
                { id: 'onca', name: 'Onça (avoirdupois)', symbol: 'oz', conversionFactor: 28.349523125, isBaseUnit: false },
                { id: 'libra', name: 'Libra (avoirdupois)', symbol: 'lb', conversionFactor: 453.59237, isBaseUnit: false },
                { id: 'pedra', name: 'Pedra', symbol: 'st', conversionFactor: 6350.29318, isBaseUnit: false },
                { id: 'tonelada-curta', name: 'Tonelada Curta (EUA)', symbol: 'sh.t', conversionFactor: 907184.74, isBaseUnit: false },
                { id: 'tonelada-longa', name: 'Tonelada Longa (Reino Unido)', symbol: 'l.t', conversionFactor: 1016046.9088, isBaseUnit: false },
                { id: 'quintal', name: 'Quintal (métrico)', symbol: 'q', conversionFactor: 100000, isBaseUnit: false },
            ]
        );
    }
}