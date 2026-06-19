# DevToolz Library

Biblioteca TypeScript de utilitários para o dia a dia do desenvolvedor — validação, formatação e geração de documentos brasileiros (CPF, CNPJ), conversores, calculadoras matemáticas e extensões de tipos primitivos.

## CNPJ

### Formato numérico (padrão atual)

```typescript
import { Cnpj, CnpjValidator, CnpjGenerator, CnpjFormatter } from 'devtoolz-library';

// Validar
const result = CnpjValidator.validate('11.222.333/0001-81');
console.log(result.isValid); // true

// Gerar
const gerado = new CnpjGenerator().generate();        // '11222333000181'
const formatado = new CnpjGenerator().generate(true); // '11.222.333/0001-81'

// Value Object
const cnpj = Cnpj.parse('11222333000181');
cnpj.rootDigits;        // '11222333'
cnpj.orderDigits;       // '0001'
cnpj.firstVerifyDigit;  // '8'
cnpj.secondVerifyDigit; // '1'
cnpj.toString();        // '11222333000181'
cnpj.toFormatted();     // '11.222.333/0001-81'

const seguro = Cnpj.tryParse('invalido'); // null em vez de throw
```

### Formato alfanumérico (IN RFB nº 2.229/2024 — vigência julho/2026)

A partir de julho de 2026 a Receita Federal passará a emitir CNPJs com letras maiúsculas (A-Z) nas 12 primeiras posições. Os dois dígitos verificadores continuam sempre numéricos. O algoritmo módulo-11 é o mesmo; a única mudança é que cada caractere é convertido pelo valor ASCII menos 48 (letras A-Z valem 17-42).

```typescript
import {
    Cnpj,
    CnpjValidator,
    CnpjGenerator,
    CnpjFormat,   // 'numeric' | 'alphanumeric'
    CnpjOptions,  // { format?: CnpjFormat }
} from 'devtoolz-library';

const opts: CnpjOptions = { format: 'alphanumeric' };

// Validar
const validator = new CnpjValidator();
validator.validate('12.ABC.345/01DE-35');              // autodetecção: isValid = true
validator.validate('12ABC34501DE35', opts);            // explícito: isValid = true
validator.validate('11222333000181', opts);            // numérico com flag alfanum.: isValid = true

// Gerar
const generator = new CnpjGenerator();
const raw = generator.generate(opts);                  // ex: 'A1B2C3D4E5F668'
const mascarado = new CnpjFormatter().applyMask(raw);  // 'A1.B2C.3D4/E5F6-68'

// Value Object
const cnpj = Cnpj.parse('12.ABC.345/01DE-35');
cnpj.rootDigits;        // '12ABC345'
cnpj.orderDigits;       // '01DE'
cnpj.firstVerifyDigit;  // '3'
cnpj.secondVerifyDigit; // '5'
cnpj.toString();        // '12ABC34501DE35'
cnpj.toFormatted();     // '12.ABC.345/01DE-35'

const gerado = Cnpj.generate({ format: 'alphanumeric' });
Cnpj.validate('12ABC34501DE35', opts).isValid; // true
```

#### Autodetecção de formato

Quando `format` não é especificado, o validador/parser detecta automaticamente:
- Se qualquer um dos 12 primeiros caracteres (após remover máscara) for uma letra → `'alphanumeric'`
- Caso contrário → `'numeric'`

Isso garante **zero quebra de API**: todo código existente que não passa `options` continua funcionando exatamente como antes.

#### Modo numérico estrito

Passe `{ format: 'numeric' }` explicitamente para rejeitar qualquer CNPJ com letras:

```typescript
validator.validate('12ABC34501DE35', { format: 'numeric' });
// isValid = false, message = 'CNPJ com formato inválido.'
```

### Utilitários exportados (avançado)

```typescript
import { charToDigitValue, calcVerifyingDigit, isRepeatedChars } from 'devtoolz-library/cnpj.utils';

charToDigitValue('A'); // 17  (ASCII 65 - 48)
charToDigitValue('0'); // 0   (ASCII 48 - 48)
calcVerifyingDigit(5, '12ABC34501DE'); // '3'
isRepeatedChars('00000000000000');     // true
```

## CPF

```typescript
import { Cpf, CpfValidator, CpfGenerator } from 'devtoolz-library';

const cpf = Cpf.parse('123.456.789-09');
new CpfValidator().validate('12345678909').isValid; // true
new CpfGenerator().generate();                      // '12345678909'
```

## Executar testes

```bash
npm test
```
