const inputNome = document.getElementById("inputNome");
const btOk = document.getElementById("btOk");
const h3Nome = document.getElementById("h3Nome");

const handleClickBtOk = () => {
  const nome = inputNome.value.trim();
  if (nome) {
    h3Nome.innerHTML = `Nome Digitado = ${inputNome.value}`;
  } else {
    h3Nome.innerHTML = "";
  }
  inputNome.value = "";
  inputNome.focus();
};

btOk.onclick = handleClickBtOk;
