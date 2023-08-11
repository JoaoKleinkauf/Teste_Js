function mdc(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const numero1 = 48;
const numero2 = 18;

const resultado = mdc(numero1, numero2);

console.log(`MDC de ${numero1} e ${numero2} é ${resultado}`);
