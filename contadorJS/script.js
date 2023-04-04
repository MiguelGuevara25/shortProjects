let cont = 0;
const otro = document.querySelector("#contador");
const btnMas = document.querySelector("#btnMas");
const btnMenos = document.querySelector("#btnMenos");
const btnReiniciar = document.querySelector("#btnReiniciar");

btnMas.addEventListener("click", () => {
  otro.innerHTML = ++cont;
});

btnMenos.addEventListener("click", () => {
  otro.innerHTML = --cont;
});

btnReiniciar.addEventListener("click", () => {
  otro.innerHTML = cont = 0;
});
