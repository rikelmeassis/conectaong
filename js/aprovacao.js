const botoesAprovar = document.querySelectorAll(".botao-aprovar");
const botoesRecusar = document.querySelectorAll(".botao-recusar");

for (let i = 0; i < botoesAprovar.length; i++) {
  botoesAprovar[i].addEventListener("click", function () {
    const linhaDaOng = botoesAprovar[i].closest(".linha");
    const selo = linhaDaOng.querySelector(".selo");

    selo.textContent = "Aprovada";
    selo.className = "selo selo-concluida";

    linhaDaOng.querySelector(".botao-recusar").remove();
    botoesAprovar[i].remove();
  });
}

for (let i = 0; i < botoesRecusar.length; i++) {
  botoesRecusar[i].addEventListener("click", function () {
    const confirmou = confirm("Deseja recusar o cadastro desta ONG?");

    if (confirmou) {
      botoesRecusar[i].closest(".linha").remove();
    }
  });
}
