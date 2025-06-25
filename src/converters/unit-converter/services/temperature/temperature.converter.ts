import { Unit } from '../../models/unit';
import { ConverterBaseService } from '../../converter-base';

export class TemperatureConverter extends ConverterBaseService {
    constructor() {
        super(
            [
                // Base: kelvin
                { id: 'kelvin', name: 'Kelvin', symbol: 'K', conversionFactor: 1, isBaseUnit: true },
                { id: 'celsius', name: 'Celsius', symbol: '°C', conversionFactor: 273.15, isBaseUnit: false },
                { id: 'fahrenheit', name: 'Fahrenheit', symbol: '°F', conversionFactor: 459.67, isBaseUnit: false },
                { id: 'rankine', name: 'Rankine', symbol: '°R', conversionFactor: 1.8, isBaseUnit: false },
                { id: 'reaumur', name: 'Réaumur', symbol: '°Ré', conversionFactor: 1.25, isBaseUnit: false },

            ]
        );
    }

    override convert(value: number, fromUnitId: string, toUnitId: string): number {
        const from = this.getUnitById(fromUnitId);
        const to = this.getUnitById(toUnitId);

        if (!from || !to) {
            throw new Error("Unidade de temperatura não encontrada");
        }

        const kelvin = this.toKelvin(from, value);
        return this.fromKelvin(to, kelvin);
    }

    private toKelvin(unit: Unit, value: number): number {
        switch (unit.id) {
            case "kelvin": return value;
            case "celsius": return value + unit.conversionFactor;
            case "fahrenheit": return (value + unit.conversionFactor) / 1.8;
            case "rankine": return value / unit.conversionFactor;
            case "reaumur": return value * unit.conversionFactor + 273.15;
            default: throw new Error(`Conversão para Kelvin não suportada: ${unit.id}`);
        }
    }

    private fromKelvin(unit: Unit, value: number): number {
        switch (unit.id) {
            case "kelvin": return value;
            case "celsius": return value - unit.conversionFactor;
            case "fahrenheit": return (value * 1.8) - unit.conversionFactor;
            case "rankine": return value * unit.conversionFactor;
            case "reaumur": return (value - 273.15) * 0.8;
            default: throw new Error(`Conversão a partir de Kelvin não suportada: ${unit.id}`);
        }
    }
}