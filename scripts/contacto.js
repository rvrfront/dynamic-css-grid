const miFormulario = document.querySelector(".container__form");
const miBoton = document.querySelector(".miBoton");

function notDisabledButton() {
  const flag =
    miFormulario.nombre.value.length > 0 &&
    miFormulario.mensaje.value.length > 0;
  if (!flag) {
    miBoton.style.backgroundColor = "red";
    miBoton.disabled = true;
  } else {
    miBoton.style.backgroundColor = "green";
    miBoton.disabled = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("hola desde contacto!");
  notDisabledButton();
});

miFormulario.addEventListener("change", () => {
  notDisabledButton();
});

miFormulario.addEventListener("click", () => {
  notDisabledButton();
});

miFormulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted!");
  console.log("nombre: ", miFormulario.nombre.value);
  console.log("mensaje: ", miFormulario.mensaje.value);
});
