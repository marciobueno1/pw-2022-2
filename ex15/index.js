const axiosInstance = axios.create({
  baseURL: "https://parseapi.back4app.com/classes/",
  headers: {
    "X-Parse-Application-Id": "rqIwwZbTJx3mEAMKuWvW0c8N8S2wqkJBGkylLc8Y",
    "X-Parse-REST-API-Key": "MFRNld05M6dorJqc4GxhJuBE4CkH6nkhFs2XTBPJ",
  },
});

Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  "rqIwwZbTJx3mEAMKuWvW0c8N8S2wqkJBGkylLc8Y", // This is your Application ID
  "LjXm2McfuCLy8lGGI85Lywm1j9bZ8hnIEBeyldTZ" // This is your Javascript key
);
const Paisagem = Parse.Object.extend("Paisagem");

const h3Descricao = document.getElementById("h3Descricao");
const inputDescricao = document.getElementById("inputDescricao");
const btInserir = document.getElementById("btInserir");
const divPaisagens = document.getElementById("divPaisagens");
const inputImagem = document.getElementById("inputImagem");

const lerPaisagensAxios = async () => {
  try {
    const response = await axiosInstance.get("Paisagem");
    gerarLista(response.data.results);
  } catch (error) {
    console.error(error);
  }
};

const inserirPaisagemAxios = async () => {
  const descricao = inputDescricao.value.trim();
  if (!descricao) {
    alert("Favor inserir uma descrição!");
    return;
  }
  if (inputImagem.files.length === 0) {
    alert("Favor selecionar uma imagem!");
    return;
  }
  const imagem = inputImagem.files[0];
  // console.log("imagem", imagem);
  // console.log("imagem", imagem.type);
  // console.log("imagem", imagem.stream());
  // console.log("imagem", imagem.name);
  // console.log("imagem", imagem.webkitRelativePath);
  // imagem.arrayBuffer().then((data) => {
  //   console.log("data", data);
  // });
  try {
    const response = await axiosInstance.post(
      "Paisagem",
      {
        descricao: descricao,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response", response);
  } catch (error) {
    console.error(error);
  }
};

const lerPaisagens = async () => {
  const query = new Parse.Query(Paisagem);
  try {
    const results = await query.find();
    gerarLista(results);
  } catch (error) {
    console.error("Error while fetching Paisagem", error);
  }
};

const gerarLista = (paisagens) => {
  divPaisagens.innerHTML = "";
  for (const paisagem of paisagens) {
    const textNodeDescricao = document.createTextNode(paisagem.descricao);
    const brElement = document.createElement("br");
    const imgElement = document.createElement("img");
    imgElement.src = paisagem.imagem.url;
    const hrElement = document.createElement("hr");
    divPaisagens.appendChild(textNodeDescricao);
    divPaisagens.appendChild(brElement);
    divPaisagens.appendChild(imgElement);
    divPaisagens.appendChild(hrElement);
  }
};

const inserirPaisagem = async () => {
  const descricao = inputDescricao.value.trim();
  if (!descricao) {
    alert("Favor inserir uma descrição!");
    return;
  }
  if (inputImagem.files.length === 0) {
    alert("Favor selecionar uma imagem!");
    return;
  }
  const imagem = inputImagem.files[0];
  const paisagem = new Parse.Object("Paisagem");
  paisagem.set("descricao", descricao);
  paisagem.set("imagem", new Parse.File(imagem.name, imagem));

  try {
    const result = await paisagem.save();
    console.log("Paisagem created", result.id);
  } catch (error) {
    console.error("Error while creating Paisagem: ", error);
  }
  inputDescricao.value = "";
  inputDescricao.focus();
  lerPaisagens();
};

lerPaisagensAxios();
btInserir.onclick = inserirPaisagemAxios;
