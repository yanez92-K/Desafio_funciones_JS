function defaultSquare(elementId, initialColor, clickColor) {
  const square = document.getElementById(elementId);
  square.style.backgroundColor = initialColor;
  square.style.width = "200px";
  square.style.height = "200px";
  square.style.marginBottom = "30px";

  square.addEventListener("click", () => {
    square.style.backgroundColor = clickColor;
  });
}
defaultSquare("square1", "blue", "black");
defaultSquare("square2", "red", "black");
defaultSquare("square3", "green", "black");
defaultSquare("square4", "yellow", "black");

const whiteSquare = document.getElementById("key");
function applyDefaultStyles() {
  whiteSquare.style.backgroundColor = "white";
  whiteSquare.style.border = "2px solid black";
  whiteSquare.style.height = "200px";
  whiteSquare.style.width = "200px";
}
applyDefaultStyles();

let currentColor;
const box = document.getElementById("key");

document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase(); // Convertir las teclas a minúsculas

  switch (key) {
    case "a":
      currentColor = "pink";
      break;
    case "s":
      currentColor = "orange";
      break;
    case "d":
      currentColor = "cyan";
      break;
    case "q":
      createColoredDiv("purple");
      break;
    case "w":
      createColoredDiv("gray");
      break;
    case "e":
      createColoredDiv("brown");
      break;
    default:
      break;
  }
  if (currentColor) {
    box.style.backgroundColor = currentColor;
  }
});

function createColoredDiv(color) {
  // Verificar si ya existe un div con el mismo color
  const existingDiv = document.querySelector(
    '.container [style="background-color: ' + color + '"]'
  );
  if (!existingDiv) {
    const newDiv = document.createElement("div");
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.backgroundColor = color;
    newDiv.style.border = "2px solid black";

    const texto = document.querySelector(".text");
    texto.parentNode.insertBefore(newDiv, texto.nextSibling);
  }
}

// Agregar evento para crear un nuevo cuadrado con las tecla
document.addEventListener("keydown", function (event) {
  let color;
  switch (event.key) {
    case "q":
      color = "purple";
      break;
    case "w":
      color = "gray";
      break;
    case "e":
      color = "brown";
      break;
    default:
      return;
  }

  const nuevoDiv = document.createElement("div");
  nuevoDiv.style.width = "200px";
  nuevoDiv.style.height = "200px";
  nuevoDiv.style.margin = "20px";
  nuevoDiv.style.marginLeft = "5px";
  nuevoDiv.style.backgroundColor = color;
  document.body.appendChild(nuevoDiv);
});
