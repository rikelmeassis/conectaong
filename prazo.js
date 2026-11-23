const campoPrazo = document.getElementById("prazo-dias");

const hoje = new Date();
const dataLimite = new Date(campoPrazo.dataset.limite + "T23:59:59");

const umDia = 1000 * 60 * 60 * 24;
const diasRestantes = Math.ceil((dataLimite - hoje) / umDia);

if (diasRestantes > 0) {
  campoPrazo.textContent = diasRestantes;
} else {
  campoPrazo.textContent = "0";
}
