/*
 * Integración del carrusel Cummins Onan P9500dfi
 * Inserta este bloque dentro de section04.js, reemplazando el render de
 * item.gallery (la cuadrícula anterior) por renderCumminsCarousel(item).
 *
 * Los datos del caso deben incluir:
 * carousel: [
 *  {src:"./assets/generadores/cummins-01.webp",alt:"Vista general y panel de control del generador Cummins Onan P9500dfi",caption:"Vista general y panel de control"},
 *  {src:"./assets/generadores/cummins-02.webp",alt:"Detalle del depósito de combustible del generador Cummins Onan P9500dfi",caption:"Depósito de combustible"},
 *  {src:"./assets/generadores/cummins-03.webp",alt:"Detalle de los componentes inferiores del generador Cummins Onan P9500dfi",caption:"Componentes inferiores"},
 *  {src:"./assets/generadores/cummins-04.webp",alt:"Inspección del conjunto de válvulas del generador Cummins Onan P9500dfi",caption:"Conjunto de válvulas"}
 * ]
 */

function renderCumminsCarousel(item) {
  const slides = item.carousel.map((photo, index) => `
    <div class="cummins-slide${index === 0 ? " is-active" : ""}"
         aria-hidden="${index === 0 ? "false" : "true"}">
      <img src="${photo.src}" alt="${photo.alt}" loading="${index === 0 ? "eager" : "lazy"}"
           width="1600" height="1200">
      <span class="cummins-slide-caption">${photo.caption}</span>
    </div>`).join("");

  const dots = item.carousel.map((photo, index) => `
    <button class="cummins-dot${index === 0 ? " is-active" : ""}" type="button"
      aria-label="Ver fotografía ${index + 1}" aria-current="${index === 0 ? "true" : "false"}"
      data-cummins-slide="${index}"></button>`).join("");

  return `<div class="cummins-carousel" data-cummins-carousel tabindex="0"
       aria-label="Galería del generador Cummins Onan P9500dfi">
    <div class="cummins-viewport">${slides}</div>
    <button class="cummins-arrow cummins-prev" type="button" aria-label="Fotografía anterior">‹</button>
    <button class="cummins-arrow cummins-next" type="button" aria-label="Fotografía siguiente">›</button>
    <div class="cummins-controls" aria-label="Seleccionar fotografía">${dots}</div>
  </div>`;
}

/* Llama esta función después de insertar los artículos en el DOM. */
function initCumminsCarousels(root = document) {
  root.querySelectorAll("[data-cummins-carousel]:not([data-ready])").forEach(carousel => {
    carousel.dataset.ready = "true";
    const slides = [...carousel.querySelectorAll(".cummins-slide")];
    const dots = [...carousel.querySelectorAll(".cummins-dot")];
    const prev = carousel.querySelector(".cummins-prev");
    const next = carousel.querySelector(".cummins-next");
    if (slides.length < 2) return;

    let active = 0, timer = null, resumeTimer = null, startX = 0;
    const show = index => {
      active = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        slide.classList.toggle("is-active", i === active);
        slide.setAttribute("aria-hidden", i === active ? "false" : "true");
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle("is-active", i === active);
        dot.setAttribute("aria-current", i === active ? "true" : "false");
      });
    };
    const stop = () => { if (timer) clearInterval(timer); timer = null; };
    const start = () => { stop(); timer = setInterval(() => show(active + 1), 4500); };
    const pauseAfterInteraction = () => {
      stop();
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(start, 9000);
    };

    prev.addEventListener("click", () => { show(active - 1); pauseAfterInteraction(); });
    next.addEventListener("click", () => { show(active + 1); pauseAfterInteraction(); });
    dots.forEach((dot, i) => dot.addEventListener("click", () => { show(i); pauseAfterInteraction(); }));
    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);
    carousel.addEventListener("focusin", stop);
    carousel.addEventListener("focusout", start);
    carousel.addEventListener("touchstart", event => { startX = event.changedTouches[0].clientX; stop(); }, {passive:true});
    carousel.addEventListener("touchend", event => {
      const delta = event.changedTouches[0].clientX - startX;
      if (Math.abs(delta) > 45) show(active + (delta < 0 ? 1 : -1));
      pauseAfterInteraction();
    }, {passive:true});
    carousel.addEventListener("keydown", event => {
      if (event.key === "ArrowLeft") { show(active - 1); pauseAfterInteraction(); }
      if (event.key === "ArrowRight") { show(active + 1); pauseAfterInteraction(); }
    });
    start();
  });
}
