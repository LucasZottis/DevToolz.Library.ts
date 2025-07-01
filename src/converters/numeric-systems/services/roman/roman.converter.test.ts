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

        it("1999", () => {
            const decimalValue = 1999;
            const romamValue = converter.fromDecimal(decimalValue);

            expect(romamValue).toBe("MCMXCIX");
        });

        it("1992", () => {
            const decimalValue = 1992;
            const romamValue = converter.fromDecimal(decimalValue);

            expect(romamValue).toBe("MCMXCII");
        });

        it("1843", () => {
            const decimalValue = 1843;
            const romamValue = converter.fromDecimal(decimalValue);

            expect(romamValue).toBe("MDCCCXLIII");
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

    describe("toDecimal", () => {
        it("MMXXV", () => {
            const romanValue = "MMXXV";
            const decimalValue = converter.toDecimal(romanValue);

            expect(decimalValue).toBe(2025);
        });

        it("MCMXCIX", () => {
            const romanValue = "MCMXCIX";
            const decimalValue = converter.toDecimal(romanValue);

            expect(decimalValue).toBe(1999);
        });

        it("MCMXCII", () => {
            const romanValue = "MCMXCII";
            const decimalValue = converter.toDecimal(romanValue);

            expect(decimalValue).toBe(1992);
        });

        it("MDCCCXLIII", () => {
            const romanValue = "MDCCCXLIII";
            const decimalValue = converter.toDecimal(romanValue);

            expect(decimalValue).toBe(1843);
        });

        it("VI", () => {
            const romanValue = "VI";
            const decimalValue = converter.toDecimal(romanValue);

            expect(decimalValue).toBe(6);
        });

        it("V", () => {
            const romanValue = "V";
            const decimalValue = converter.toDecimal(romanValue);

            expect(decimalValue).toBe(5);
        });

        it("IV", () => {
            const romanValue = "IV";
            const decimalValue = converter.toDecimal(romanValue);

            expect(decimalValue).toBe(4);
        });

        it("III", () => {
            const romanValue = "III";
            const decimalValue = converter.toDecimal(romanValue);

            expect(decimalValue).toBe(3);
        });

        it("I", () => {
            const romanValue = "I";
            const decimalValue = converter.toDecimal(romanValue);

            expect(decimalValue).toBe(1);
        });
    });
});