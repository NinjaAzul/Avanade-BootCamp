
const bottonClicked = () => {
  document.getElementById("agradecimento")
    .innerHTML = "<b>Obrigado por clicar</b>";
}

const redirect = () => {
  window.open("https://www.linkedin.com/in/erick-freitas-048064134/")
}

const toExchange = (element) => {
  element.innerHTML = "WOOWWWW Você Passsou";
}

const toGoBack = (element) => {
  element.innerHTML = "";
}

const load = () => {
  alert("pagna carregada");
}

const change = (element) => {
  const numero =  element.value;
  alert(`Você escolheu o ${numero}`);
}