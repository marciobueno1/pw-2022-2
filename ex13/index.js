Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  "rqIwwZbTJx3mEAMKuWvW0c8N8S2wqkJBGkylLc8Y", // This is your Application ID
  "LjXm2McfuCLy8lGGI85Lywm1j9bZ8hnIEBeyldTZ" // This is your Javascript key
);
const Tarefa = Parse.Object.extend("Tarefa");

const h3Descricao = document.getElementById("h3Descricao");
const listaTarefas = document.getElementById("listaTarefas");
const inputID = document.getElementById("inputID");
const btPesquisar = document.getElementById("btPesquisar");
const inputDescricao = document.getElementById("inputDescricao");
const btInserir = document.getElementById("btInserir");
const inputNovaDescricao = document.getElementById("inputNovaDescricao");
const btAlterar = document.getElementById("btAlterar");
const btRemover = document.getElementById("btRemover");

const handleClickBtRemover = async () => {
  const id = inputID.value.trim();
  if (!id) {
    alert("Favor digitar um ID");
    return;
  }
  const query = new Parse.Query(Tarefa);
  try {
    const tarefa = await query.get(id);
    if (!tarefa) {
      alert("Nenhuma tarefa encontrada!");
      return;
    }
    const response = await tarefa.destroy();
    console.log("Deleted ParseObject", response);
    lerTarefas();
    alert("Objeto removido: " + JSON.stringify(response));
  } catch (error) {
    console.error("Error while fetching Tarefa", error);
  }
};

const handleClickBtAlterar = async () => {
  const id = inputID.value.trim();
  const novaDescricao = inputNovaDescricao.value.trim();
  if (!id) {
    alert("Favor digitar um ID");
    return;
  }
  if (!novaDescricao) {
    alert("Favor digitar uma nova descrição!");
    return;
  }
  const query = new Parse.Query(Tarefa);
  try {
    const tarefa = await query.get(id);
    if (!tarefa) {
      alert("Nenhuma tarefa encontrada!");
      return;
    }
    tarefa.set("descricao", novaDescricao);
    tarefa.save();
    lerTarefas();
  } catch (error) {
    console.error("Error while fetching Tarefa", error);
  }
};

const handleClickBtPesquisar = async () => {
  const id = inputID.value.trim();
  if (!id) {
    alert("Favor digitar um ID");
    return;
  }
  const query = new Parse.Query(Tarefa);
  query.equalTo("objectId", id);
  try {
    const tarefa = await query.first();
    if (!tarefa) {
      alert("Nenhuma tarefa encontrada!");
      return;
    }
    const descricao = tarefa.get("descricao");
    const feita = tarefa.get("feita");
    h3Descricao.innerHTML += `${tarefa.id} ${descricao} - ${feita}`;
  } catch (error) {
    console.error("Error while fetching Tarefa", error);
  }
};

const lerTarefas = async () => {
  const query = new Parse.Query(Tarefa);
  try {
    const results = await query.find();
    listaTarefas.innerHTML = "";
    for (const tarefa of results) {
      const descricao = tarefa.get("descricao");
      const feita = tarefa.get("feita");
      listaTarefas.innerHTML += `<li>${tarefa.id} ${descricao} - ${feita} </li>`;
    }
  } catch (error) {
    console.error("Error while fetching Tarefa", error);
  }
};

const inserirTarefa = async () => {
  const descricao = inputDescricao.value.trim();
  if (!descricao) {
    alert("Favor inserir uma descrição!");
    return;
  }
  const tarefa = new Parse.Object("Tarefa");
  tarefa.set("descricao", descricao);
  try {
    const result = await tarefa.save();
    console.log("Tarefa created", result.id);
  } catch (error) {
    console.error("Error while creating Tarefa: ", error);
  }
  inputDescricao.value = "";
  inputDescricao.focus();
  lerTarefas();
};

lerTarefas();

btPesquisar.onclick = handleClickBtPesquisar;
btInserir.onclick = inserirTarefa;
btAlterar.onclick = handleClickBtAlterar;
btRemover.onclick = handleClickBtRemover;
