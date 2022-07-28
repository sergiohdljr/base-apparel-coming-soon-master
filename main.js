const botao = document.querySelector('.btn-input');
const body = document.querySelector("body");

botao.addEventListener('click',(evento)=>{
    evento.preventDefault();
    const email = document.querySelector('.input-value')
    const valorInput = email.value;
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
      let validar = re.test(valorInput)

      if (validar == true){
        const email = document.querySelector(".input-value");
        email.value = "";
      }else{
        Invalido();
        }
      })

     function Invalido(){
        const erro = document.createElement('span')
        erro.innerText = "Please provide a valid e-mail"
        erro.classList.add("span-erro")

        const input = document.querySelector(".input");
        input.classList.add("input-erro");
 
        const email = document.querySelector(".input-value");

        const errorIcon = document.createElement('img');
        errorIcon.setAttribute("src","./images/icon-error.svg")
        errorIcon.classList.add("icon-error");

        const textos = document.querySelector('.textos')

        const form = document.querySelector(".formulario")
        
        form.appendChild(erro);

        input.insertBefore(errorIcon, input.children[1]);

        email.value = " "
     }