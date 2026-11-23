const formularioOng = document.getElementById("formulario-ong");

formularioOng.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const novaOrganizacao = {
    razao_social: document.getElementById("razao-social").value.trim(),
    tipo: document.getElementById("tipo-org").value,
    cnpj: document.getElementById("cnpj").value.trim(),
    endereco: document.getElementById("endereco").value.trim(),
    telefone: document.getElementById("telefone").value.trim(),
    email: document.getElementById("email").value.trim(),
    descricao: document.getElementById("descricao").value.trim(),
    verificada: false
  };

  const organizacoes = JSON.parse(localStorage.getItem("organizacoes")) || [];
  organizacoes.push(novaOrganizacao);
  localStorage.setItem("organizacoes", JSON.stringify(organizacoes));

  alert("Cadastro enviado! Seu perfil será publicado após a aprovação do administrador.");
  window.location.href = "index.html";
});
