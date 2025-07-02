import { DataConverter } from "./data.converter";

describe('DigitalConverter', () => {
    let converter: DataConverter;

    beforeEach(() => {
        converter = new DataConverter();
    });

    describe('Inicialização', () => {
        it('deve inicializar com todas as unidades de informação digital', () => {
            const units = converter.getUnits();
            expect(units).toHaveLength(18);
        });

        it('deve ter bit como unidade base', () => {
            const baseUnit = converter.getBaseUnit();
            expect(baseUnit.id).toBe('bit');
            expect(baseUnit.isBaseUnit).toBe(true);
            expect(baseUnit.conversionFactor).toBe(1);
        });
    });

    describe('Busca de unidades', () => {
        it('deve encontrar unidade por ID', () => {
            const unit = converter.getUnitById('megabyte');
            expect(unit).toBeDefined();
            expect(unit?.name).toBe('Megabyte');
            expect(unit?.symbol).toBe('MB');
        });

        it('deve encontrar unidade por símbolo', () => {
            const unit = converter.getUnitBySymbol('GB');
            expect(unit).toBeDefined();
            expect(unit?.id).toBe('gigabyte');
            expect(unit?.name).toBe('Gigabyte');
        });

        it('deve encontrar unidade por nome', () => {
            const unit = converter.getUnitByName('Kilobit');
            expect(unit).toBeDefined();
            expect(unit?.id).toBe('kilobit');
            expect(unit?.symbol).toBe('kbit');
        });

        it('deve retornar undefined para unidade inexistente', () => {
            expect(converter.getUnitById('inexistente')).toBeUndefined();
            expect(converter.getUnitBySymbol('XX')).toBeUndefined();
            expect(converter.getUnitByName('Unidade Inexistente')).toBeUndefined();
        });
    });

    describe('Conversões básicas', () => {
        it('deve converter bits para bytes', () => {
            const result = converter.convert(8, 'bit', 'byte');
            expect(result).toBe(1);
        });

        it('deve converter bytes para bits', () => {
            const result = converter.convert(1, 'byte', 'bit');
            expect(result).toBe(8);
        });

        it('deve converter da mesma unidade para ela mesma', () => {
            const result = converter.convert(100, 'megabyte', 'megabyte');
            expect(result).toBe(100);
        });
    });

    describe('Conversões entre bits', () => {
        it('deve converter bits para kilobits', () => {
            const result = converter.convert(1000, 'bit', 'kilobit');
            expect(result).toBe(1);
        });

        it('deve converter kilobits para megabits', () => {
            const result = converter.convert(1000, 'kilobit', 'megabit');
            expect(result).toBe(1);
        });

        it('deve converter megabits para gigabits', () => {
            const result = converter.convert(1000, 'megabit', 'gigabit');
            expect(result).toBe(1);
        });

        it('deve converter gigabits para terabits', () => {
            const result = converter.convert(1000, 'gigabit', 'terabit');
            expect(result).toBe(1);
        });
    });

    describe('Conversões entre bytes', () => {
        it('deve converter bytes para kilobytes', () => {
            const result = converter.convert(1000, 'byte', 'kilobyte');
            expect(result).toBe(1);
        });

        it('deve converter kilobytes para megabytes', () => {
            const result = converter.convert(1000, 'kilobyte', 'megabyte');
            expect(result).toBe(1);
        });

        it('deve converter megabytes para gigabytes', () => {
            const result = converter.convert(1000, 'megabyte', 'gigabyte');
            expect(result).toBe(1);
        });

        it('deve converter gigabytes para terabytes', () => {
            const result = converter.convert(1000, 'gigabyte', 'terabyte');
            expect(result).toBe(1);
        });
    });

    describe('Conversões mistas (bits para bytes)', () => {
        it('deve converter kilobits para kilobytes', () => {
            const result = converter.convert(8, 'kilobit', 'kilobyte');
            expect(result).toBe(1);
        });

        it('deve converter megabits para megabytes', () => {
            const result = converter.convert(8, 'megabit', 'megabyte');
            expect(result).toBe(1);
        });

        it('deve converter gigabits para gigabytes', () => {
            const result = converter.convert(8, 'gigabit', 'gigabyte');
            expect(result).toBe(1);
        });

        it('deve converter terabits para terabytes', () => {
            const result = converter.convert(8, 'terabit', 'terabyte');
            expect(result).toBe(1);
        });
    });

    describe('Conversões mistas (bytes para bits)', () => {
        it('deve converter kilobytes para kilobits', () => {
            const result = converter.convert(1, 'kilobyte', 'kilobit');
            expect(result).toBe(8);
        });

        it('deve converter megabytes para megabits', () => {
            const result = converter.convert(1, 'megabyte', 'megabit');
            expect(result).toBe(8);
        });

        it('deve converter gigabytes para gigabits', () => {
            const result = converter.convert(1, 'gigabyte', 'gigabit');
            expect(result).toBe(8);
        });

        it('deve converter terabytes para terabits', () => {
            const result = converter.convert(1, 'terabyte', 'terabit');
            expect(result).toBe(8);
        });
    });

    describe('Conversões de unidades grandes', () => {
        it('deve converter petabytes para terabytes', () => {
            const result = converter.convert(1, 'petabyte', 'terabyte');
            expect(result).toBe(1000);
        });

        it('deve converter exabytes para petabytes', () => {
            const result = converter.convert(1, 'exabyte', 'petabyte');
            expect(result).toBe(1000);
        });

        it('deve converter zetabytes para exabytes', () => {
            const result = converter.convert(1, 'zetabyte', 'exabyte');
            expect(result).toBe(1000);
        });

        it('deve converter yottabytes para zetabytes', () => {
            const result = converter.convert(1, 'yottabyte', 'zetabyte');
            expect(result).toBe(1000);
        });
    });

    describe('Conversões extremas', () => {
        it('deve converter bits para yottabytes', () => {
            const result = converter.convert(8000000000000000000000000, 'bit', 'yottabyte');
            expect(result).toBe(1);
        });

        it('deve converter yottabytes para bits', () => {
            const result = converter.convert(1, 'yottabyte', 'bit');
            expect(result).toBe(8000000000000000000000000);
        });

        it('deve converter yottabits para bits', () => {
            const result = converter.convert(1, 'yottabit', 'bit');
            expect(result).toBe(1000000000000000000000000);
        });
    });

    describe('Tratamento de erros', () => {
        it('deve lançar erro para unidade de origem não encontrada', () => {
            expect(() => {
                converter.convert(100, 'unidade_inexistente', 'byte');
            }).toThrow('Unidades não encontradas');
        });

        it('deve lançar erro para unidade de destino não encontrada', () => {
            expect(() => {
                converter.convert(100, 'byte', 'unidade_inexistente');
            }).toThrow('Unidades não encontradas');
        });

        it('deve lançar erro para ambas as unidades não encontradas', () => {
            expect(() => {
                converter.convert(100, 'unidade1', 'unidade2');
            }).toThrow('Unidades não encontradas');
        });
    });

    describe('Valores decimais', () => {
        it('deve converter valores decimais corretamente', () => {
            const result = converter.convert(0.5, 'kilobyte', 'byte');
            expect(result).toBe(500);
        });

        it('deve converter para valores decimais corretamente', () => {
            const result = converter.convert(500, 'byte', 'kilobyte');
            expect(result).toBe(0.5);
        });

        it('deve manter precisão em conversões decimais', () => {
            const result = converter.convert(1.5, 'megabyte', 'kilobyte');
            expect(result).toBe(1500);
        });
    });

    describe('Verificação de fatores de conversão', () => {
        it('deve ter fatores de conversão corretos para bits', () => {
            expect(converter.getUnitById('bit')?.conversionFactor).toBe(1);
            expect(converter.getUnitById('kilobit')?.conversionFactor).toBe(1000);
            expect(converter.getUnitById('megabit')?.conversionFactor).toBe(1000000);
            expect(converter.getUnitById('gigabit')?.conversionFactor).toBe(1000000000);
        });

        it('deve ter fatores de conversão corretos para bytes', () => {
            expect(converter.getUnitById('byte')?.conversionFactor).toBe(8);
            expect(converter.getUnitById('kilobyte')?.conversionFactor).toBe(8000);
            expect(converter.getUnitById('megabyte')?.conversionFactor).toBe(8000000);
            expect(converter.getUnitById('gigabyte')?.conversionFactor).toBe(8000000000);
        });
    });
});