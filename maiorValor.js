function indicesMaiorEMenor(array) {
    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[indiceMaior]) {
            indiceMaior = i;
        } else if (array[i] < array[indiceMenor]) {
            indiceMenor = i;
        }
    }

    return { indiceMaior, indiceMenor };
}

const numeros = [1, 100, 43, 19];

const { indiceMaior, indiceMenor } = indicesMaiorEMenor(numeros);

console.log(`O índice do maior valor é ${indiceMaior} e o índice do menor valor é ${indiceMenor}.`);