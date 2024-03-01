const listaCompras = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: [],
    outros: []
};

function adicionarItem(nome, categoria) {
    listaCompras[categoria].push(nome);
}

function removerItem(nome) {
    for (const categoria in listaCompras) {
        const index = listaCompras[categoria].indexOf(nome);
        if (index !== -1) {
            listaCompras[categoria].splice(index, 1);
            console.log(`O item "${nome}" foi removido da lista de compras.`);
            return;
        }
    }
    console.log("Não foi possível encontrar o item dentro da lista!");
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
        const adicionar = prompt("Deseja adicionar uma comida na sua lista de compras, ou remover um item? (adicionar/remover/não)").toLowerCase();

        if (adicionar === "adicionar") {
            const comida = prompt("Qual comida você deseja inserir?");
            const categoria = prompt("Em qual categoria essa comida se encaixa? (frutas, laticínios, congelados, doces, outros)").toLowerCase();

            if (Object.keys(listaCompras).includes(categoria)) {
                adicionarItem(comida, categoria);
            } else {
                adicionarItem(comida, "outros"); 
            }
        } else if (adicionar === "remover") {
            if (Object.values(listaCompras).flat().length > 0) {
                const itemRemover = prompt("Itens na lista atual: " + Object.values(listaCompras).flat().join(", ") + "\nQual item você deseja remover?");
                removerItem(itemRemover);
            } else {
                console.log("Não há itens na lista de compras para remover.");
            }
        } else if (adicionar === "não") {
            adicionarMais = false;
        } else {
            console.log("Por favor, responda com 'adicionar', 'remover' ou 'não'.");
        }

        exibirListaCompras();
    }
}

main();
