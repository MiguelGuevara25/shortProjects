const enlaces = document.querySelectorAll(".enlaces");

enlaces.forEach((e, a) => {
  switch (a) {
    case 0:
      e.addEventListener("mouseover", () => {
        e.style.transform = "rotate(-20deg)";
      });
      break;

    case 1:
      e.addEventListener("mouseover", () => {
        e.style.transform = "rotate(20deg)";
      });
      break;

    case 2:
      e.addEventListener("mouseover", () => {
        e.style.transform = "rotate(180deg)";
      });
      break;

    default:
      break;
  }

  e.addEventListener("mouseout", () => {
    e.style.transform = "rotate(0deg)";
  });
});