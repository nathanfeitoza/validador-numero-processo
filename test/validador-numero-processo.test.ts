import { ValidadorNumeroProcesso } from '../src/validador-numero-processo';

test('Testing proccess validator', () => {
    expect(ValidadorNumeroProcesso.validar('0000675-88.2016.5.20.0011')).toBe(true);
    expect(ValidadorNumeroProcesso.validar('0000675-88.2016.5.20.0012')).toBe(false);
    
    try {
        expect(ValidadorNumeroProcesso.validar('0000675-88.2016.5.20.001')).toBe(true);
    } catch (err) {
        expect(err).toBe('O número do processo enviado é inválido');
    }
});
