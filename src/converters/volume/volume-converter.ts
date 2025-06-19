import { ConverterBaseService } from '../services/converter-base';

export class VolumeConverter extends ConverterBaseService {
    constructor() {
        super(
            [
                // Base: mililitros
                { id: 'mililitro', name: 'Mililitro', symbol: 'mL', conversionFactor: 1, isBaseUnit: true },
                { id: 'centilitro', name: 'Centilitro', symbol: 'cL', conversionFactor: 10, isBaseUnit: false },
                { id: 'decilitro', name: 'Decilitro', symbol: 'dL', conversionFactor: 100, isBaseUnit: false },
                { id: 'litro', name: 'Litro', symbol: 'L', conversionFactor: 1000, isBaseUnit: false },
                { id: 'hectolitro', name: 'Hectolitro', symbol: 'hL', conversionFactor: 100000, isBaseUnit: false },

                { id: 'milimetro-cubico', name: 'Milímetro cúbico', symbol: 'mm³', conversionFactor: 0.001, isBaseUnit: false },
                { id: 'centimetro-cubico', name: 'Centímetro cúbico', symbol: 'cm³', conversionFactor: 1, isBaseUnit: false },
                { id: 'decimetro-cubico', name: 'Decímetro cúbico', symbol: 'dm³', conversionFactor: 1000, isBaseUnit: false },
                { id: 'metro-cubico', name: 'Metro cúbico', symbol: 'm³', conversionFactor: 1000000, isBaseUnit: false },

                { id: 'colher-cha-eua', name: 'Colher de chá (EUA)', symbol: 'tsp (US)', conversionFactor: 4.92892159375, isBaseUnit: false },
                { id: 'colher-sopa-eua', name: 'Colher de sopa (EUA)', symbol: 'Tbsp (US)', conversionFactor: 14.78676478125, isBaseUnit: false },
                { id: 'onca-fluida-eua', name: 'Onça fluida (EUA)', symbol: 'fl oz (US)', conversionFactor: 29.5735295625, isBaseUnit: false },
                { id: 'xicara-eua', name: 'Xícara (EUA)', symbol: 'cup (US)', conversionFactor: 236.5882365, isBaseUnit: false },
                { id: 'pinta-eua', name: 'Pinta líquida (EUA)', symbol: 'pt (US)', conversionFactor: 473.176473, isBaseUnit: false },
                { id: 'quarto-eua', name: 'Quarto de galão (EUA)', symbol: 'qt (US)', conversionFactor: 946.352946, isBaseUnit: false },
                { id: 'galao-liquido-eua', name: 'Galão líquido (EUA)', symbol: 'gal (US)', conversionFactor: 3785.411784, isBaseUnit: false },
                { id: 'galao-seco-eua', name: 'Galão seco (EUA)', symbol: 'dry gal (US)', conversionFactor: 4404.8838, isBaseUnit: false },

                { id: 'polegada-cubica', name: 'Polegada cúbica', symbol: 'in³', conversionFactor: 16.387064, isBaseUnit: false },
                { id: 'pe-cubico', name: 'Pé cúbico', symbol: 'ft³', conversionFactor: 28316.846592, isBaseUnit: false },
                { id: 'jarda-cubica', name: 'Jarda cúbica', symbol: 'yd³', conversionFactor: 764554.857984, isBaseUnit: false },
                { id: 'acre-pe-cubico', name: 'Acre-pé cúbico', symbol: 'ac⋅ft', conversionFactor: 1233481836.54784, isBaseUnit: false },

                { id: 'colher-cha-imperial', name: 'Colher de chá (Imperial)', symbol: 'tsp (UK)', conversionFactor: 5.91939, isBaseUnit: false },
                { id: 'colher-sopa-imperial', name: 'Colher de sopa (Imperial)', symbol: 'Tbsp (UK)', conversionFactor: 17.7582, isBaseUnit: false },
                { id: 'onca-fluida-imperial', name: 'Onça fluida (Imperial)', symbol: 'fl oz (UK)', conversionFactor: 28.4130625, isBaseUnit: false },
                { id: 'pinta-imperial', name: 'Pinta (Imperial)', symbol: 'pt (UK)', conversionFactor: 568.26125, isBaseUnit: false },
                { id: 'quarto-imperial', name: 'Quarto de galão (Imperial)', symbol: 'qt (UK)', conversionFactor: 1136.5225, isBaseUnit: false },
                { id: 'galao-imperial', name: 'Galão (Imperial)', symbol: 'gal (UK)', conversionFactor: 4546.09, isBaseUnit: false },
            ]
        );
    }
}