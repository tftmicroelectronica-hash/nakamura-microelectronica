/* NAKAMURA MICROELECTRÓNICA | Interactividad */
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  const closeMenu = () => {
    if (!menuToggle || !navLinks) return;
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
  };

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const opened = navLinks.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", String(opened));
      menuToggle.setAttribute("aria-label", opened ? "Cerrar menú" : "Abrir menú");
    });
    navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("click", event => {
      if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) closeMenu();
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const equipment = document.getElementById("equipment").value;
      const model = document.getElementById("model").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !equipment || !message) {
        if (feedback) feedback.textContent = "Completa los campos obligatorios para continuar.";
        return;
      }

      const text = [
        "¡Hola, NAKAMURA MICROELECTRÓNICA!", "",
        "Deseo solicitar una revisión técnica.", "",
        "DATOS DEL CLIENTE", `Nombre: ${name}`,
        `Teléfono: ${phone || "No especificado"}`, "",
        "DATOS DEL EQUIPO", `Tipo de equipo: ${equipment}`,
        `Marca / modelo: ${model || "No especificado"}`, "",
        "DESCRIPCIÓN DE LA FALLA", message, "",
        "Quedo atento/a a su respuesta. Gracias."
      ].join("\n");

      const url = `https://wa.me/593988566090?text=${encodeURIComponent(text)}`;
      if (feedback) feedback.textContent = "Abriendo WhatsApp con los datos de tu solicitud…";
      const popup = window.open(url, "_blank", "noopener,noreferrer");
      if (!popup) window.location.href = url;
    });
  }

  const animated = document.querySelectorAll(".service,.step-content,.gallery figure,.equipment-grid>div,.equipment-list article");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    animated.forEach(element => {
      element.classList.add("reveal");
      observer.observe(element);
    });
  }
});
