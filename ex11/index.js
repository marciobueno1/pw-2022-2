const preResult = document.getElementById("preResult");
const h3Nome = document.getElementById("h3Nome");
const pInfo = document.getElementById("pInfo");
const inputID = document.getElementById("inputID");
const btPesquisar = document.getElementById("btPesquisar");

const handleClickBtPesquisar = () => {
  const id = parseInt(inputID.value.trim());
  if (isNaN(id) || id <= 0) {
    alert("Digite um número positivo!");
    return;
  }
  fetch(`https://swapi.dev/api/people/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      preResult.innerHTML = JSON.stringify(data);
      h3Nome.innerHTML = data.name;
      pInfo.innerHTML =
        "Altura = " + data.height + "cm <br />" + "Peso = " + data.mass + "kg";
    });
};

btPesquisar.onclick = handleClickBtPesquisar;
