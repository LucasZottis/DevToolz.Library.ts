/**
 * Tests for alphanumeric CNPJ support (IN RFB nº 2.229/2024, effective July 2026).
 *
 * Reference examples verified manually with the modulo-11 algorithm
 * using ASCII-48 character conversion:
 *   - "12ABC34501DE-35"  (formatted: "12.ABC.345/01DE-35")
 *   - "AB12C34D0001-84"  (formatted: "AB.12C.34D/0001-84")
 *   - "A1B2C3D4E5F6-68"  (formatted: "A1.B2C.3D4/E5F6-68")
 */

import { Cnpj } from "../cnpj";
import { CnpjFormatter } from "../cnpj.formatter";
import { CnpjGenerator } from "../cnpj.generator";
import { CnpjValidator } from "../cnpj.validator";
import { charToDigitValue, calcVerifyingDigit, isRepeatedChars } from "../cnpj.utils";

// ---------------------------------------------------------------------------
// Utility: charToDigitValue
// ---------------------------------------------------------------------------

describe("charToDigitValue", () => {
    it("converte dígito '0' para 0", () => {
        expect(charToDigitValue("0")).toBe(0);
    });

    it("converte dígito '9' para 9", () => {
        expect(charToDigitValue("9")).toBe(9);
    });

    it("converte letra 'A' (maiúscula) para 17", () => {
        expect(charToDigitValue("A")).toBe(17);
    });

    it("converte letra 'Z' (maiúscula) para 42", () => {
        expect(charToDigitValue("Z")).toBe(42);
    });

    it("normaliza letra minúscula 'a' para o mesmo valor de 'A'", () => {
        expect(charToDigitValue("a")).toBe(charToDigitValue("A"));
    });

    it("produz valores crescentes e consecutivos para A-Z", () => {
        const values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            .split("")
            .map(c => charToDigitValue(c));
        for (let i = 1; i < values.length; i++)
            expect(values[i]).toBe(values[i - 1] + 1);
    });
});

// ---------------------------------------------------------------------------
// Utility: isRepeatedChars
// ---------------------------------------------------------------------------

describe("isRepeatedChars", () => {
    it("detecta 14 dígitos iguais", () => {
        expect(isRepeatedChars("00000000000000")).toBe(true);
    });

    it("detecta 14 letras iguais", () => {
        expect(isRepeatedChars("AAAAAAAAAAAAAA")).toBe(true);
    });

    it("detecta 12 dígitos iguais (base sem DV)", () => {
        expect(isRepeatedChars("000000000000")).toBe(true);
    });

    it("não detecta CNPJ numérico válido como repetido", () => {
        expect(isRepeatedChars("11222333000181")).toBe(false);
    });

    it("não detecta CNPJ alfanumérico válido como repetido", () => {
        expect(isRepeatedChars("12ABC34501DE35")).toBe(false);
    });
});

// ---------------------------------------------------------------------------
// Utility: calcVerifyingDigit — regressão com exemplo de referência
// ---------------------------------------------------------------------------

describe("calcVerifyingDigit — exemplo de referência 12ABC34501DE", () => {
    const base = "12ABC34501DE";

    it("calcula DV1 = '3' com startCounter=5", () => {
        expect(calcVerifyingDigit(5, base)).toBe("3");
    });

    it("calcula DV2 = '5' com startCounter=6 sobre base+DV1", () => {
        expect(calcVerifyingDigit(6, base + "3")).toBe("5");
    });
});

// ---------------------------------------------------------------------------
// CnpjFormatter — suporte alfanumérico
// ---------------------------------------------------------------------------

describe("CnpjFormatter — alfanumérico", () => {
    let formatter: CnpjFormatter;

    beforeEach(() => {
        formatter = new CnpjFormatter();
    });

    it("aplica máscara em CNPJ alfanumérico sem máscara", () => {
        expect(formatter.applyMask("12ABC34501DE35")).toBe("12.ABC.345/01DE-35");
    });

    it("remove máscara de CNPJ alfanumérico formatado", () => {
        expect(formatter.removeMask("12.ABC.345/01DE-35")).toBe("12ABC34501DE35");
    });

    it("simetria: removeMask(applyMask(raw)) retorna o valor original alfanumérico", () => {
        const raw = "12ABC34501DE35";
        expect(formatter.removeMask(formatter.applyMask(raw))).toBe(raw);
    });

    it("simetria: applyMask(removeMask(formatted)) retorna o formatado original", () => {
        const formatted = "12.ABC.345/01DE-35";
        expect(formatter.applyMask(formatter.removeMask(formatted))).toBe(formatted);
    });

    it("normaliza letras minúsculas para maiúsculas ao remover máscara", () => {
        expect(formatter.removeMask("12.abc.345/01de-35")).toBe("12ABC34501DE35");
    });
});

// ---------------------------------------------------------------------------
// CnpjValidator — modo alfanumérico
// ---------------------------------------------------------------------------

describe("CnpjValidator — alfanumérico", () => {
    let validator: CnpjValidator;

    beforeEach(() => {
        validator = new CnpjValidator();
    });

    describe("CNPJs alfanuméricos válidos (exemplos de referência)", () => {
        it.each([
            ["12ABC34501DE35", "sem máscara"],
            ["12.ABC.345/01DE-35", "com máscara"],
            ["AB12C34D000184", "AB12C34D0001-84 sem máscara"],
            ["AB.12C.34D/0001-84", "AB12C34D0001-84 com máscara"],
            ["A1B2C3D4E5F668", "A1B2C3D4E5F6-68 sem máscara"],
            ["A1.B2C.3D4/E5F6-68", "A1B2C3D4E5F6-68 com máscara"],
        ])("deve aceitar %s (%s)", (cnpj) => {
            const result = validator.validate(cnpj);
            expect(result.isValid).toBe(true);
        });
    });

    describe("autodetecção de formato", () => {
        it("detecta alfanumérico quando não há flag — aceita CNPJ com letras válido", () => {
            const result = validator.validate("12.ABC.345/01DE-35");
            expect(result.isValid).toBe(true);
        });

        it("detecta numérico quando não há flag — aceita CNPJ só numérico válido", () => {
            const result = validator.validate("11222333000181");
            expect(result.isValid).toBe(true);
        });
    });

    describe("com flag explícita format: 'alphanumeric'", () => {
        it("aceita CNPJ alfanumérico válido", () => {
            const result = validator.validate("12ABC34501DE35", { format: "alphanumeric" });
            expect(result.isValid).toBe(true);
        });

        it("aceita CNPJ só numérico passado como alfanumérico (edge case)", () => {
            // Dígitos têm o mesmo valor numérico nos dois modos
            const result = validator.validate("11222333000181", { format: "alphanumeric" });
            expect(result.isValid).toBe(true);
        });

        it("rejeita CNPJ alfanumérico com DV errado", () => {
            // DV correto é 35; usamos 36
            const result = validator.validate("12ABC34501DE36", { format: "alphanumeric" });
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CNPJ é inválido.");
        });

        it("rejeita letras nas posições de DV (posições 13-14 devem ser dígitos)", () => {
            const result = validator.validate("12ABC34501DEAB", { format: "alphanumeric" });
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CNPJ com formato inválido.");
        });

        it("rejeita string vazia", () => {
            const result = validator.validate("", { format: "alphanumeric" });
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CNPJ está vazio.");
        });

        it("rejeita CNPJ alfanumérico com todos os caracteres iguais", () => {
            const result = validator.validate("AAAAAAAAAAAAAA", { format: "alphanumeric" });
            expect(result.isValid).toBe(false);
        });
    });

    describe("com flag explícita format: 'numeric'", () => {
        it("rejeita CNPJ com letras quando modo numérico é forçado", () => {
            const result = validator.validate("12ABC34501DE35", { format: "numeric" });
            expect(result.isValid).toBe(false);
            expect(result.message).toBe("CNPJ com formato inválido.");
        });

        it("aceita CNPJ numérico válido com flag numérico explícita", () => {
            const result = validator.validate("11222333000181", { format: "numeric" });
            expect(result.isValid).toBe(true);
        });
    });
});

// ---------------------------------------------------------------------------
// CnpjGenerator — modo alfanumérico
// ---------------------------------------------------------------------------

describe("CnpjGenerator — alfanumérico", () => {
    let generator: CnpjGenerator;
    let validator: CnpjValidator;

    beforeEach(() => {
        generator = new CnpjGenerator();
        validator = new CnpjValidator();
    });

    it("gera string de 14 caracteres", () => {
        const result = generator.generate({ format: "alphanumeric" });
        expect(result).toHaveLength(14);
    });

    it("gera apenas maiúsculas e dígitos nas primeiras 12 posições", () => {
        const result = generator.generate({ format: "alphanumeric" });
        expect(result.substring(0, 12)).toMatch(/^[A-Z0-9]{12}$/);
    });

    it("gera DV numérico (últimas 2 posições)", () => {
        const result = generator.generate({ format: "alphanumeric" });
        expect(result.substring(12)).toMatch(/^\d{2}$/);
    });

    it("CNPJ alfanumérico gerado é matematicamente válido (round-trip)", () => {
        for (let i = 0; i < 20; i++) {
            const result = generator.generate({ format: "alphanumeric" });
            const validation = validator.validate(result);
            expect(validation.isValid).toBe(true);
        }
    });

    it("não gera CNPJ alfanumérico com todos os caracteres iguais", () => {
        for (let i = 0; i < 20; i++) {
            const result = generator.generate({ format: "alphanumeric" });
            expect(result).not.toMatch(/^(.)\1{13}$/);
        }
    });

    it("gera CNPJs alfanuméricos diferentes entre chamadas", () => {
        const results = new Set(
            Array.from({ length: 20 }, () => generator.generate({ format: "alphanumeric" }))
        );
        expect(results.size).toBeGreaterThan(1);
    });

    it("mantém retrocompatibilidade: generate(true) retorna CNPJ numérico formatado", () => {
        const result = generator.generate(true);
        expect(result).toMatch(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/);
    });

    it("mantém retrocompatibilidade: generate() retorna CNPJ numérico de 14 dígitos", () => {
        const result = generator.generate();
        expect(result).toHaveLength(14);
        expect(result).toMatch(/^\d{14}$/);
    });
});

// ---------------------------------------------------------------------------
// Cnpj value object — alfanumérico
// ---------------------------------------------------------------------------

describe("Cnpj — alfanumérico", () => {
    describe("parse", () => {
        it("retorna instância de Cnpj para CNPJ alfanumérico sem máscara", () => {
            const cnpj = Cnpj.parse("12ABC34501DE35");
            expect(cnpj).toBeInstanceOf(Cnpj);
        });

        it("retorna instância de Cnpj para CNPJ alfanumérico com máscara", () => {
            const cnpj = Cnpj.parse("12.ABC.345/01DE-35");
            expect(cnpj).toBeInstanceOf(Cnpj);
        });

        it("extrai rootDigits com 8 caracteres (pode conter letras)", () => {
            const cnpj = Cnpj.parse("12ABC34501DE35");
            expect(cnpj.rootDigits).toBe("12ABC345");
        });

        it("extrai orderDigits com 4 caracteres (pode conter letras)", () => {
            const cnpj = Cnpj.parse("12ABC34501DE35");
            expect(cnpj.orderDigits).toBe("01DE");
        });

        it("extrai firstVerifyDigit numérico", () => {
            const cnpj = Cnpj.parse("12ABC34501DE35");
            expect(cnpj.firstVerifyDigit).toMatch(/^\d$/);
            expect(cnpj.firstVerifyDigit).toBe("3");
        });

        it("extrai secondVerifyDigit numérico", () => {
            const cnpj = Cnpj.parse("12ABC34501DE35");
            expect(cnpj.secondVerifyDigit).toBe("5");
        });

        it("lança erro para CNPJ alfanumérico inválido (DV errado)", () => {
            expect(() => Cnpj.parse("12ABC34501DE36")).toThrow();
        });

        it("parse com format: 'numeric' rejeita CNPJ com letras", () => {
            expect(() => Cnpj.parse("12ABC34501DE35", { format: "numeric" })).toThrow();
        });

        it("retrocompatibilidade: parse sem flag aceita CNPJ numérico", () => {
            const cnpj = Cnpj.parse("11222333000181");
            expect(cnpj).toBeInstanceOf(Cnpj);
        });
    });

    describe("tryParse", () => {
        it("retorna instância para CNPJ alfanumérico válido", () => {
            const cnpj = Cnpj.tryParse("12ABC34501DE35");
            expect(cnpj).toBeInstanceOf(Cnpj);
        });

        it("retorna null para CNPJ alfanumérico inválido", () => {
            const cnpj = Cnpj.tryParse("12ABC34501DE36");
            expect(cnpj).toBeNull();
        });
    });

    describe("validate", () => {
        it("retorna isValid true para CNPJ alfanumérico válido", () => {
            const result = Cnpj.validate("12ABC34501DE35");
            expect(result.isValid).toBe(true);
        });

        it("retorna isValid false para CNPJ alfanumérico com DV errado", () => {
            const result = Cnpj.validate("12ABC34501DE36");
            expect(result.isValid).toBe(false);
        });

        it("aceita format: 'alphanumeric' explícito", () => {
            const result = Cnpj.validate("12ABC34501DE35", { format: "alphanumeric" });
            expect(result.isValid).toBe(true);
        });

        it("retrocompatibilidade: validate sem flag aceita CNPJ numérico", () => {
            const result = Cnpj.validate("11222333000181");
            expect(result.isValid).toBe(true);
        });
    });

    describe("toString / toFormatted", () => {
        it("toString retorna a string sem máscara (alfanumérica)", () => {
            const cnpj = Cnpj.parse("12ABC34501DE35");
            expect(cnpj.toString()).toBe("12ABC34501DE35");
        });

        it("toFormatted retorna o CNPJ alfanumérico com máscara", () => {
            const cnpj = Cnpj.parse("12ABC34501DE35");
            expect(cnpj.toFormatted()).toBe("12.ABC.345/01DE-35");
        });

        it("toFormatted é idempotente independente do input ter máscara", () => {
            const semMascara = Cnpj.parse("12ABC34501DE35").toFormatted();
            const comMascara = Cnpj.parse("12.ABC.345/01DE-35").toFormatted();
            expect(semMascara).toBe(comMascara);
        });
    });

    describe("generate", () => {
        let validator: CnpjValidator;
        beforeEach(() => { validator = new CnpjValidator(); });

        it("gera instância de Cnpj alfanumérico", () => {
            const cnpj = Cnpj.generate({ format: "alphanumeric" });
            expect(cnpj).toBeInstanceOf(Cnpj);
        });

        it("CNPJ alfanumérico gerado é matematicamente válido (round-trip)", () => {
            for (let i = 0; i < 10; i++) {
                const cnpj = Cnpj.generate({ format: "alphanumeric" });
                const result = validator.validate(cnpj.toString());
                expect(result.isValid).toBe(true);
            }
        });

        it("rootDigits de CNPJ alfanumérico gerado tem 8 caracteres [A-Z0-9]", () => {
            const cnpj = Cnpj.generate({ format: "alphanumeric" });
            expect(cnpj.rootDigits).toHaveLength(8);
            expect(cnpj.rootDigits).toMatch(/^[A-Z0-9]{8}$/);
        });

        it("orderDigits de CNPJ alfanumérico gerado tem 4 caracteres [A-Z0-9]", () => {
            const cnpj = Cnpj.generate({ format: "alphanumeric" });
            expect(cnpj.orderDigits).toHaveLength(4);
            expect(cnpj.orderDigits).toMatch(/^[A-Z0-9]{4}$/);
        });

        it("DVs de CNPJ alfanumérico gerado são sempre dígitos", () => {
            const cnpj = Cnpj.generate({ format: "alphanumeric" });
            expect(cnpj.firstVerifyDigit).toMatch(/^\d$/);
            expect(cnpj.secondVerifyDigit).toMatch(/^\d$/);
        });

        it("retrocompatibilidade: generate sem flag gera CNPJ numérico", () => {
            const cnpj = Cnpj.generate();
            expect(cnpj.toString()).toMatch(/^\d{14}$/);
        });
    });

    describe("imutabilidade", () => {
        it("rootDigits alfanumérico não é alterável externamente", () => {
            const cnpj = Cnpj.parse("12ABC34501DE35");
            expect(() => {
                (cnpj as any).rootDigits = "00000000";
            }).toThrow();
        });
    });
});
