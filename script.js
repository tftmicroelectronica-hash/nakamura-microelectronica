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
      if (window.innerWidth > 900) closeMenu();
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

  // Animaciones de entrada existentes en el sitio.
  const animated = document.querySelectorAll(
    ".service,.step-content,.gallery figure,.equipment-grid>div"
  );
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

  // Carrusel automático de fotografías para infraestructura técnica.
  const sliderImage = document.getElementById("equipmentSlideImage");
  const sliderTitle = document.getElementById("equipmentSlideTitle");
  const indicators = document.getElementById("equipmentIndicators");
  const slider = document.getElementById("equipmentSlider");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (sliderImage && sliderTitle && indicators && slider) {
    const slides = [
      {
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=90",
        title: "Estación de trabajo técnico"
      },
      {
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=90",
        title: "Área de microsoldadura"
      },
      {
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=90",
        title: "Banco de diagnóstico"
      },
      {
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=90",
        title: "Análisis de placas electrónicas"
      },
      {
        image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=1200&q=90",
        title: "Equipamiento electrónico especializado"
      }
    ];

    let currentSlide = 0;
    let sliderTimer = null;
    const indicatorButtons = [];

    slides.forEach((slide, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-label", `Mostrar imagen ${index + 1}: ${slide.title}`);
      if (index === 0) button.classList.add("active");
      button.addEventListener("click", () => {
        showSlide(index);
        restartSlider();
      });
      indicators.appendChild(button);
      indicatorButtons.push(button);
    });

    function showSlide(index) {
      currentSlide = index;
      const slide = slides[index];
      const preload = new Image();

      const applySlide = () => {
        sliderImage.classList.add("changing");
        sliderTitle.classList.add("changing");
        window.setTimeout(() => {
          sliderImage.src = slide.image;
          sliderImage.alt = slide.title;
          sliderTitle.textContent = slide.title;
          sliderImage.classList.remove("changing");
          sliderTitle.classList.remove("changing");
        }, reduceMotion ? 0 : 300);
      };

      preload.onload = applySlide;
      preload.onerror = () => {
        sliderImage.classList.remove("changing");
        sliderTitle.classList.remove("changing");
      };
      preload.src = slide.image;

      indicatorButtons.forEach((button, i) => {
        button.classList.toggle("active", i === index);
      });
    }

    function nextSlide() {
      showSlide((currentSlide + 1) % slides.length);
    }
    function startSlider() {
      if (reduceMotion || sliderTimer !== null) return;
      sliderTimer = window.setInterval(nextSlide, 5000);
    }
    function stopSlider() {
      window.clearInterval(sliderTimer);
      sliderTimer = null;
    }
    function restartSlider() {
      stopSlider();
      startSlider();
    }

    slider.addEventListener("mouseenter", stopSlider);
    slider.addEventListener("mouseleave", startSlider);
    slider.addEventListener("focusin", stopSlider);
    slider.addEventListener("focusout", startSlider);
    startSlider();
  }

  // Ticker cíclico: cuatro tarjetas visibles, nueve equipos en total.
  const equipmentTrack = document.getElementById("equipmentTrack");
  const equipmentTicker = document.getElementById("equipmentTicker");

  if (equipmentTrack && equipmentTicker) {
    const visibleCards = 4;
    const totalCards = equipmentTrack.querySelectorAll("article").length;
    let tickerTimer = null;
    let isAnimating = false;

    function moveTicker() {
      if (isAnimating || totalCards <= visibleCards) return;

      const firstCard = equipmentTrack.firstElementChild;
      const cardHeight = firstCard.getBoundingClientRect().height;
      const gap = parseFloat(getComputedStyle(equipmentTrack).rowGap) || 0;
      const distance = cardHeight + gap;

      isAnimating = true;
      equipmentTrack.style.transform = `translateY(-${distance}px)`;

      const finishAnimation = () => {
        equipmentTrack.appendChild(firstCard);
        equipmentTrack.style.transition = "none";
        equipmentTrack.style.transform = "translateY(0)";
        void equipmentTrack.offsetHeight;
        equipmentTrack.style.transition = "transform .72s cubic-bezier(.22,.61,.36,1)";
        isAnimating = false;
      };

      equipmentTrack.addEventListener("transitionend", function onEnd(event) {
        if (event.propertyName !== "transform") return;
        equipmentTrack.removeEventListener("transitionend", onEnd);
        finishAnimation();
      });
    }

    function startTicker() {
      if (reduceMotion || tickerTimer !== null) return;
      tickerTimer = window.setInterval(moveTicker, 2600);
    }
    function stopTicker() {
      window.clearInterval(tickerTimer);
      tickerTimer = null;
    }

    equipmentTicker.addEventListener("mouseenter", stopTicker);
    equipmentTicker.addEventListener("mouseleave", startTicker);
    equipmentTicker.addEventListener("focusin", stopTicker);
    equipmentTicker.addEventListener("focusout", startTicker);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stopTicker();
      else startTicker();
    });

    startTicker();
  }
});
