import { UnitConverterFactory } from '../../unit.converter.factory';


const factory = new UnitConverterFactory();
const converter = factory.createService('energy');

describe('Conversão completa entre unidades de energia', () => {
    test('1 joule → joule ≈ 1.0', () => {
        expect(converter.convert(1, 'joule', 'joule')).toBeCloseTo(1.0, 10);
    });
    test('1 joule → quilojoule ≈ 0.001', () => {
        expect(converter.convert(1, 'joule', 'quilojoule')).toBeCloseTo(0.001, 10);
    });
    test('1 joule → eletron-volt ≈ 6.241509074460763e+18', () => {
        expect(converter.convert(1, 'joule', 'eletron-volt')).toBeCloseTo(6.241509074460763e+18, 10);
    });
    test('1 joule → caloria-termica ≈ 0.239005736137667', () => {
        expect(converter.convert(1, 'joule', 'caloria-termica')).toBeCloseTo(0.239005736137667, 10);
    });
    test('1 joule → caloria-alimentar ≈ 0.000239005736138', () => {
        expect(converter.convert(1, 'joule', 'caloria-alimentar')).toBeCloseTo(0.000239005736138, 10);
    });
    test('1 joule → libra-pe ≈ 0.737562149277266', () => {
        expect(converter.convert(1, 'joule', 'libra-pe')).toBeCloseTo(0.737562149277266, 10);
    });
    test('1 joule → btu ≈ 0.000947817120313', () => {
        expect(converter.convert(1, 'joule', 'btu')).toBeCloseTo(0.000947817120313, 10);
    });
    test('1 quilojoule → joule ≈ 1000.0', () => {
        expect(converter.convert(1, 'quilojoule', 'joule')).toBeCloseTo(1000.0, 10);
    });
    test('1 quilojoule → quilojoule ≈ 1.0', () => {
        expect(converter.convert(1, 'quilojoule', 'quilojoule')).toBeCloseTo(1.0, 10);
    });
    test('1 quilojoule → eletron-volt ≈ 6.241509074460763e+21', () => {
        expect(converter.convert(1, 'quilojoule', 'eletron-volt')).toBeCloseTo(6.241509074460763e+21, 10);
    });
    test('1 quilojoule → caloria-termica ≈ 239.0057361376673', () => {
        expect(converter.convert(1, 'quilojoule', 'caloria-termica')).toBeCloseTo(239.0057361376673, 10);
    });
    test('1 quilojoule → caloria-alimentar ≈ 0.239005736137667', () => {
        expect(converter.convert(1, 'quilojoule', 'caloria-alimentar')).toBeCloseTo(0.239005736137667, 10);
    });
    test('1 quilojoule → libra-pe ≈ 737.5621492772657', () => {
        expect(converter.convert(1, 'quilojoule', 'libra-pe')).toBeCloseTo(737.5621492772657, 10);
    });
    test('1 quilojoule → btu ≈ 0.947817120313317', () => {
        expect(converter.convert(1, 'quilojoule', 'btu')).toBeCloseTo(0.947817120313317, 10);
    });
    test('1 eletron-volt → joule ≈ 0.0', () => {
        expect(converter.convert(1, 'eletron-volt', 'joule')).toBeCloseTo(0.0, 10);
    });
    test('1 eletron-volt → quilojoule ≈ 0.0', () => {
        expect(converter.convert(1, 'eletron-volt', 'quilojoule')).toBeCloseTo(0.0, 10);
    });
    test('1 eletron-volt → eletron-volt ≈ 1.0', () => {
        expect(converter.convert(1, 'eletron-volt', 'eletron-volt')).toBeCloseTo(1.0, 10);
    });
    test('1 eletron-volt → caloria-termica ≈ 0.0', () => {
        expect(converter.convert(1, 'eletron-volt', 'caloria-termica')).toBeCloseTo(0.0, 10);
    });
    test('1 eletron-volt → caloria-alimentar ≈ 0.0', () => {
        expect(converter.convert(1, 'eletron-volt', 'caloria-alimentar')).toBeCloseTo(0.0, 10);
    });
    test('1 eletron-volt → libra-pe ≈ 0.0', () => {
        expect(converter.convert(1, 'eletron-volt', 'libra-pe')).toBeCloseTo(0.0, 10);
    });
    test('1 eletron-volt → btu ≈ 0.0', () => {
        expect(converter.convert(1, 'eletron-volt', 'btu')).toBeCloseTo(0.0, 10);
    });
    test('1 caloria-termica → joule ≈ 4.184', () => {
        expect(converter.convert(1, 'caloria-termica', 'joule')).toBeCloseTo(4.184, 10);
    });
    test('1 caloria-termica → quilojoule ≈ 0.004184', () => {
        expect(converter.convert(1, 'caloria-termica', 'quilojoule')).toBeCloseTo(0.004184, 10);
    });
    test('1 caloria-termica → eletron-volt ≈ 2.6114473967543833e+19', () => {
        expect(converter.convert(1, 'caloria-termica', 'eletron-volt')).toBeCloseTo(2.6114473967543833e+19, 10);
    });
    test('1 caloria-termica → caloria-termica ≈ 1.0', () => {
        expect(converter.convert(1, 'caloria-termica', 'caloria-termica')).toBeCloseTo(1.0, 10);
    });
    test('1 caloria-termica → caloria-alimentar ≈ 0.001', () => {
        expect(converter.convert(1, 'caloria-termica', 'caloria-alimentar')).toBeCloseTo(0.001, 10);
    });
    test('1 caloria-termica → libra-pe ≈ 3.08596003257608', () => {
        expect(converter.convert(1, 'caloria-termica', 'libra-pe')).toBeCloseTo(3.08596003257608, 10);
    });
    test('1 caloria-termica → btu ≈ 0.003965666831391', () => {
        expect(converter.convert(1, 'caloria-termica', 'btu')).toBeCloseTo(0.003965666831391, 10);
    });
    test('1 caloria-alimentar → joule ≈ 4184.0', () => {
        expect(converter.convert(1, 'caloria-alimentar', 'joule')).toBeCloseTo(4184.0, 10);
    });
    test('1 caloria-alimentar → quilojoule ≈ 4.184', () => {
        expect(converter.convert(1, 'caloria-alimentar', 'quilojoule')).toBeCloseTo(4.184, 10);
    });
    test('1 caloria-alimentar → eletron-volt ≈ 2.6114473967543833e+22', () => {
        expect(converter.convert(1, 'caloria-alimentar', 'eletron-volt')).toBeCloseTo(2.6114473967543833e+22, 10);
    });
    test('1 caloria-alimentar → caloria-termica ≈ 1000.0', () => {
        expect(converter.convert(1, 'caloria-alimentar', 'caloria-termica')).toBeCloseTo(1000.0, 10);
    });
    test('1 caloria-alimentar → caloria-alimentar ≈ 1.0', () => {
        expect(converter.convert(1, 'caloria-alimentar', 'caloria-alimentar')).toBeCloseTo(1.0, 10);
    });
    test('1 caloria-alimentar → libra-pe ≈ 3085.9600325760794', () => {
        expect(converter.convert(1, 'caloria-alimentar', 'libra-pe')).toBeCloseTo(3085.9600325760794, 10);
    });
    test('1 caloria-alimentar → btu ≈ 3.965666831390919', () => {
        expect(converter.convert(1, 'caloria-alimentar', 'btu')).toBeCloseTo(3.965666831390919, 10);
    });
    test('1 libra-pe → joule ≈ 1.3558179483314', () => {
        expect(converter.convert(1, 'libra-pe', 'joule')).toBeCloseTo(1.3558179483314, 10);
    });
    test('1 libra-pe → quilojoule ≈ 0.001355817948331', () => {
        expect(converter.convert(1, 'libra-pe', 'quilojoule')).toBeCloseTo(0.001355817948331, 10);
    });
    test('1 libra-pe → eletron-volt ≈ 8.462350027827206e+18', () => {
        expect(converter.convert(1, 'libra-pe', 'eletron-volt')).toBeCloseTo(8.462350027827206e+18, 10);
    });
    test('1 libra-pe → caloria-termica ≈ 0.324048266809608', () => {
        expect(converter.convert(1, 'libra-pe', 'caloria-termica')).toBeCloseTo(0.324048266809608, 10);
    });
    test('1 libra-pe → caloria-alimentar ≈ 0.00032404826681', () => {
        expect(converter.convert(1, 'libra-pe', 'caloria-alimentar')).toBeCloseTo(0.00032404826681, 10);
    });
    test('1 libra-pe → libra-pe ≈ 1.0', () => {
        expect(converter.convert(1, 'libra-pe', 'libra-pe')).toBeCloseTo(1.0, 10);
    });
    test('1 libra-pe → btu ≈ 0.001285067463457', () => {
        expect(converter.convert(1, 'libra-pe', 'btu')).toBeCloseTo(0.001285067463457, 10);
    });
    test('1 btu → joule ≈ 1055.05585262', () => {
        expect(converter.convert(1, 'btu', 'joule')).toBeCloseTo(1055.05585262, 10);
    });
    test('1 btu → quilojoule ≈ 1.05505585262', () => {
        expect(converter.convert(1, 'btu', 'quilojoule')).toBeCloseTo(1.05505585262, 10);
    });
    test('1 btu → eletron-volt ≈ 6.585140678190667e+21', () => {
        expect(converter.convert(1, 'btu', 'eletron-volt')).toBeCloseTo(6.585140678190667e+21, 10);
    });
    test('1 btu → caloria-termica ≈ 252.1644007217973', () => {
        expect(converter.convert(1, 'btu', 'caloria-termica')).toBeCloseTo(252.1644007217973, 10);
    });
    test('1 btu → caloria-alimentar ≈ 0.252164400721797', () => {
        expect(converter.convert(1, 'btu', 'caloria-alimentar')).toBeCloseTo(0.252164400721797, 10);
    });
    test('1 btu → libra-pe ≈ 778.1692622659652', () => {
        expect(converter.convert(1, 'btu', 'libra-pe')).toBeCloseTo(778.1692622659652, 10);
    });
    test('1 btu → btu ≈ 1.0', () => {
        expect(converter.convert(1, 'btu', 'btu')).toBeCloseTo(1.0, 10);
    });
});