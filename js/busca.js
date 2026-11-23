const formularioBusca = document.getElementById("formulario-busca");

formularioBusca.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const textoBuscado = document.getElementById("busca-texto").value.trim().toLowerCase();
  const categoriaEscolhida = document.getElementById("busca-categoria").value;
  const cards = document.querySelectorAll(".card-ong");

  let encontrados = 0;

  for (let i = 0; i < cards.length; i++) {
    const textoDoCard = cards[i].textContent.toLowerCase();
    const combinaTexto = textoDoCard.includes(textoBuscado);
    const combinaCategoria = categoriaEscolhida === "todas" || cards[i].dataset.categoria === categoriaEscolhida;

    if (combinaTexto && combinaCategoria) {
      cards[i].style.display = "block";
      encontrados++;
    } else {
      cards[i].style.display = "none";
    }
  }

  const mensagem = document.getElementById("nenhum-resultado");

  if (encontrados === 0) {
    mensagem.style.display = "block";
  } else {
    mensagem.style.display = "none";
  }
});
