const campos = document.querySelectorAll(".campoDoFormulario");
const span = document.querySelectorAll(".span")
const botaoEnviar = document.querySelector("#btnEnviar");

campos.forEach((input) => {
   botaoEnviar.addEventListener('click', (event) => {
      event.preventDefault()
      if (input.value == "") {
         input.classList.add("campo-vazio");
         span[index].style.display = 'block'

      } else if (input.value !== "") {
         input.classList.remove("campo-vazio");
         input.classList.add("campo-preenchido");
         span[index].style.display = 'none'
      }
   });
});

