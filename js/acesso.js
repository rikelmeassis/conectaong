const perfilDaPagina = document.body.dataset.perfil;
const perfilLogado = localStorage.getItem("perfil");

if (perfilLogado !== perfilDaPagina) {
  window.location.href = "login.html";
}

const linkSair = document.getElementById("sair");

linkSair.addEventListener("click", function (evento) {
  evento.preventDefault();
  localStorage.removeItem("perfil");
  window.location.href = "index.html";
});
