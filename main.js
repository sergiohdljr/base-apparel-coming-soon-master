const input = document.querySelector(".input");
const botao = document.querySelector(".btn-input");
const email = document.querySelector(".input-value");
const form = document.querySelector(".formulario");

const erro = document.createElement("span");
erro.innerText = "Please provide a valid e-mail";

const errorIcon = document.createElement("img");
errorIcon.setAttribute("src", "./images/icon-error.svg");
errorIcon.classList.add("icon-error");

botao.addEventListener("click", (evento) => {
  evento.preventDefault();
  const email = document.querySelector(".input-value");
  const valorInput = email.value;
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let validar = re.test(valorInput);

  if (validar == true) {
    email.value = "";
    input.classList.remove("input-erro");
    form.removeChild(erro);
    input.removeChild(errorIcon)

  } else {
    Invalido();
  }
});

function Invalido() {
  erro.classList.add("span-erro");
  input.classList.add("input-erro");
  form.appendChild(erro);
  input.insertBefore(errorIcon, input.children[1]);
}
