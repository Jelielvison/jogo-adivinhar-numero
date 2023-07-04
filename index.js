var numeroSecreto = parseInt(Math.random() * 101);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou";
  } else if (chute > 100 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 100";
  } else if (numeroSecreto > chute) {
    elementoResultado.innerHTML = "Você errou, o número é maior que seu chute";
  } else {
    elementoResultado.innerHTML = "Você errou, o número é menor que seu chute";
  }
}
