const usuarios = [
  { usuario: "doador", senha: "doa#2026", pagina: "doador-inicio.html" },
  { usuario: "entidade", senha: "ent!2026", pagina: "ong-painel.html" },
  { usuario: "admin", senha: "adm@2026", pagina: "admin-painel.html" }
];

const formularioLogin = document.getElementById("formulario-login");

formularioLogin.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const usuarioDigitado = document.getElementById("usuario").value.trim();
  const senhaDigitada = document.getElementById("senha").value;

  let usuarioEncontrado = null;

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].usuario === usuarioDigitado && usuarios[i].senha === senhaDigitada) {
      usuarioEncontrado = usuarios[i];
    }
  }

  if (usuarioEncontrado !== null) {
    localStorage.setItem("perfil", usuarioEncontrado.usuario);
    window.location.href = usuarioEncontrado.pagina;
  } else {
    document.getElementById("erro-login").style.display = "block";
  }
});
