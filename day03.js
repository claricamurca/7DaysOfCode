const area = prompt("Qual área na programação você quer seguir? Digite 'Front-End' ou 'Back-End'!")
let tecnologia = "";
if (area == "Front-End"){
    tecnologia = prompt("Você quer aprender React ou aprender Vue?")
} else if (area == "Back-End") {
    tecnologia = prompt("Você quer aprender C# ou Java?")
} else {
    alert("Você não inseriu uma área válida!")
}

const escolha = prompt("Agora, você deseja seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? Digite 1 para continuar na área escolhida ou 2 para se tornar Fullstack")
if (escolha == 1) {
    alert(`Muito bom! Continue estudando ${tecnologia} e você terá muito sucesso na área ${area}.`)
} else if (escolha == "2") {
    alert(`Parabéns, agora além de ${tecnologia}, você estudará outras tecnologias para se tornar Fullstack`)   
} else {
    alert("Insira um valor válido")
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}