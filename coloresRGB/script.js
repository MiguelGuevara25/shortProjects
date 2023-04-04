let btnColor = document.querySelector(".btnColor");

function otro() {
  const firstColor = Math.ceil(Math.random() * 255);
  const secondColor = Math.ceil(Math.random() * 255);
  const thirdColor = Math.ceil(Math.random() * 255);
  const title = document.querySelector(".titleColor");
  const body = document.querySelector("#body");
  const rgb = `rgb(${firstColor}, ${secondColor}, ${thirdColor})`;

  body.style.backgroundColor = `${rgb}`;
  title.innerHTML = `El color es ${rgb}`;
}

btnColor.addEventListener("click", otro);
