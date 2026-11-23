const doacaoSalva = JSON.parse(localStorage.getItem("ultimaDoacao"));

if (doacaoSalva !== null) {
  document.getElementById("data-registro").textContent = doacaoSalva.dt_doacao;

  if (doacaoSalva.observacao !== "") {
    document.getElementById("observacao-registro").textContent = doacaoSalva.observacao;
  } else {
    document.getElementById("observacao-registro").textContent = "Nenhuma";
  }
} else {
  document.getElementById("data-registro").textContent = new Date().toLocaleDateString("pt-BR");
  document.getElementById("observacao-registro").textContent = "Nenhuma";
}
