const formularioCadastro = document.getElementById("formulario-cadastro");

formularioCadastro.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const tipo = document.getElementById("tipo").value;

  if (tipo === "ong") {
    window.location.href = "cadastro-ong.html";
    return;
  }

  const novoDoador = {
    nome: document.getElementById("nome").value.trim(),
    email: document.getElementById("email").value.trim(),
    dt_cadastro: new Date().toLocaleDateString("pt-BR")
  };

  const doadores = JSON.parse(localStorage.getItem("doadores")) || [];
  doadores.push(novoDoador);
  localStorage.setItem("doadores", JSON.stringify(doadores));

  alert("Cadastro realizado com sucesso! Agora é só entrar.");
  window.location.href = "login.html";
});
