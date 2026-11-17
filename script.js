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

  // Un solo catálogo sincroniza imagen, título, descripción y ticker.
  const items = [
    ["Bonding machine","Equipo de unión y trabajo de precisión sobre placas y componentes.","01-bonding-machine.jpg","Máquina bonding de precisión"],
    ["Compresor de aire","Suministro de aire comprimido para tareas y herramientas del taller.","02-compresor-aire.jpg","Compresor de aire con tanque y motor"],
    ["Estación de soldadura","Estación de soldadura electrónica con control de temperatura y cautín.","03-estacion-soldadura.jpg","Estación de soldadura electrónica"],
    ["Estereoscopio trinocular","Microscopio trinocular para inspección ampliada de placas y componentes.","04-estereoscopio-trinocular.jpg","Estereoscopio trinocular"],
    ["Programador RT809H","Programador universal para lectura y escritura de memorias y circuitos compatibles.","05-programador-rt809h.jpg","Programador universal tipo RT809H"],
    ["Fuente de poder dual 30V","Fuente de alimentación regulable de doble canal para pruebas electrónicas.","06-fuente-dual-30v.jpg","Fuente de poder dual de 30 voltios"],
    ["Osciloscopio","Instrumento para visualizar y analizar señales eléctricas.","07-osciloscopio.jpg","Osciloscopio digital con señal"],
    ["Multímetro análogo","Instrumento de aguja para comprobaciones y mediciones eléctricas.","08-multimetro-analogo.jpg","Multímetro análogo con puntas de prueba"],
    ["Transistor tester","Probador electrónico para verificar transistores y componentes.","09-transistor-tester.jpg","Probador de transistores"]
  ];
  const img = document.getElementById("equipmentSlideImage");
  const title = document.getElementById("equipmentSlideTitle");
  const desc = document.getElementById("equipmentSlideDescription");
  const dotsBox = document.getElementById("equipmentIndicators");
  const track = document.getElementById("equipmentTrack");
  const ticker = document.getElementById("equipmentTicker");
  const prev = document.getElementById("equipmentPrev");
  const next = document.getElementById("equipmentNext");

  if (img && title && desc && dotsBox && track && ticker) {
    let current = 0, timer = null, moving = false;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cards = [], dots = [];

    items.forEach((item, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", "Mostrar " + item[0]);
      dot.addEventListener("click", () => select(i));
      dotsBox.appendChild(dot); dots.push(dot);

      const card = document.createElement("article");
      card.className = "equipment-item";
      const icon = document.createElement("span");
      icon.className = "rgb-icon " + ["red","green","blue"][i % 3];
      icon.setAttribute("aria-hidden","true");
      icon.textContent = ["⌁","⌕","⌁","▦","↻","ϟ","⌁","▤","▦"][i];
      const body = document.createElement("div");
      const h = document.createElement("h3"), p = document.createElement("p");
      h.textContent = item[0]; p.textContent = item[1];
      body.append(h,p); card.append(icon,body); card.dataset.index = i;
      track.appendChild(card); cards.push(card);
    });

    function render(i) {
      current = (i + items.length) % items.length;
      const item = items[current], path = "equipment-images/" + item[2];
      img.classList.add("is-changing"); title.classList.add("is-changing"); desc.classList.add("is-changing");
      const preload = new Image();
      preload.onload = () => setTimeout(() => {
        img.src = path; img.alt = item[3]; title.textContent = item[0]; desc.textContent = item[1];
        img.classList.remove("is-changing"); title.classList.remove("is-changing"); desc.classList.remove("is-changing");
      }, reduced ? 0 : 220);
      preload.onerror = () => { img.classList.remove("is-changing"); title.classList.remove("is-changing"); desc.classList.remove("is-changing"); };
      preload.src = path;
      dots.forEach((d,j) => { d.classList.toggle("active",j===current); d.setAttribute("aria-current",j===current?"true":"false"); });
      cards.slice(current).concat(cards.slice(0,current)).forEach(c => track.appendChild(c));
      cards.forEach(c => c.classList.toggle("is-current",Number(c.dataset.index)===current));
    }

    function stop(){clearInterval(timer);timer=null;}
    function start(){if(reduced||timer!==null)return;timer=setInterval(advance,4200);}
    function select(i){stop();render(i);start();}

    function advance(){
      if(moving)return;
      const first=track.firstElementChild;
      const step=first.getBoundingClientRect().height+(parseFloat(getComputedStyle(track).rowGap)||0);
      moving=true; track.style.transition="transform .7s cubic-bezier(.22,.61,.36,1)";
      track.style.transform=`translateY(-${step}px)`;
      let done=false;
      const finish=()=>{
        if(done)return;done=true;track.removeEventListener("transitionend",onEnd);
        track.appendChild(first);track.style.transition="none";track.style.transform="translateY(0)";
        void track.offsetHeight;track.style.transition="transform .7s cubic-bezier(.22,.61,.36,1)";
        moving=false;render(current+1);
      };
      const onEnd=e=>{if(e.propertyName==="transform")finish();};
      track.addEventListener("transitionend",onEnd);
      setTimeout(finish,850);
    }

    prev?.addEventListener("click",()=>select(current-1));
    next?.addEventListener("click",()=>select(current+1));
    ticker.addEventListener("mouseenter",stop);ticker.addEventListener("mouseleave",start);
    ticker.addEventListener("focusin",stop);ticker.addEventListener("focusout",start);
    document.addEventListener("visibilitychange",()=>document.hidden?stop():start());
    render(0);start();
  }
});
