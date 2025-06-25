import { ConverterBaseService } from '../../converter-base';

export class AngleConverter extends ConverterBaseService {
    constructor() {
        super(
            [
                // Base: radiano (rad)
                { id: 'radiano', name: 'Radiano', symbol: 'rad', conversionFactor: 1, isBaseUnit: true },
                { id: 'grau', name: 'Grau', symbol: '°', conversionFactor: 0.017453292519943295, isBaseUnit: false },
                { id: 'grado', name: 'Grado (gon)', symbol: 'gon', conversionFactor: 0.015707963267948967, isBaseUnit: false },
            ]
        );
    }
}