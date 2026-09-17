// Menú móvil: alterna la visibilidad de los enlaces de navegación
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Evita que el formulario recargue la página; esta propuesta es solo de front end
const searchForm = document.getElementById("buscar");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
