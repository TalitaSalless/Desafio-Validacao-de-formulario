const campos = document.querySelectorAll(".campoDoFormulario");
const spans = document.querySelectorAll('.span-erro')
const botaoEnviar = document.querySelector("#btnEnviar");
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

botaoEnviar.addEventListener('click', function() {
   campos.forEach(function (input, index) {
      if (input.value == "") {
         input.classList.add("campo-vazio");
         spans[index].style.display = 'block'
         
      } else if (input.value !== "") {
         spans[index].style.display = 'none'
         input.classList.remove("campo-vazio");
         input.classList.add("campo-preenchido");
      }
   });
});
