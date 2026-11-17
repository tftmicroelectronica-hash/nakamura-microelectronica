/* NAKAMURA - carrusel de fotos y ticker de herramientas.
   Pega este bloque dentro del DOMContentLoaded existente,
   antes de su cierre final }); */

  // Carrusel fotográfico de la sección 03
  const sliderImage = document.getElementById("equipmentSlideImage");
  const sliderTitle = document.getElementById("equipmentSlideTitle");
  const indicators = document.getElementById("equipmentIndicators");

  if (sliderImage && sliderTitle && indicators) {
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
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
    });

    const indicatorButtons = Array.from(indicators.querySelectorAll("button"));

    function showSlide(index) {
      currentSlide = index;
      const slide = slides[index];
      const preload = new Image();

      preload.onload = () => {
        sliderImage.classList.add("changing");
        sliderTitle.classList.add("changing");

        window.setTimeout(() => {
          sliderImage.src = slide.image;
          sliderImage.alt = slide.title;
          sliderTitle.textContent = slide.title;
          sliderImage.classList.remove("changing");
          sliderTitle.classList.remove("changing");
        }, reducedMotion ? 0 : 350);
      };

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
      if (reducedMotion || sliderTimer) return;
      sliderTimer = window.setInterval(nextSlide, 5500);
    }

    function stopSlider() {
      window.clearInterval(sliderTimer);
      sliderTimer = null;
    }

    function restartSlider() {
      stopSlider();
      startSlider();
    }

    const slider = document.getElementById("equipmentSlider");
    slider.addEventListener("mouseenter", stopSlider);
    slider.addEventListener("mouseleave", startSlider);
    startSlider();
  }

  // Marquesina vertical: cuatro tarjetas visibles y rotación de las nueve.
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
        equipmentTrack.removeEventListener("transitionend", finishAnimation);
        equipmentTrack.appendChild(firstCard);
        equipmentTrack.style.transition = "none";
        equipmentTrack.style.transform = "translateY(0)";
        void equipmentTrack.offsetHeight;
        equipmentTrack.style.transition = "transform .75s cubic-bezier(.22,.61,.36,1)";
        isAnimating = false;
      };

      equipmentTrack.addEventListener("transitionend", finishAnimation, { once: true });
    }

    function startTicker() {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || tickerTimer) return;
      tickerTimer = window.setInterval(moveTicker, 2800);
    }

    function stopTicker() {
      window.clearInterval(tickerTimer);
      tickerTimer = null;
    }

    equipmentTicker.addEventListener("mouseenter", stopTicker);
    equipmentTicker.addEventListener("mouseleave", startTicker);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stopTicker();
      else startTicker();
    });

    startTicker();
  }
