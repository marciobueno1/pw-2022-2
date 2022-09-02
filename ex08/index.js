const inputValores = document.getElementById("inputValores");
const inputColunas = document.getElementById("inputColunas");
const btGerarTabela = document.getElementById("btGerarTabela");
const preTabela = document.getElementById("preTabela");

const handleClickBtGerarTabela = () => {
  const valores = parseInt(inputValores.value);
  if (isNaN(valores)) {
    alert("Digite um número inteiro no input Quantidade de Valores");
    return;
  }
  const colunas = parseInt(inputColunas.value);
  if (isNaN(colunas)) {
    alert("Digite um número inteiro no input Quantidade de Colunas");
    return;
  }
  preTabela.innerHTML = "";
  for (let i = 1; i <= valores; ++i) {
    preTabela.innerHTML += i + "\t";
    if (i % colunas == 0) {
      preTabela.innerHTML += "\n";
    }
  }
};

btGerarTabela.onclick = handleClickBtGerarTabela;
