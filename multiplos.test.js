const { somarMultiplosDeCincoOuSeteAbaixoDeMil } = require('./multiplos')

describe('Multiplos', () => {
    it('Múltiplos de 5 ou 7 abaixo de 1000', () => {
        const resultado = somarMultiplosDeCincoOuSeteAbaixoDeMil()

        expect(resultado).toBe(156361)
    });
});