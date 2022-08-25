const inputNome = document.getElementById("inputNome");
const btOk = document.getElementById("btOk");
const h3Nome = document.getElementById("h3Nome");

const handleClickBtOk = () => {
  const nome = inputNome.value.trim();
  if (nome) {
    h3Nome.innerHTML += `Nome Digitado = ${inputNome.value} <br />`;
    // h3Nome.innerHTML = h3Nome.innerHTML + `Nome Digitado = ${inputNome.value} <br />`;
  } else {
    h3Nome.innerHTML = "";
  }
  inputNome.value = "";
  inputNome.focus();
};

btOk.onclick = handleClickBtOk;
