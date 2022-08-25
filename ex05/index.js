const inputItem = document.getElementById("inputItem");
const btOk = document.getElementById("btOk");
const lista = document.getElementById("lista");

const handleClickBtOk = () => {
  const item = inputItem.value.trim();
  if (item) {
    lista.innerHTML += `<li>${item}</li>`;
    // lista.innerHTML += "<li>" + item + "</li>";
  }
  inputItem.value = "";
  inputItem.focus();
};

btOk.onclick = handleClickBtOk;
