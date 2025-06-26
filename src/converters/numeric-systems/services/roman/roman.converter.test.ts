import { INumericSystemConverter } from "../../interfaces/INumericSystem.converter";
import { INumericSystemConverterFactory } from "../../interfaces/INumericSystem.converter.factory";
import { NumericSystemConverterFactory } from "../../numericSystem.converter.factory";

describe("Sistema Numérico Romano", () => {
    let converter: INumericSystemConverter;
    let factory: INumericSystemConverterFactory;

    beforeEach(() => {
        factory = new NumericSystemConverterFactory();
        converter = factory.createService('roman');
    });

    describe("fromDecimal", () => {
        it("2025", () => {
            const decimalValue = 2025;
            const romamValue = converter.fromDecimal(decimalValue);

            expect(romamValue).toBe("MMXXV");
        });

        it("1992", () => {
            const decimalValue = 1992;
            const romamValue = converter.fromDecimal(decimalValue);

            expect(romamValue).toBe("MCMXCII");
        });

        it("1999", () => {
            const decimalValue = 1992;
            const romamValue = converter.fromDecimal(decimalValue);

            expect(romamValue).toBe("MCMXCIX");
        });

        it("5", () => {
            const decimalValue = 5;
            const romamValue = converter.fromDecimal(decimalValue);

            expect(romamValue).toBe("V");
        });

        it("6", () => {
            const decimalValue = 6;
            const romamValue = converter.fromDecimal(decimalValue);

            expect(romamValue).toBe("VI");
        });

        it("1", () => {
            const decimalValue = 1;
            const romamValue = converter.fromDecimal(decimalValue);

            expect(romamValue).toBe("I");
        });

        it("3", () => {
            const decimalValue = 3;
            const romamValue = converter.fromDecimal(decimalValue);

            expect(romamValue).toBe("III");
        });

        it("4", () => {
            const decimalValue = 4;
            const romamValue = converter.fromDecimal(decimalValue);

            expect(romamValue).toBe("IV");
        });
    });
});