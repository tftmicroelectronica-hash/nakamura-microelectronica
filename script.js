const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const name = document.getElementById("name").value.trim();
  const equipment = document.getElementById("equipment").value.trim();
  const message = document.getElementById("message").value.trim();

  const text = [
    "Hola, NAKAMURA Microelectrónica. Deseo solicitar una revisión.",
    `Nombre: ${name}`,
    `Equipo / modelo: ${equipment}`,
    `Falla: ${message}`
  ].join("\n");

  const whatsappUrl = `https://wa.me/593988566090?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
