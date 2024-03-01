function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 11);
}

const numeroAdivinhar = gerarNumeroAleatorio();


const maxTentativas = 3;

alert("Vamos jogar o jogo de adivinhação!");

function validarNumero(numero) {
  return !isNaN(numero) && numero >= 0 && numero <= 10;
}

for (let tentativa = 1; tentativa <= maxTentativas; tentativa++) {
  const chute = parseInt(prompt("Tente adivinhar o número (entre 0 e 10):"));

  if (validarNumero(chute)) {
    if (chute === numeroAdivinhar) {
      alert("Parabéns! Você acertou o número!");
      break;
    } else {
      alert("Ops! Você errou. Tente novamente!");
      if (tentativa < maxTentativas) {
        alert(`Você ainda tem ${maxTentativas - tentativa} tentativas.`);
      }
    }
  } else {
    alert("Por favor, insira um número válido entre 0 e 10.");
  }
}

if (tentativa > maxTentativas) {
  alert(`Você não conseguiu adivinhar o número. O número era ${numeroAdivinhar}.`);
}
