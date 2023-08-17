const { indicesMaiorEMenor } = require('./maiorValor.js');

test('encontra índices do maior e menor valor', () => {
  const numeros = [1, 100, 43, 19]
  const { indiceMaior, indiceMenor } = indicesMaiorEMenor(numeros)

  expect(indiceMaior).toBe(1)
  expect(indiceMenor).toBe(0)
});