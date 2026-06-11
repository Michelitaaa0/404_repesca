const contenedor = document.getElementById("estrellas");

function crearEstrellas() {
  for (let i = 0; i < 120; i++) {
    const estrella = document.createElement("div");
    estrella.classList.add("estrella");

    const tamanio = Math.random() * 2 + 1;
    estrella.style.width = tamanio + "px";
    estrella.style.height = tamanio + "px";
    estrella.style.top = Math.random() * 100 + "%";
    estrella.style.left = Math.random() * 100 + "%";
    estrella.style.animationDelay = Math.random() * 3 + "s";

    contenedor.appendChild(estrella);
  }
}
const btnVolver = document.getElementById("btnVolver");

btnVolver.addEventListener("click", () => {
  window.location.href = "index.html";
});

window.addEventListener("load", () => {
  crearEstrellas();
});