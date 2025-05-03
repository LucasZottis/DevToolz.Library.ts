import { IConverter } from "../interfaces/converter";
import { Unit } from "../models/unit";

export abstract class ConverterBaseService implements IConverter {
    private _units: Unit[] = [];

    constructor(units: Unit[]) {
        this._units = units;
    }

    private _getUnitById(unitId: string): Unit | undefined {
        return this._units.find(unit => unit.id === unitId);
    }

    convert(value: number, fromUnitId: string, toUnitId: string): number {
        const sourceUnit = this._getUnitById(fromUnitId);
        const targetUnit = this._getUnitById(toUnitId);

        if (!sourceUnit || !targetUnit) {
            throw new Error('Unidades não encontradas');
        }

        // Converte para a unidade base (mililitros) e depois para a unidade alvo
        const baseValue = value * sourceUnit.conversionFactor!;
        return baseValue / targetUnit.conversionFactor!;
    }

    getUnits(): Unit[] {
        return this._units;
    }

    getBaseUnit(): Unit {
        return this._units.find(unit => unit.isBaseUnit)!;
    }
}