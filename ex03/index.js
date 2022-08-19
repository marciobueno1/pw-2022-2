const maiorDeIdade = confirm("Você tem 18 anos ou mais?");
let mensagem;
console.log(maiorDeIdade);
if (maiorDeIdade) {
  mensagem = "Você pode comprar neste site!";
} else {
  mensagem = "Você NÃO pode comprar neste site!";
}
alert(mensagem);
const h2Mensagem = document.getElementById("mensagem");
h2Mensagem.innerHTML = mensagem;
