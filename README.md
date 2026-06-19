# DevToolz Library

Biblioteca TypeScript de utilitários para o dia a dia do desenvolvedor — validação, formatação e geração de documentos brasileiros (CPF, CNPJ), conversores, calculadoras matemáticas e extensões de tipos primitivos.

## CNPJ

### Formato numérico

```typescript
import { Cnpj, CnpjValidator, CnpjGenerator, CnpjFormatter } from 'devtoolz-library';

// Validar
const result = new CnpjValidator().validate('11.222.333/0001-81');
result.isValid;  // true
result.message;  // 'Válido'

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

Cnpj.tryParse('invalido'); // null em vez de lançar exceção
```

### Formato alfanumérico (IN RFB nº 2.229/2024 — vigência julho/2026)

A partir de julho de 2026 a Receita Federal passará a emitir CNPJs com letras maiúsculas (A-Z) nas 12 primeiras posições. Os dois dígitos verificadores continuam sempre numéricos.

```typescript
import { Cnpj, CnpjValidator, CnpjGenerator, CnpjFormatter, CnpjOptions } from 'devtoolz-library';

const opts: CnpjOptions = { format: 'alphanumeric' };

// Validar — o formato é detectado automaticamente quando não informado
const validator = new CnpjValidator();
validator.validate('12.ABC.345/01DE-35');   // isValid = true
validator.validate('12ABC34501DE35', opts); // isValid = true

// Gerar
const generator = new CnpjGenerator();
const raw = generator.generate(opts);                 // ex: 'A1B2C3D4E5F668'
new CnpjFormatter().applyMask(raw);                   // 'A1.B2C.3D4/E5F6-68'

// Value Object
const cnpj = Cnpj.parse('12.ABC.345/01DE-35');
cnpj.rootDigits;        // '12ABC345'
cnpj.orderDigits;       // '01DE'
cnpj.firstVerifyDigit;  // '3'
cnpj.secondVerifyDigit; // '5'
cnpj.toString();        // '12ABC34501DE35'
cnpj.toFormatted();     // '12.ABC.345/01DE-35'

Cnpj.generate({ format: 'alphanumeric' }); // instância de Cnpj alfanumérico
```

#### Modo numérico estrito

Passe `{ format: 'numeric' }` para rejeitar qualquer CNPJ com letras:

```typescript
new CnpjValidator().validate('12ABC34501DE35', { format: 'numeric' });
// isValid = false
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
