let resultadoDado;
let lncamento = 0;

while (resultadoDado !== 6) {
    resultadoDado = Math.floor(Math.random() * 6) + 1; // Gera um  número aleatório de 1 a 6
    lancamento++;
    console.log(`Lancamento ${lancamento}: Resultado do dado: ${resultadoDado}`);
}

console.log(`Finalmente! O número 6 foi obtido após ${lancamento} lançamento.`);