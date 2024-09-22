import { Cpf } from '../../dev-toolz.library/src/cpf';
import { Cnpj } from '../../dev-toolz.library/src/cnpj';
import { Random } from '../../dev-toolz.library/src/random';

let cpf = new Cpf();
let cnpj = new Cnpj();
let random = new Random(0, 9, true);

console.log("Random: " + random.generate(true));
console.log("CPF: " + cpf.generate(true));
console.log("CNPJ: " + cnpj.generate(true));

console.log("É CPF Válido: " + cpf.isValid("162.505.343-69") + " " + cnpj.message);
console.log("É CNPJ Válido: " + cnpj.isValid("36.847.664/7207-34") + " " + cnpj.message);