const { mdc } = require('./mdc.js')

describe('Máximo divisor comum', () => {
    it('Verificando o mdc dos valores', () => {
        const numero1 = 48
        const numero2 = 18
        const resultado = mdc(numero1, numero2)

        expect(resultado).toBe(6)
    });
});

