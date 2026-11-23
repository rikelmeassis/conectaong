let necessidades = JSON.parse(localStorage.getItem("necessidades"));

if (necessidades === null) {
  necessidades = [
    { id: 1, item: "Alimentos", categoria: "Alimentação", quantidade: 50, unidade: "kg", urgencia: "alta" },
    { id: 2, item: "Roupas", categoria: "Vestuário", quantidade: 100, unidade: "peças", urgencia: "media" },
    { id: 3, item: "Brinquedos", categoria: "Infantil", quantidade: 30, unidade: "unidades", urgencia: "baixa" }
  ];
  salvarNecessidades();
}

const nomesUrgencia = { alta: "Urgência alta", media: "Urgência média", baixa: "Urgência baixa" };

const lista = document.getElementById("lista-necessidades");
const formulario = document.getElementById("formulario-necessidade");
const tituloFormulario = document.getElementById("titulo-formulario");

let idEmEdicao = null;

function salvarNecessidades() {
  localStorage.setItem("necessidades", JSON.stringify(necessidades));
}

function mostrarNecessidades() {
  lista.innerHTML = "";

  if (necessidades.length === 0) {
    lista.innerHTML = '<p class="texto-apoio">Nenhuma necessidade publicada ainda.</p>';
    return;
  }

  for (let i = 0; i < necessidades.length; i++) {
    const n = necessidades[i];

    lista.innerHTML += `
      <article class="linha">
        <div class="linha-info">
          <h3>${n.item}</h3>
          <p>Categoria: ${n.categoria} · Quantidade estimada: ${n.quantidade} ${n.unidade}</p>
        </div>
        <div class="linha-acoes">
          <span class="selo selo-${n.urgencia}">${nomesUrgencia[n.urgencia]}</span>
          <button type="button" class="botao botao-secundario botao-pequeno" onclick="editarNecessidade(${n.id})">Editar</button>
          <button type="button" class="botao botao-perigo botao-pequeno" onclick="removerNecessidade(${n.id})">Remover</button>
        </div>
      </article>
    `;
  }
}

function abrirFormulario(titulo) {
  tituloFormulario.textContent = titulo;
  formulario.style.display = "block";
  formulario.scrollIntoView({ behavior: "smooth" });
}

function fecharFormulario() {
  formulario.reset();
  formulario.style.display = "none";
  idEmEdicao = null;
}

function editarNecessidade(id) {
  for (let i = 0; i < necessidades.length; i++) {
    if (necessidades[i].id === id) {
      document.getElementById("item").value = necessidades[i].item;
      document.getElementById("categoria").value = necessidades[i].categoria;
      document.getElementById("quantidade").value = necessidades[i].quantidade;
      document.getElementById("unidade").value = necessidades[i].unidade;
      document.getElementById("urgencia").value = necessidades[i].urgencia;
    }
  }

  idEmEdicao = id;
  abrirFormulario("Editar necessidade");
}

function removerNecessidade(id) {
  const confirmou = confirm("Deseja mesmo remover esta necessidade?");

  if (confirmou) {
    const novaLista = [];

    for (let i = 0; i < necessidades.length; i++) {
      if (necessidades[i].id !== id) {
        novaLista.push(necessidades[i]);
      }
    }

    necessidades = novaLista;
    salvarNecessidades();
    mostrarNecessidades();
  }
}

document.getElementById("botao-adicionar").addEventListener("click", function () {
  fecharFormulario();
  abrirFormulario("Nova necessidade");
});

document.getElementById("botao-cancelar").addEventListener("click", function () {
  fecharFormulario();
});

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const necessidade = {
    id: idEmEdicao,
    item: document.getElementById("item").value.trim(),
    categoria: document.getElementById("categoria").value,
    quantidade: Number(document.getElementById("quantidade").value),
    unidade: document.getElementById("unidade").value.trim(),
    urgencia: document.getElementById("urgencia").value
  };

  if (idEmEdicao === null) {
    necessidade.id = Date.now();
    necessidades.push(necessidade);
  } else {
    for (let i = 0; i < necessidades.length; i++) {
      if (necessidades[i].id === idEmEdicao) {
        necessidades[i] = necessidade;
      }
    }
  }

  salvarNecessidades();
  mostrarNecessidades();
  fecharFormulario();
});

mostrarNecessidades();
