const formularioDoacao = document.getElementById("formulario-doacao");

formularioDoacao.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const doacao = {
    dt_doacao: new Date().toLocaleDateString("pt-BR"),
    status: "Pendente de entrega",
    modalidade: "Entrega no ponto de coleta",
    observacao: document.getElementById("observacao").value.trim()
  };

  localStorage.setItem("ultimaDoacao", JSON.stringify(doacao));
  window.location.href = "doador-registrada.html";
});
