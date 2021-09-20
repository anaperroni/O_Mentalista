var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute === numeroSecreto) {
    resultado.innerHTML = "You Won!";
  } else if (chute > 10 ) {
    resultado.innerHTML = "Try the numbers from 0 to 10";
  } else if (chute < 0 ) {
    resultado.innerHTML = "Try the numbers from 0 to 10";
  } else if (chute != 0) {
      resultado.innerHTML = "Try again!";
  } 
}

