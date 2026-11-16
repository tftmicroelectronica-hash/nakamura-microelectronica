
/* =========================================
   NAKAMURA MICROELECTRÓNICA
   Funciones e interactividad del sitio web
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // 1. MENÚ RESPONSIVE
    // =====================================

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navLinks.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", String(isOpen));

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Cerrar menú" : "Abrir menú"
            );

        });

        // Cerrar el menú al seleccionar una sección

        const menuItems = navLinks.querySelectorAll("a");

        menuItems.forEach(function (item) {

            item.addEventListener("click", function () {

                navLinks.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.setAttribute("aria-label", "Abrir menú");

            });

        });

        // Cerrar el menú al pulsar fuera de él

        document.addEventListener("click", function (event) {

            const clickedInsideMenu = navLinks.contains(event.target);
            const clickedToggle = menuToggle.contains(event.target);

            if (!clickedInsideMenu && !clickedToggle) {

                navLinks.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.setAttribute("aria-label", "Abrir menú");

            }

        });

    }


    // =====================================
    // 2. AÑO AUTOMÁTICO DEL FOOTER
    // =====================================

    const yearElement = document.getElementById("year");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }


    // =====================================
    // 3. FORMULARIO DE SOLICITUD DE REVISIÓN
    // =====================================

    const contactForm = document.getElementById("contactForm");

    const feedback = document.getElementById("formFeedback");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            // Obtener los datos del formulario

            const name = document.getElementById("name").value.trim();

            const phone = document.getElementById("phone").value.trim();

            const equipment = document.getElementById("equipment").value;

            const model = document.getElementById("model").value.trim();

            const message = document.getElementById("message").value.trim();


            // Verificar campos obligatorios

            if (!name || !equipment || !message) {

                if (feedback) {

                    feedback.textContent =
                        "Por favor, completa los campos obligatorios.";

                }

                return;

            }


            // Número oficial de WhatsApp de NAKAMURA
            // Código de Ecuador: 593

            const whatsappNumber = "593988566090";


            // Crear mensaje para WhatsApp

            const whatsappMessage =

                "¡Hola, NAKAMURA Microelectrónica!\n\n" +

                "Deseo solicitar una revisión técnica.\n\n" +

                "DATOS DEL CLIENTE\n" +

                "Nombre: " + name + "\n" +

                "Teléfono: " + (phone || "No especificado") + "\n\n" +

                "DATOS DEL EQUIPO\n" +

                "Tipo de equipo: " + equipment + "\n" +

                "Marca / modelo: " + (model || "No especificado") + "\n\n" +

                "DESCRIPCIÓN DE LA FALLA\n" +

                message + "\n\n" +

                "Quedo atento/a a su respuesta. Gracias.";


            // Codificar el mensaje para la URL

            const encodedMessage = encodeURIComponent(whatsappMessage);


            // Crear enlace de WhatsApp

            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodedMessage;


            // Mostrar confirmación

            if (feedback) {

                feedback.textContent =
                    "Abriendo WhatsApp para enviar tu solicitud...";

            }


            // Abrir WhatsApp en una nueva pestaña

            const whatsappWindow = window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );


            // Si el navegador bloquea la ventana emergente,
            // ofrecer el enlace directo.

            if (!whatsappWindow) {

                window.location.href = whatsappURL;

            }

        });

    }


    // =====================================
    // 4. NAVEGACIÓN SUAVE
    // =====================================

    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetID = link.getAttribute("href");

            if (!targetID || targetID === "#") {
                return;
            }

            const targetElement = document.querySelector(targetID);

            if (targetElement) {

                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                // Actualizar la dirección de la página
                // sin provocar un salto brusco.

                history.replaceState(null, "", targetID);

            }

        });

    });


    // =====================================
    // 5. ANIMACIÓN DE ELEMENTOS AL APARECER
    // =====================================

    const animatedElements = document.querySelectorAll(
        ".service, .step-content, .gallery figure, .equipment-grid > div"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(

            function (entries, currentObserver) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        currentObserver.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12
            }

        );

        animatedElements.forEach(function (element) {

            element.classList.add("reveal");

            observer.observe(element);

        });

    }


    // =====================================
    // 6. PROTECCIÓN BÁSICA DEL FORMULARIO
    // =====================================

    const phoneInput = document.getElementById("phone");

    if (phoneInput) {

        phoneInput.addEventListener("input", function () {

            // Limitar la longitud del teléfono

            if (phoneInput.value.length > 20) {

                phoneInput.value = phoneInput.value.slice(0, 20);

            }

        });

    }

});

