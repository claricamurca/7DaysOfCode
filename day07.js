function soma(numero1, numero2) {
    return numero1 + numero2;
}

function subtracao(numero1, numero2) {
    return numero1 - numero2;
}

function mutiplicacao(numero1, numero2) {
    return numero1 * numero2;
}

function divisao(numero1, numero2) {
    if (numero2 === 0) {
        return "Erro: divisão por zero";
    } else {
        return numero1 / numero2;
    }
}

function calculadora() {
    let continuar = true;

    while (continuar) {
        const operacao = prompt("Escolha a operação desejada: soma, subtração, multiplicação, divisão ou sair.").toLowerCase();

        switch (operacao) {
            case "soma":
                const somaNumero1 = parseFloat(prompt("Digite o primeiro número:"));
                const somaNumero2 = parseFloat(prompt("Digite o segundo número:"));
                console.log("Resultado: " + soma(somaNumero1, somaNumero2));
                break;
            case "subtração":
                const subNumero1 = parseFloat(prompt("Digite o primeiro número:"));
                const subNumero2 = parseFloat(prompt("Digite o segundo número:"));
                console.log("Resultado: " + subtracao(subNumero1, subNumero2));
                break;
            case "multiplicação":
                const multNumero1 = parseFloat(prompt("Digite o primeiro número:"));
                const multNumero2 = parseFloat(prompt("Digite o segundo número:"));
                console.log("Resultado: " + multiplicacao(multNumero1, multNumero2));
                break;
            case "divisão":
                const divNumero1 = parseFloat(prompt("Digite o primeiro número:"));
                const divNumero2 = parseFloat(prompt("Digite o segundo número:"));
                console.log("Resultado: " + divisao(divNumero1, divNumero2));
                break;
            case "sair":
                continuar = false;
                console.log("Até a próxima!");
                break;
            default:
                console.log("Opção inválida. Por favor, escolha uma operação válida.");
        }
    }
}

calculadora();