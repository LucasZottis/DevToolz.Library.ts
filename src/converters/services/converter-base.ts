import { IUnitConverter } from "../interfaces/IUnitConverter";
import { Unit } from "../models/unit";

export abstract class ConverterBaseService implements IUnitConverter {
    private readonly _mapById = new Map<string, Unit>();
    private readonly _mapBySymbol = new Map<string, Unit>();
    private readonly _mapByName = new Map<string, Unit>();
    private readonly _units: Unit[] = [];

    constructor(units: Unit[]) {
        this._units = units;
        this._mapUnits();
    }

    private _mapUnitById(unit: Unit): void {
        this._mapById.set(unit.id, unit);
    }

    private _mapUnitBySymbol(unit: Unit): void {
        this._mapBySymbol.set(unit.symbol, unit);
    }

    private _mapUnitByName(unit: Unit): void {
        this._mapByName.set(unit.name, unit);
    }

    private _mapUnits(): void {
        this._units.forEach(unit => {
            this._mapUnitById(unit);
            this._mapUnitBySymbol(unit);
            this._mapUnitByName(unit);
        });
    }

    convert(value: number, fromUnitId: string, toUnitId: string): number {
        const sourceUnit: Unit | undefined = this.getUnitById(fromUnitId);
        const targetUnit: Unit | undefined = this.getUnitById(toUnitId);

        if (!sourceUnit || !targetUnit) {
            throw new Error('Unidades não encontradas');
        }

        // Converte para a unidade base (mililitros) e depois para a unidade alvo
        const baseValue: number = value * sourceUnit.conversionFactor!;
        const result: number = baseValue / targetUnit.conversionFactor!;

        return result
    }

    getUnits(): Unit[] {
        return this._units;
    }

    getBaseUnit(): Unit {
        return this._units.find(unit => unit.isBaseUnit)!;
    }

    getUnitById(id: string): Unit | undefined {
        return this._mapById.get(id);
    }

    getUnitBySymbol(symbol: string): Unit | undefined {
        return this._mapBySymbol.get(symbol);
    }

    getUnitByName(name: string): Unit | undefined {
        return this._mapByName.get(name);
    }
}