const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2024,
    cor: "Prata"
};
for (const chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
}