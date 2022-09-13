const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const diasDaSemana = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
];

const h5Data = document.getElementById("h5Data");
const inputDia = document.getElementById("inputDia");
const inputMes = document.getElementById("inputMes");
const inputAno = document.getElementById("inputAno");
const inputDiaDaSemana = document.getElementById("inputDiaDaSemana");

const data = new Date();

h5Data.innerHTML = data.toString();
inputDia.value = data.getDate();
inputMes.value = meses[data.getMonth()];
inputAno.value = data.getFullYear();
inputDiaDaSemana.value = diasDaSemana[data.getDay()];
