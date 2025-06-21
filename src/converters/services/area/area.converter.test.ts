import { ConverterFactory } from '../../factory/converter-factory';

const factory = new ConverterFactory();
const converter = factory.getConverter('area');

describe('Conversão completa entre unidades de área', () => {
    test('1 micrometro-quadrado → micrometro-quadrado ≈ 1.0', () => {
        expect(converter.convert(1, 'micrometro-quadrado', 'micrometro-quadrado')).toBeCloseTo(1.0, 10);
    });
    test('1 micrometro-quadrado → milimetro-quadrado ≈ 1e-06', () => {
        expect(converter.convert(1, 'micrometro-quadrado', 'milimetro-quadrado')).toBeCloseTo(1e-06, 10);
    });
    test('1 micrometro-quadrado → centimetro-quadrado ≈ 1e-08', () => {
        expect(converter.convert(1, 'micrometro-quadrado', 'centimetro-quadrado')).toBeCloseTo(1e-08, 10);
    });
    test('1 micrometro-quadrado → decimetro-quadrado ≈ 1e-10', () => {
        expect(converter.convert(1, 'micrometro-quadrado', 'decimetro-quadrado')).toBeCloseTo(1e-10, 10);
    });
    test('1 micrometro-quadrado → metro-quadrado ≈ 1e-12', () => {
        expect(converter.convert(1, 'micrometro-quadrado', 'metro-quadrado')).toBeCloseTo(1e-12, 10);
    });
    test('1 micrometro-quadrado → hectare ≈ 0.0', () => {
        expect(converter.convert(1, 'micrometro-quadrado', 'hectare')).toBeCloseTo(0.0, 10);
    });
    test('1 micrometro-quadrado → quilometro-quadrado ≈ 0.0', () => {
        expect(converter.convert(1, 'micrometro-quadrado', 'quilometro-quadrado')).toBeCloseTo(0.0, 10);
    });
    test('1 micrometro-quadrado → polegada-quadrada ≈ 1.550003e-09', () => {
        expect(converter.convert(1, 'micrometro-quadrado', 'polegada-quadrada')).toBeCloseTo(1.550003e-09, 10);
    });
    test('1 micrometro-quadrado → pe-quadrado ≈ 1.0764e-11', () => {
        expect(converter.convert(1, 'micrometro-quadrado', 'pe-quadrado')).toBeCloseTo(1.0764e-11, 10);
    });
    test('1 micrometro-quadrado → jarda-quadrada ≈ 1.196e-12', () => {
        expect(converter.convert(1, 'micrometro-quadrado', 'jarda-quadrada')).toBeCloseTo(1.196e-12, 10);
    });
    test('1 micrometro-quadrado → acre ≈ 0.0', () => {
        expect(converter.convert(1, 'micrometro-quadrado', 'acre')).toBeCloseTo(0.0, 10);
    });
    test('1 micrometro-quadrado → milha-quadrada ≈ 0.0', () => {
        expect(converter.convert(1, 'micrometro-quadrado', 'milha-quadrada')).toBeCloseTo(0.0, 10);
    });
    test('1 milimetro-quadrado → micrometro-quadrado ≈ 1000000.0', () => {
        expect(converter.convert(1, 'milimetro-quadrado', 'micrometro-quadrado')).toBeCloseTo(1000000.0, 10);
    });
    test('1 milimetro-quadrado → milimetro-quadrado ≈ 1.0', () => {
        expect(converter.convert(1, 'milimetro-quadrado', 'milimetro-quadrado')).toBeCloseTo(1.0, 10);
    });
    test('1 milimetro-quadrado → centimetro-quadrado ≈ 0.01', () => {
        expect(converter.convert(1, 'milimetro-quadrado', 'centimetro-quadrado')).toBeCloseTo(0.01, 10);
    });
    test('1 milimetro-quadrado → decimetro-quadrado ≈ 0.0001', () => {
        expect(converter.convert(1, 'milimetro-quadrado', 'decimetro-quadrado')).toBeCloseTo(0.0001, 10);
    });
    test('1 milimetro-quadrado → metro-quadrado ≈ 1e-06', () => {
        expect(converter.convert(1, 'milimetro-quadrado', 'metro-quadrado')).toBeCloseTo(1e-06, 10);
    });
    test('1 milimetro-quadrado → hectare ≈ 1e-10', () => {
        expect(converter.convert(1, 'milimetro-quadrado', 'hectare')).toBeCloseTo(1e-10, 10);
    });
    test('1 milimetro-quadrado → quilometro-quadrado ≈ 1e-12', () => {
        expect(converter.convert(1, 'milimetro-quadrado', 'quilometro-quadrado')).toBeCloseTo(1e-12, 10);
    });
    test('1 milimetro-quadrado → polegada-quadrada ≈ 0.001550003100006', () => {
        expect(converter.convert(1, 'milimetro-quadrado', 'polegada-quadrada')).toBeCloseTo(0.001550003100006, 10);
    });
    test('1 milimetro-quadrado → pe-quadrado ≈ 1.0763910417e-05', () => {
        expect(converter.convert(1, 'milimetro-quadrado', 'pe-quadrado')).toBeCloseTo(1.0763910417e-05, 10);
    });
    test('1 milimetro-quadrado → jarda-quadrada ≈ 1.195990046e-06', () => {
        expect(converter.convert(1, 'milimetro-quadrado', 'jarda-quadrada')).toBeCloseTo(1.195990046e-06, 10);
    });
    test('1 milimetro-quadrado → acre ≈ 2.47105e-10', () => {
        expect(converter.convert(1, 'milimetro-quadrado', 'acre')).toBeCloseTo(2.47105e-10, 10);
    });
    test('1 milimetro-quadrado → milha-quadrada ≈ 3.86e-13', () => {
        expect(converter.convert(1, 'milimetro-quadrado', 'milha-quadrada')).toBeCloseTo(3.86e-13, 10);
    });
    test('1 centimetro-quadrado → micrometro-quadrado ≈ 100000000.0', () => {
        expect(converter.convert(1, 'centimetro-quadrado', 'micrometro-quadrado')).toBeCloseTo(100000000.0, 10);
    });
    test('1 centimetro-quadrado → milimetro-quadrado ≈ 100.00000000000001', () => {
        expect(converter.convert(1, 'centimetro-quadrado', 'milimetro-quadrado')).toBeCloseTo(100.00000000000001, 10);
    });
    test('1 centimetro-quadrado → centimetro-quadrado ≈ 1.0', () => {
        expect(converter.convert(1, 'centimetro-quadrado', 'centimetro-quadrado')).toBeCloseTo(1.0, 10);
    });
    test('1 centimetro-quadrado → decimetro-quadrado ≈ 0.01', () => {
        expect(converter.convert(1, 'centimetro-quadrado', 'decimetro-quadrado')).toBeCloseTo(0.01, 10);
    });
    test('1 centimetro-quadrado → metro-quadrado ≈ 0.0001', () => {
        expect(converter.convert(1, 'centimetro-quadrado', 'metro-quadrado')).toBeCloseTo(0.0001, 10);
    });
    test('1 centimetro-quadrado → hectare ≈ 1e-08', () => {
        expect(converter.convert(1, 'centimetro-quadrado', 'hectare')).toBeCloseTo(1e-08, 10);
    });
    test('1 centimetro-quadrado → quilometro-quadrado ≈ 1e-10', () => {
        expect(converter.convert(1, 'centimetro-quadrado', 'quilometro-quadrado')).toBeCloseTo(1e-10, 10);
    });
    test('1 centimetro-quadrado → polegada-quadrada ≈ 0.15500031000062', () => {
        expect(converter.convert(1, 'centimetro-quadrado', 'polegada-quadrada')).toBeCloseTo(0.15500031000062, 10);
    });
    test('1 centimetro-quadrado → pe-quadrado ≈ 0.001076391041671', () => {
        expect(converter.convert(1, 'centimetro-quadrado', 'pe-quadrado')).toBeCloseTo(0.001076391041671, 10);
    });
    test('1 centimetro-quadrado → jarda-quadrada ≈ 0.00011959900463', () => {
        expect(converter.convert(1, 'centimetro-quadrado', 'jarda-quadrada')).toBeCloseTo(0.00011959900463, 10);
    });
    test('1 centimetro-quadrado → acre ≈ 2.4710538e-08', () => {
        expect(converter.convert(1, 'centimetro-quadrado', 'acre')).toBeCloseTo(2.4710538e-08, 10);
    });
    test('1 centimetro-quadrado → milha-quadrada ≈ 3.861e-11', () => {
        expect(converter.convert(1, 'centimetro-quadrado', 'milha-quadrada')).toBeCloseTo(3.861e-11, 10);
    });
    test('1 decimetro-quadrado → micrometro-quadrado ≈ 10000000000.0', () => {
        expect(converter.convert(1, 'decimetro-quadrado', 'micrometro-quadrado')).toBeCloseTo(10000000000.0, 10);
    });
    test('1 decimetro-quadrado → milimetro-quadrado ≈ 10000.0', () => {
        expect(converter.convert(1, 'decimetro-quadrado', 'milimetro-quadrado')).toBeCloseTo(10000.0, 10);
    });
    test('1 decimetro-quadrado → centimetro-quadrado ≈ 100.0', () => {
        expect(converter.convert(1, 'decimetro-quadrado', 'centimetro-quadrado')).toBeCloseTo(100.0, 10);
    });
    test('1 decimetro-quadrado → decimetro-quadrado ≈ 1.0', () => {
        expect(converter.convert(1, 'decimetro-quadrado', 'decimetro-quadrado')).toBeCloseTo(1.0, 10);
    });
    test('1 decimetro-quadrado → metro-quadrado ≈ 0.01', () => {
        expect(converter.convert(1, 'decimetro-quadrado', 'metro-quadrado')).toBeCloseTo(0.01, 10);
    });
    test('1 decimetro-quadrado → hectare ≈ 1e-06', () => {
        expect(converter.convert(1, 'decimetro-quadrado', 'hectare')).toBeCloseTo(1e-06, 10);
    });
    test('1 decimetro-quadrado → quilometro-quadrado ≈ 1e-08', () => {
        expect(converter.convert(1, 'decimetro-quadrado', 'quilometro-quadrado')).toBeCloseTo(1e-08, 10);
    });
    test('1 decimetro-quadrado → polegada-quadrada ≈ 15.500031000062', () => {
        expect(converter.convert(1, 'decimetro-quadrado', 'polegada-quadrada')).toBeCloseTo(15.500031000062, 10);
    });
    test('1 decimetro-quadrado → pe-quadrado ≈ 0.107639104167097', () => {
        expect(converter.convert(1, 'decimetro-quadrado', 'pe-quadrado')).toBeCloseTo(0.107639104167097, 10);
    });
    test('1 decimetro-quadrado → jarda-quadrada ≈ 0.011959900463011', () => {
        expect(converter.convert(1, 'decimetro-quadrado', 'jarda-quadrada')).toBeCloseTo(0.011959900463011, 10);
    });
    test('1 decimetro-quadrado → acre ≈ 2.471053815e-06', () => {
        expect(converter.convert(1, 'decimetro-quadrado', 'acre')).toBeCloseTo(2.471053815e-06, 10);
    });
    test('1 decimetro-quadrado → milha-quadrada ≈ 3.861022e-09', () => {
        expect(converter.convert(1, 'decimetro-quadrado', 'milha-quadrada')).toBeCloseTo(3.861022e-09, 10);
    });
    test('1 metro-quadrado → micrometro-quadrado ≈ 1000000000000.0', () => {
        expect(converter.convert(1, 'metro-quadrado', 'micrometro-quadrado')).toBeCloseTo(1000000000000.0, 10);
    });
    test('1 metro-quadrado → milimetro-quadrado ≈ 1000000.0', () => {
        expect(converter.convert(1, 'metro-quadrado', 'milimetro-quadrado')).toBeCloseTo(1000000.0, 10);
    });
    test('1 metro-quadrado → centimetro-quadrado ≈ 10000.0', () => {
        expect(converter.convert(1, 'metro-quadrado', 'centimetro-quadrado')).toBeCloseTo(10000.0, 10);
    });
    test('1 metro-quadrado → decimetro-quadrado ≈ 100.0', () => {
        expect(converter.convert(1, 'metro-quadrado', 'decimetro-quadrado')).toBeCloseTo(100.0, 10);
    });
    test('1 metro-quadrado → metro-quadrado ≈ 1.0', () => {
        expect(converter.convert(1, 'metro-quadrado', 'metro-quadrado')).toBeCloseTo(1.0, 10);
    });
    test('1 metro-quadrado → hectare ≈ 0.0001', () => {
        expect(converter.convert(1, 'metro-quadrado', 'hectare')).toBeCloseTo(0.0001, 10);
    });
    test('1 metro-quadrado → quilometro-quadrado ≈ 1e-06', () => {
        expect(converter.convert(1, 'metro-quadrado', 'quilometro-quadrado')).toBeCloseTo(1e-06, 10);
    });
    test('1 metro-quadrado → polegada-quadrada ≈ 1550.0031000062002', () => {
        expect(converter.convert(1, 'metro-quadrado', 'polegada-quadrada')).toBeCloseTo(1550.0031000062002, 10);
    });
    test('1 metro-quadrado → pe-quadrado ≈ 10.763910416709722', () => {
        expect(converter.convert(1, 'metro-quadrado', 'pe-quadrado')).toBeCloseTo(10.763910416709722, 10);
    });
    test('1 metro-quadrado → jarda-quadrada ≈ 1.19599004630108', () => {
        expect(converter.convert(1, 'metro-quadrado', 'jarda-quadrada')).toBeCloseTo(1.19599004630108, 10);
    });
    test('1 metro-quadrado → acre ≈ 0.000247105381467', () => {
        expect(converter.convert(1, 'metro-quadrado', 'acre')).toBeCloseTo(0.000247105381467, 10);
    });
    test('1 metro-quadrado → milha-quadrada ≈ 3.86102159e-07', () => {
        expect(converter.convert(1, 'metro-quadrado', 'milha-quadrada')).toBeCloseTo(3.86102159e-07, 10);
    });
    test('1 hectare → micrometro-quadrado ≈ 1e+16', () => {
        expect(converter.convert(1, 'hectare', 'micrometro-quadrado')).toBeCloseTo(1e+16, 10);
    });
    test('1 hectare → milimetro-quadrado ≈ 10000000000.0', () => {
        expect(converter.convert(1, 'hectare', 'milimetro-quadrado')).toBeCloseTo(10000000000.0, 10);
    });
    test('1 hectare → centimetro-quadrado ≈ 100000000.0', () => {
        expect(converter.convert(1, 'hectare', 'centimetro-quadrado')).toBeCloseTo(100000000.0, 10);
    });
    test('1 hectare → decimetro-quadrado ≈ 1000000.0', () => {
        expect(converter.convert(1, 'hectare', 'decimetro-quadrado')).toBeCloseTo(1000000.0, 10);
    });
    test('1 hectare → metro-quadrado ≈ 10000.0', () => {
        expect(converter.convert(1, 'hectare', 'metro-quadrado')).toBeCloseTo(10000.0, 10);
    });
    test('1 hectare → hectare ≈ 1.0', () => {
        expect(converter.convert(1, 'hectare', 'hectare')).toBeCloseTo(1.0, 10);
    });
    test('1 hectare → quilometro-quadrado ≈ 0.01', () => {
        expect(converter.convert(1, 'hectare', 'quilometro-quadrado')).toBeCloseTo(0.01, 10);
    });
    test('1 hectare → polegada-quadrada ≈ 15500031.000062', () => {
        expect(converter.convert(1, 'hectare', 'polegada-quadrada')).toBeCloseTo(15500031.000062, 10);
    });
    test('1 hectare → pe-quadrado ≈ 107639.10416709722', () => {
        expect(converter.convert(1, 'hectare', 'pe-quadrado')).toBeCloseTo(107639.10416709722, 10);
    });
    test('1 hectare → jarda-quadrada ≈ 11959.900463010803', () => {
        expect(converter.convert(1, 'hectare', 'jarda-quadrada')).toBeCloseTo(11959.900463010803, 10);
    });
    test('1 hectare → acre ≈ 2.471053814671653', () => {
        expect(converter.convert(1, 'hectare', 'acre')).toBeCloseTo(2.471053814671653, 10);
    });
    test('1 hectare → milha-quadrada ≈ 0.003861021585424', () => {
        expect(converter.convert(1, 'hectare', 'milha-quadrada')).toBeCloseTo(0.003861021585424, 10);
    });
    test('1 quilometro-quadrado → micrometro-quadrado ≈ 1e+18', () => {
        expect(converter.convert(1, 'quilometro-quadrado', 'micrometro-quadrado')).toBeCloseTo(1e+18, 10);
    });
    test('1 quilometro-quadrado → milimetro-quadrado ≈ 1000000000000.0', () => {
        expect(converter.convert(1, 'quilometro-quadrado', 'milimetro-quadrado')).toBeCloseTo(1000000000000.0, 10);
    });
    test('1 quilometro-quadrado → centimetro-quadrado ≈ 10000000000.0', () => {
        expect(converter.convert(1, 'quilometro-quadrado', 'centimetro-quadrado')).toBeCloseTo(10000000000.0, 10);
    });
    test('1 quilometro-quadrado → decimetro-quadrado ≈ 100000000.0', () => {
        expect(converter.convert(1, 'quilometro-quadrado', 'decimetro-quadrado')).toBeCloseTo(100000000.0, 10);
    });
    test('1 quilometro-quadrado → metro-quadrado ≈ 1000000.0', () => {
        expect(converter.convert(1, 'quilometro-quadrado', 'metro-quadrado')).toBeCloseTo(1000000.0, 10);
    });
    test('1 quilometro-quadrado → hectare ≈ 100.0', () => {
        expect(converter.convert(1, 'quilometro-quadrado', 'hectare')).toBeCloseTo(100.0, 10);
    });
    test('1 quilometro-quadrado → quilometro-quadrado ≈ 1.0', () => {
        expect(converter.convert(1, 'quilometro-quadrado', 'quilometro-quadrado')).toBeCloseTo(1.0, 10);
    });
    test('1 quilometro-quadrado → polegada-quadrada ≈ 1550003100.0062', () => {
        expect(converter.convert(1, 'quilometro-quadrado', 'polegada-quadrada')).toBeCloseTo(1550003100.0062, 10);
    });
    test('1 quilometro-quadrado → pe-quadrado ≈ 10763910.416709721', () => {
        expect(converter.convert(1, 'quilometro-quadrado', 'pe-quadrado')).toBeCloseTo(10763910.416709721, 10);
    });
    test('1 quilometro-quadrado → jarda-quadrada ≈ 1195990.0463010804', () => {
        expect(converter.convert(1, 'quilometro-quadrado', 'jarda-quadrada')).toBeCloseTo(1195990.0463010804, 10);
    });
    test('1 quilometro-quadrado → acre ≈ 247.10538146716533', () => {
        expect(converter.convert(1, 'quilometro-quadrado', 'acre')).toBeCloseTo(247.10538146716533, 10);
    });
    test('1 quilometro-quadrado → milha-quadrada ≈ 0.386102158542446', () => {
        expect(converter.convert(1, 'quilometro-quadrado', 'milha-quadrada')).toBeCloseTo(0.386102158542446, 10);
    });
    test('1 polegada-quadrada → micrometro-quadrado ≈ 645160000.0', () => {
        expect(converter.convert(1, 'polegada-quadrada', 'micrometro-quadrado')).toBeCloseTo(645160000.0, 10);
    });
    test('1 polegada-quadrada → milimetro-quadrado ≈ 645.16', () => {
        expect(converter.convert(1, 'polegada-quadrada', 'milimetro-quadrado')).toBeCloseTo(645.16, 10);
    });
    test('1 polegada-quadrada → centimetro-quadrado ≈ 6.451599999999999', () => {
        expect(converter.convert(1, 'polegada-quadrada', 'centimetro-quadrado')).toBeCloseTo(6.451599999999999, 10);
    });
    test('1 polegada-quadrada → decimetro-quadrado ≈ 0.064516', () => {
        expect(converter.convert(1, 'polegada-quadrada', 'decimetro-quadrado')).toBeCloseTo(0.064516, 10);
    });
    test('1 polegada-quadrada → metro-quadrado ≈ 0.00064516', () => {
        expect(converter.convert(1, 'polegada-quadrada', 'metro-quadrado')).toBeCloseTo(0.00064516, 10);
    });
    test('1 polegada-quadrada → hectare ≈ 6.4516e-08', () => {
        expect(converter.convert(1, 'polegada-quadrada', 'hectare')).toBeCloseTo(6.4516e-08, 10);
    });
    test('1 polegada-quadrada → quilometro-quadrado ≈ 6.4516e-10', () => {
        expect(converter.convert(1, 'polegada-quadrada', 'quilometro-quadrado')).toBeCloseTo(6.4516e-10, 10);
    });
    test('1 polegada-quadrada → polegada-quadrada ≈ 1.0', () => {
        expect(converter.convert(1, 'polegada-quadrada', 'polegada-quadrada')).toBeCloseTo(1.0, 10);
    });
    test('1 polegada-quadrada → pe-quadrado ≈ 0.006944444444444', () => {
        expect(converter.convert(1, 'polegada-quadrada', 'pe-quadrado')).toBeCloseTo(0.006944444444444, 10);
    });
    test('1 polegada-quadrada → jarda-quadrada ≈ 0.000771604938272', () => {
        expect(converter.convert(1, 'polegada-quadrada', 'jarda-quadrada')).toBeCloseTo(0.000771604938272, 10);
    });
    test('1 polegada-quadrada → acre ≈ 1.59422508e-07', () => {
        expect(converter.convert(1, 'polegada-quadrada', 'acre')).toBeCloseTo(1.59422508e-07, 10);
    });
    test('1 polegada-quadrada → milha-quadrada ≈ 2.49098e-10', () => {
        expect(converter.convert(1, 'polegada-quadrada', 'milha-quadrada')).toBeCloseTo(2.49098e-10, 10);
    });
    test('1 pe-quadrado → micrometro-quadrado ≈ 92903040000.00002', () => {
        expect(converter.convert(1, 'pe-quadrado', 'micrometro-quadrado')).toBeCloseTo(92903040000.00002, 10);
    });
    test('1 pe-quadrado → milimetro-quadrado ≈ 92903.04000000001', () => {
        expect(converter.convert(1, 'pe-quadrado', 'milimetro-quadrado')).toBeCloseTo(92903.04000000001, 10);
    });
    test('1 pe-quadrado → centimetro-quadrado ≈ 929.0304', () => {
        expect(converter.convert(1, 'pe-quadrado', 'centimetro-quadrado')).toBeCloseTo(929.0304, 10);
    });
    test('1 pe-quadrado → decimetro-quadrado ≈ 9.290304', () => {
        expect(converter.convert(1, 'pe-quadrado', 'decimetro-quadrado')).toBeCloseTo(9.290304, 10);
    });
    test('1 pe-quadrado → metro-quadrado ≈ 0.09290304', () => {
        expect(converter.convert(1, 'pe-quadrado', 'metro-quadrado')).toBeCloseTo(0.09290304, 10);
    });
    test('1 pe-quadrado → hectare ≈ 9.290304e-06', () => {
        expect(converter.convert(1, 'pe-quadrado', 'hectare')).toBeCloseTo(9.290304e-06, 10);
    });
    test('1 pe-quadrado → quilometro-quadrado ≈ 9.290304e-08', () => {
        expect(converter.convert(1, 'pe-quadrado', 'quilometro-quadrado')).toBeCloseTo(9.290304e-08, 10);
    });
    test('1 pe-quadrado → polegada-quadrada ≈ 144.0', () => {
        expect(converter.convert(1, 'pe-quadrado', 'polegada-quadrada')).toBeCloseTo(144.0, 10);
    });
    test('1 pe-quadrado → pe-quadrado ≈ 1.0', () => {
        expect(converter.convert(1, 'pe-quadrado', 'pe-quadrado')).toBeCloseTo(1.0, 10);
    });
    test('1 pe-quadrado → jarda-quadrada ≈ 0.111111111111111', () => {
        expect(converter.convert(1, 'pe-quadrado', 'jarda-quadrada')).toBeCloseTo(0.111111111111111, 10);
    });
    test('1 pe-quadrado → acre ≈ 2.2956841139e-05', () => {
        expect(converter.convert(1, 'pe-quadrado', 'acre')).toBeCloseTo(2.2956841139e-05, 10);
    });
    test('1 pe-quadrado → milha-quadrada ≈ 3.5870064e-08', () => {
        expect(converter.convert(1, 'pe-quadrado', 'milha-quadrada')).toBeCloseTo(3.5870064e-08, 10);
    });
    test('1 jarda-quadrada → micrometro-quadrado ≈ 836127360000.0', () => {
        expect(converter.convert(1, 'jarda-quadrada', 'micrometro-quadrado')).toBeCloseTo(836127360000.0, 10);
    });
    test('1 jarda-quadrada → milimetro-quadrado ≈ 836127.36', () => {
        expect(converter.convert(1, 'jarda-quadrada', 'milimetro-quadrado')).toBeCloseTo(836127.36, 10);
    });
    test('1 jarda-quadrada → centimetro-quadrado ≈ 8361.273599999999', () => {
        expect(converter.convert(1, 'jarda-quadrada', 'centimetro-quadrado')).toBeCloseTo(8361.273599999999, 10);
    });
    test('1 jarda-quadrada → decimetro-quadrado ≈ 83.612736', () => {
        expect(converter.convert(1, 'jarda-quadrada', 'decimetro-quadrado')).toBeCloseTo(83.612736, 10);
    });
    test('1 jarda-quadrada → metro-quadrado ≈ 0.83612736', () => {
        expect(converter.convert(1, 'jarda-quadrada', 'metro-quadrado')).toBeCloseTo(0.83612736, 10);
    });
    test('1 jarda-quadrada → hectare ≈ 8.3612736e-05', () => {
        expect(converter.convert(1, 'jarda-quadrada', 'hectare')).toBeCloseTo(8.3612736e-05, 10);
    });
    test('1 jarda-quadrada → quilometro-quadrado ≈ 8.3612736e-07', () => {
        expect(converter.convert(1, 'jarda-quadrada', 'quilometro-quadrado')).toBeCloseTo(8.3612736e-07, 10);
    });
    test('1 jarda-quadrada → polegada-quadrada ≈ 1296.0', () => {
        expect(converter.convert(1, 'jarda-quadrada', 'polegada-quadrada')).toBeCloseTo(1296.0, 10);
    });
    test('1 jarda-quadrada → pe-quadrado ≈ 9.0', () => {
        expect(converter.convert(1, 'jarda-quadrada', 'pe-quadrado')).toBeCloseTo(9.0, 10);
    });
    test('1 jarda-quadrada → jarda-quadrada ≈ 1.0', () => {
        expect(converter.convert(1, 'jarda-quadrada', 'jarda-quadrada')).toBeCloseTo(1.0, 10);
    });
    test('1 jarda-quadrada → acre ≈ 0.000206611570248', () => {
        expect(converter.convert(1, 'jarda-quadrada', 'acre')).toBeCloseTo(0.000206611570248, 10);
    });
    test('1 jarda-quadrada → milha-quadrada ≈ 3.22830579e-07', () => {
        expect(converter.convert(1, 'jarda-quadrada', 'milha-quadrada')).toBeCloseTo(3.22830579e-07, 10);
    });
    test('1 acre → micrometro-quadrado ≈ 4046856422400000.0', () => {
        expect(converter.convert(1, 'acre', 'micrometro-quadrado')).toBeCloseTo(4046856422400000.0, 10);
    });
    test('1 acre → milimetro-quadrado ≈ 4046856422.4000006', () => {
        expect(converter.convert(1, 'acre', 'milimetro-quadrado')).toBeCloseTo(4046856422.4000006, 10);
    });
    test('1 acre → centimetro-quadrado ≈ 40468564.224', () => {
        expect(converter.convert(1, 'acre', 'centimetro-quadrado')).toBeCloseTo(40468564.224, 10);
    });
    test('1 acre → decimetro-quadrado ≈ 404685.64224', () => {
        expect(converter.convert(1, 'acre', 'decimetro-quadrado')).toBeCloseTo(404685.64224, 10);
    });
    test('1 acre → metro-quadrado ≈ 4046.8564224', () => {
        expect(converter.convert(1, 'acre', 'metro-quadrado')).toBeCloseTo(4046.8564224, 10);
    });
    test('1 acre → hectare ≈ 0.40468564224', () => {
        expect(converter.convert(1, 'acre', 'hectare')).toBeCloseTo(0.40468564224, 10);
    });
    test('1 acre → quilometro-quadrado ≈ 0.0040468564224', () => {
        expect(converter.convert(1, 'acre', 'quilometro-quadrado')).toBeCloseTo(0.0040468564224, 10);
    });
    test('1 acre → polegada-quadrada ≈ 6272640.0', () => {
        expect(converter.convert(1, 'acre', 'polegada-quadrada')).toBeCloseTo(6272640.0, 10);
    });
    test('1 acre → pe-quadrado ≈ 43560.0', () => {
        expect(converter.convert(1, 'acre', 'pe-quadrado')).toBeCloseTo(43560.0, 10);
    });
    test('1 acre → jarda-quadrada ≈ 4840.0', () => {
        expect(converter.convert(1, 'acre', 'jarda-quadrada')).toBeCloseTo(4840.0, 10);
    });
    test('1 acre → acre ≈ 1.0', () => {
        expect(converter.convert(1, 'acre', 'acre')).toBeCloseTo(1.0, 10);
    });
    test('1 acre → milha-quadrada ≈ 0.0015625', () => {
        expect(converter.convert(1, 'acre', 'milha-quadrada')).toBeCloseTo(0.0015625, 10);
    });
    test('1 milha-quadrada → micrometro-quadrado ≈ 2.589988110336e+18', () => {
        expect(converter.convert(1, 'milha-quadrada', 'micrometro-quadrado')).toBeCloseTo(2.589988110336e+18, 10);
    });
    test('1 milha-quadrada → milimetro-quadrado ≈ 2589988110336.0', () => {
        expect(converter.convert(1, 'milha-quadrada', 'milimetro-quadrado')).toBeCloseTo(2589988110336.0, 10);
    });
    test('1 milha-quadrada → centimetro-quadrado ≈ 25899881103.36', () => {
        expect(converter.convert(1, 'milha-quadrada', 'centimetro-quadrado')).toBeCloseTo(25899881103.36, 10);
    });
    test('1 milha-quadrada → decimetro-quadrado ≈ 258998811.0336', () => {
        expect(converter.convert(1, 'milha-quadrada', 'decimetro-quadrado')).toBeCloseTo(258998811.0336, 10);
    });
    test('1 milha-quadrada → metro-quadrado ≈ 2589988.110336', () => {
        expect(converter.convert(1, 'milha-quadrada', 'metro-quadrado')).toBeCloseTo(2589988.110336, 10);
    });
    test('1 milha-quadrada → hectare ≈ 258.9988110336', () => {
        expect(converter.convert(1, 'milha-quadrada', 'hectare')).toBeCloseTo(258.9988110336, 10);
    });
    test('1 milha-quadrada → quilometro-quadrado ≈ 2.589988110336', () => {
        expect(converter.convert(1, 'milha-quadrada', 'quilometro-quadrado')).toBeCloseTo(2.589988110336, 10);
    });
    test('1 milha-quadrada → polegada-quadrada ≈ 4014489600.0000005', () => {
        expect(converter.convert(1, 'milha-quadrada', 'polegada-quadrada')).toBeCloseTo(4014489600.0000005, 10);
    });
    test('1 milha-quadrada → pe-quadrado ≈ 27878400.0', () => {
        expect(converter.convert(1, 'milha-quadrada', 'pe-quadrado')).toBeCloseTo(27878400.0, 10);
    });
    test('1 milha-quadrada → jarda-quadrada ≈ 3097600.0', () => {
        expect(converter.convert(1, 'milha-quadrada', 'jarda-quadrada')).toBeCloseTo(3097600.0, 10);
    });
    test('1 milha-quadrada → acre ≈ 640.0', () => {
        expect(converter.convert(1, 'milha-quadrada', 'acre')).toBeCloseTo(640.0, 10);
    });
    test('1 milha-quadrada → milha-quadrada ≈ 1.0', () => {
        expect(converter.convert(1, 'milha-quadrada', 'milha-quadrada')).toBeCloseTo(1.0, 10);
    });
});