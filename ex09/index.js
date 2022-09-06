const inputNome = document.getElementById("inputNome");
const inputIdade = document.getElementById("inputIdade");
const inputPropriedade = document.getElementById("inputPropriedade");
const inputValor = document.getElementById("inputValor");
const btDefinirObjeto = document.getElementById("btDefinirObjeto");
const btDefinirPropriedade = document.getElementById("btDefinirPropriedade");
const preObjeto = document.getElementById("preObjeto");

let pessoa = {};

const handleClickBtDefinirObjeto = () => {
  const nome = inputNome.value.trim();
  const idade = parseInt(inputIdade.value.trim());
  if (!nome) {
    alert("Digite um nome válido no input Nome");
    return;
  }
  if (isNaN(idade)) {
    alert("Digite um número inteiro no input Idade");
    return;
  }
  pessoa = { nome: nome, idade: idade };
  console.log(pessoa);
  preObjeto.innerHTML = JSON.stringify(pessoa);
};

const handleClickBtDefinirPropriedade = () => {
  const propriedade = inputPropriedade.value.trim();
  const valor = inputValor.value.trim();
  if (!propriedade) {
    alert("Digite uma propriedade válida no input Propriedade");
    return;
  }
  if (!valor) {
    alert("Digite um valor válido no input Valor");
    return;
  }
  pessoa[propriedade] = valor;
  console.log(pessoa);
  preObjeto.innerHTML = JSON.stringify(pessoa);
};

btDefinirObjeto.onclick = handleClickBtDefinirObjeto;
btDefinirPropriedade.onclick = handleClickBtDefinirPropriedade;
