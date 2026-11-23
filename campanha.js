const formularioCampanha = document.getElementById("formulario-campanha");

formularioCampanha.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const novaCampanha = {
    titulo: document.getElementById("titulo").value.trim(),
    descricao: document.getElementById("descricao").value.trim(),
    dt_criacao: document.getElementById("dt-criacao").value,
    dt_limite: document.getElementById("dt-limite").value,
    status: "Aberto"
  };

  const campanhas = JSON.parse(localStorage.getItem("campanhas")) || [];
  campanhas.push(novaCampanha);
  localStorage.setItem("campanhas", JSON.stringify(campanhas));

  alert("Campanha salva com sucesso!");
  window.location.href = "ong-painel.html";
});
