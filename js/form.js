const campos = document.querySelectorAll(".campoDoFormulario");
const spans = document.querySelectorAll('.span-erro')
const botaoEnviar = document.querySelector("#btnEnviar");
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

botaoEnviar.addEventListener('click', function() {
   preventDefault()
   campos.forEach(function (input) {
      if (input.value == "") {
         input.classList.add("campo-vazio");
      } else if (input.value !== "") {
         input.classList.remove("campo-vazio");
         input.classList.add("campo-preenchido");
      }
   });
});
