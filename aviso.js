const formulariosComAviso = document.querySelectorAll(".form-aviso");

for (let i = 0; i < formulariosComAviso.length; i++) {
  formulariosComAviso[i].addEventListener("submit", function (evento) {
    evento.preventDefault();
    alert(formulariosComAviso[i].dataset.mensagem);
  });
}
