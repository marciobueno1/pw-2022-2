const inputItem = document.getElementById("inputItem");
const btOk = document.getElementById("btOk");
const lista = document.getElementById("lista");

const handleClickBtOk = () => {
  const item = inputItem.value.trim();
  if (item) {
    const itemText = document.createTextNode(item);
    const li = document.createElement("li");
    li.appendChild(itemText);
    lista.appendChild(li);
  }
  inputItem.value = "";
  inputItem.focus();
};

btOk.onclick = handleClickBtOk;
