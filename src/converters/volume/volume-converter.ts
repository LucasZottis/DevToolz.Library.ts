import { ConverterBaseService } from '../services/converter-base';

export class VolumeConverter extends ConverterBaseService {
    constructor() {
        super(
            [
                // Base: mililitros
                { id: 'mililitros', name: 'Mililitros', symbol: 'ml', conversionFactor: 1, isBaseUnit: true },
                { id: 'litros', name: 'Litros', symbol: 'l', conversionFactor: 1000, isBaseUnit: false },
                { id: 'hectolitro', name: 'Hectolitro', symbol: 'hl', conversionFactor: 100000, isBaseUnit: false },
                { id: 'decilitro', name: 'Decilitro', symbol: 'dl', conversionFactor: 100, isBaseUnit: false },
                { id: 'centilitro', name: 'Centilitro', symbol: 'cl', conversionFactor: 10, isBaseUnit: false },
                { id: 'decimetro-cubico', name: 'Decímetro cúbico', symbol: 'dm³', conversionFactor: 1000, isBaseUnit: false },
                { id: 'centimetro-cubico', name: 'Centímetro cúbico', symbol: 'cm³', conversionFactor: 1, isBaseUnit: false },
                { id: 'metro-cubico', name: 'Metro cúbico', symbol: 'm³', conversionFactor: 1000000, isBaseUnit: false },
                { id: 'onca-fluida-eua', name: 'Onça fluída (EUA)', symbol: 'fl oz (EUA)', conversionFactor: 29.5735, isBaseUnit: false },
                { id: 'onca-fluida-ru', name: 'Onça fluída (Reino Unido)', symbol: 'fl oz (RU)', conversionFactor: 28.4131, isBaseUnit: false },
                { id: 'xicara-eua', name: 'Xícara (EUA)', symbol: 'cup (EUA)', conversionFactor: 236.588, isBaseUnit: false },
                { id: 'galao-eua', name: 'Galão (EUA)', symbol: 'gal (EUA)', conversionFactor: 3785.41, isBaseUnit: false },
                { id: 'colher-cha-ru', name: 'Colher de chá (Reino Unido)', symbol: 'tsp (RU)', conversionFactor: 5.91939, isBaseUnit: false }
            ]
        );
    }
}