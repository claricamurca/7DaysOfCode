const listaCompras = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: [],
    outros: []
}

function adicionarItem(nome, categoria) {
    listaCompras[categoria].push(nome);
}

function exibirListaCompras() {
    console.log("Lista de compras:");
    for (const categoria in listaCompras) {
        if (listaCompras[categoria].length > 0) {
            console.log(`    ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${listaCompras[categoria].join(', ')}`);
        }
    }
}

function main() {
    let adicionarMais = true;

    while (adicionarMais) {
        const adicionar = prompt("Deseja adicionar uma comida na sua lista de compras? (sim/não)").toLowerCase();

        if (adicionar === "sim") {
            const comida = prompt("Qual comida você deseja inserir?");
            const categoria = prompt("Em qual categoria essa comida se encaixa? (frutas, laticínios, congelados, doces, outros)").toLowerCase();

            if (Object.keys(listaCompras).includes(categoria)) {
                adicionarItem(comida, categoria);
            } else {
                adicionarItem(comida, "outros");
            }
        } else if (adicionar === "não") {
            adicionarMais = false;
        } else {
            console.log("Por favor, responda com 'sim' ou 'não'.");
        }
    }

    exibirListaCompras();
}

main();