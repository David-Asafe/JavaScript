// Arrow function que soma dois números
const soma = (numero1, numero2) => numero1 + numero2;

// Arrow function que subtrai dois números
const subtracao = (numero1, numero2) => numero1 - numero2;

// Arrow function que multiplicação dois números
const multiplicacao = (numero1, numero2) => numero1 * numero2;

// Arrow function que divisão dois números
const divisao = (numero1, numero2) => numero1 / numero2;

// Arrow function executarOperacao que recebe dois números e uma função de callback
const executarOperacao = (numero1, numero2, callback) => callback(numero1, numero2);

// Chamando a função executarOperacao com a função soma como callback
const resultadoSoma = executarOperacao(4, 3, soma);
console. log("Resultado da soma:", resultadoSoma);

// Chamando a função executarOperacao com a função subtracao como callback
const resultadoSubtracao = executarOperacao(10, 3, subtracao);
console. log("Resultado da subtração:", resultadoSubtracao);

// Chamando a função executarOperacao com a função multiplicação como callback
const resultadoMultiplicacao = executarOperacao(11, 7, multiplicacao);
console. log("Resultado da multiplicação:", resultadoMultiplicacao);

// Chamando a função executarOperacao com a função divisao como callback
const resultadoDivisao = executarOperacao(77, 11, divisao);
console. log("Resultado da divisão:", resultadoDivisao);
