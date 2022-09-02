const inputNumero = document.getElementById("inputNumero");
const btOk = document.getElementById("btOk");
const lista = document.getElementById("lista");

const handleClickBtOk = () => {
  const numero = parseInt(inputNumero.value.trim());
  if (!isNaN(numero)) {
    lista.innerHTML = "";
    for (let i = 1; i <= 10; ++i) {
      const itemText = document.createTextNode(
        `${numero} ** ${i} = ${numero ** i}`
      );
      const li = document.createElement("li");
      li.appendChild(itemText);
      lista.appendChild(li);
    }
  }
  inputNumero.value = "";
  inputNumero.focus();
};

btOk.onclick = handleClickBtOk;
