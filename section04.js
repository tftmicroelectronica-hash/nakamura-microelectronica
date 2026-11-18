(() => {
  "use strict";
  const categories = {
    televisores: {
      title: "Televisores",
      intro: "Casos de referencia para televisores LED, LCD y Smart TV. Los síntomas orientan la revisión, pero el diagnóstico final requiere pruebas sobre el equipo.",
      cases: [
        {model:"Smart TV LED 43–55 pulgadas",tag:"Imagen / retroiluminación",image:"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=85",alt:"Televisor de pantalla plana",fault:"Enciende, hay sonido, pero la pantalla permanece oscura o muestra destellos.",diagnosis:"Comprobar tiras LED, tensión del driver, conectores y señal de control BL-ON; aislar la tira defectuosa antes de sustituir componentes."},
        {model:"TV LED con franjas o líneas",tag:"Panel / señal de imagen",image:"https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=85",alt:"Pantalla electrónica de televisión",fault:"Líneas verticales, imagen duplicada o zonas sin imagen.",diagnosis:"Inspeccionar flex y conectores, tensiones de la T-CON y señales hacia el panel. Determinar si la falla está en placa, conexión o panel."},
        {model:"Smart TV: reinicios o no enciende",tag:"Fuente / placa principal",image:"https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?auto=format&fit=crop&w=900&q=85",alt:"Equipo audiovisual y televisor",fault:"El equipo intenta arrancar, se reinicia o queda en standby.",diagnosis:"Medir líneas de standby y salidas principales, revisar ripple, reguladores y cortocircuitos en la mainboard."}
      ]
    },
    generadores: {
      title:"Generadores",
      intro:"Casos de referencia para generadores portátiles y estacionarios, con énfasis en arranque, generación y estabilidad eléctrica.",
      cases:[
        {model:"Generador portátil a gasolina",tag:"No arranca",imageSheet:"./assets/generadores/cummins-onan-p9500dfi-gallery.webp",imagePosition:"0% 0%",alt:"Vista general del generador Cummins Onan P9500dfi",fault:"El motor gira con dificultad o no logra encender.",diagnosis:"Verificar combustible, bujía, filtro, compresión y circuito de apagado. Comprobar continuidad y estado del sistema de encendido."},
        {model:"Generador VMAX — reparación y mantenimiento",tag:"Soldadura / mantenimiento completo",carousel:[
          {src:"./vmax-01.webp",alt:"Vista general del generador portátil VMAX GN13000EW"},
          {src:"./vmax-02.webp",alt:"Detalle del silenciador del generador VMAX"},
          {src:"./vmax-03.webp",alt:"Protección metálica desmontada para corregir la soldadura"},
          {src:"./vmax-04.webp",alt:"Detalle del conjunto de salida de gases del generador VMAX"},
          {src:"./vmax-05.webp",alt:"Mantenimiento del silenciador y componentes del motor VMAX"}
        ],summary:"¡Confía en los expertos para mantener tu generador en óptimas condiciones! Recibimos un generador VMAX con la protección metálica de quemaduras mal soldada. Corregimos el error y realizamos un mantenimiento completo para asegurar su óptimo funcionamiento."},
        {model:"Generador: no entrega energía",tag:"Alternador / protección",imageSheet:"./assets/generadores/cummins-onan-p9500dfi-gallery.webp",imagePosition:"0% 100%",alt:"Detalle de componentes del motor del generador Cummins",fault:"El motor funciona, pero no hay tensión útil en la salida.",diagnosis:"Inspeccionar interruptor, cableado, excitación, AVR y bobinados; realizar pruebas de aislamiento según especificación del fabricante."},
        {model:"Mantenimiento y Reparación de Generador Portátil Cummins Onan P9500dfi",tag:"Mantenimiento preventivo y correctivo",carousel:[
          {src:"./cummins-01.webp",alt:"Vista general y panel de control del generador Cummins Onan P9500dfi",caption:"Vista general y panel de control"},
          {src:"./cummins-02.webp",alt:"Detalle del depósito de combustible del generador Cummins Onan P9500dfi",caption:"Depósito de combustible"},
          {src:"./cummins-03.webp",alt:"Detalle de los componentes inferiores del generador Cummins Onan P9500dfi",caption:"Componentes inferiores"},
          {src:"./cummins-04.webp",alt:"Inspección del conjunto de válvulas del generador Cummins Onan P9500dfi",caption:"Conjunto de válvulas"}
        ],fault:"Mantenimiento preventivo y correctivo completo de generador eléctrico portátil Cummins.",diagnosis:"Servicio orientado a optimizar el rendimiento del motor y prolongar la vida útil del equipo. La verificación final debe comprobar arranque, estabilidad y salida eléctrica según las especificaciones del fabricante."}
      ]
    },
    audio: {
      title:"Parlantes, amplificadores y mixers",
      intro:"Casos ilustrativos de equipos de sonido profesionales y domésticos: amplificación, entradas, salidas y mezcla de señales.",
      cases:[
        {model:"Amplificador de audio",tag:"Protección / potencia",image:"https://images.unsplash.com/photo-1593078166034-9c4e1a9c8c8b?auto=format&fit=crop&w=900&q=85",alt:"Amplificador y equipo de sonido",fault:"Enciende y entra en modo PROTECT o se apaga al subir volumen.",diagnosis:"Medir offset DC en salida, revisar transistores de potencia, resistencias de emisor, drivers y posibles cortos en la carga."},
        {model:"Parlante activo",tag:"Sin audio / fuente",image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",alt:"Parlante de audio",fault:"Enciende, pero no reproduce sonido o presenta ruido y distorsión.",diagnosis:"Comprobar fuente simétrica, etapa preamplificadora, módulo clase D, conectores y señal de entrada."},
        {model:"Mixer / consola de audio",tag:"Canal sin señal",image:"https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=85",alt:"Consola mezcladora de audio",fault:"Uno o varios canales no reciben señal o generan zumbido.",diagnosis:"Seguir la señal desde la entrada hasta el bus de mezcla; revisar jack, alimentación phantom, potenciómetros y amplificadores operacionales."}
      ]
    },
    monitores: {
      title:"Monitores",
      intro:"Ejemplos de diagnóstico para monitores LCD y LED de computadora, señal de video, alimentación e iluminación.",
      cases:[
        {model:"Monitor LED: pantalla negra",tag:"Backlight",image:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=85",alt:"Monitor de computadora",fault:"El indicador enciende, pero no se observa imagen.",diagnosis:"Verificar señal de video, fuente, fusibles, reguladores y retroiluminación; realizar prueba de imagen con linterna."},
        {model:"Monitor con imagen intermitente",tag:"Conectores / alimentación",image:"https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=900&q=85",alt:"Pantalla de monitor",fault:"La imagen aparece y desaparece al mover el cable o después de calentarse.",diagnosis:"Probar cable y puerto, inspeccionar soldaduras, conectores LVDS/eDP y estabilidad de las tensiones de alimentación."},
        {model:"Monitor con líneas o colores anormales",tag:"Panel / procesamiento",image:"https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&w=900&q=85",alt:"Monitor mostrando contenido",fault:"Presenta líneas, parpadeo o tonalidades incorrectas.",diagnosis:"Descartar primero cable y fuente de señal; revisar placa scaler, flex del panel y tensiones de referencia."}
      ]
    },
    impresoras: {
      title:"Impresoras",
      intro:"Casos de referencia para impresoras de inyección de tinta y láser: alimentación de papel, calidad de impresión y comunicación.",
      cases:[
        {model:"Impresora de inyección",tag:"Calidad de impresión",image:"https://images.unsplash.com/photo-1612815154858-60aa4c59e8b4?auto=format&fit=crop&w=900&q=85",alt:"Impresora de escritorio",fault:"Imprime con líneas, colores incompletos o espacios en blanco.",diagnosis:"Ejecutar patrón de inyectores, revisar cabezal, sistema de tinta, mangueras y estación de limpieza."},
        {model:"Impresora láser",tag:"Atasco de papel",image:"https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=900&q=85",alt:"Impresora láser de oficina",fault:"El papel se atasca o sale arrugado y con manchas.",diagnosis:"Inspeccionar rodillos de toma, sensores, fusor y recorrido del papel; verificar temperatura y presión del conjunto fusor."},
        {model:"Impresora: no comunica",tag:"Conectividad / electrónica",image:"https://images.unsplash.com/photo-1568205612837-017257d2310a?auto=format&fit=crop&w=900&q=85",alt:"Equipo de impresión",fault:"No es detectada por USB o red, o presenta errores al iniciar.",diagnosis:"Comprobar fuente, cableado, puertos, firmware y tarjeta lógica; aislar fallas de comunicación frente a errores mecánicos."}
      ]
    },
    medicos: {
      title:"Equipos médicos",
      intro:"Ejemplos orientativos de inspección electrónica. Los equipos médicos requieren procedimientos, trazabilidad y pruebas de seguridad acordes con su uso y normativa aplicable.",
      cases:[
        {model:"Monitor de signos vitales",tag:"Alimentación / pantalla",image:"https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=85",alt:"Equipo médico de monitorización",fault:"No enciende, la pantalla se apaga o la batería no mantiene carga.",diagnosis:"Inspección de adaptador, batería, circuito de carga, conectores y regulación. Validar alarmas y parámetros con equipo de prueba apropiado."},
        {model:"Bomba de infusión",tag:"Control / alarmas",image:"https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?auto=format&fit=crop&w=900&q=85",alt:"Equipo de uso clínico",fault:"Presenta alarmas recurrentes o controles que no responden.",diagnosis:"Revisar sensores, teclado, alimentación y registros de error. No liberar para uso clínico sin calibración y verificación funcional documentadas."},
        {model:"Fuente de equipo clínico",tag:"Fuente de alimentación",image:"https://images.unsplash.com/photo-1581093458791-9d42e3c6c2f4?auto=format&fit=crop&w=900&q=85",alt:"Instrumentación técnica",fault:"Reinicios, inestabilidad o apagado bajo demanda.",diagnosis:"Medir rizado, aislamiento y tensiones bajo carga; verificar protecciones y componentes. Requiere pruebas de seguridad eléctrica antes de retornar al servicio."}
      ]
    },
    otros: {
      title:"Otros equipos electrónicos",
      intro:"Si tu equipo no aparece en las categorías anteriores, podemos revisar su tecnología, síntomas y viabilidad de reparación.",
      cases:[
        {model:"Tarjetas electrónicas de control",tag:"Reparación de placa",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",alt:"Placa electrónica con componentes",fault:"El equipo no responde o presenta fallas intermitentes.",diagnosis:"Inspección visual, búsqueda de cortos, medición de líneas, reguladores y componentes discretos; análisis por bloques."},
        {model:"Fuentes conmutadas",tag:"Energía / protección",image:"https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85",alt:"Técnico trabajando en electrónica",fault:"No entrega tensión, hace ruido o activa protección.",diagnosis:"Revisar entrada, rectificación, etapa primaria y secundaria, realimentación y optoacoplador con procedimientos seguros."},
        {model:"Módulos y controles electrónicos",tag:"Comunicación / control",image:"https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=85",alt:"Trabajo de diagnóstico electrónico",fault:"El módulo no comunica o pierde funciones específicas.",diagnosis:"Verificar alimentación, señales de reloj y reset, buses de comunicación, conectores y firmware cuando aplique."}
      ]
    }
  };

  const section=document.querySelector("#equipos");
  if(!section) return;
  const overlay=document.createElement("div");
  overlay.className="equipment-detail";
  overlay.hidden=true;
  overlay.innerHTML='<div class="equipment-dialog" role="dialog" aria-modal="true" aria-labelledby="equipmentDetailTitle" tabindex="-1"><div class="equipment-dialog-head"><div><span class="kicker">04 / EQUIPOS ATENDIDOS · CASOS DE REFERENCIA</span><h2 id="equipmentDetailTitle"></h2></div><button class="equipment-dialog-close" type="button" aria-label="Cerrar detalle">×</button></div><p class="equipment-dialog-intro"></p><div class="equipment-cases"></div><p class="equipment-detail-note">Contenido ilustrativo para orientar al visitante. Los modelos, síntomas y diagnósticos mostrados son ejemplos técnicos; cada reparación requiere inspección del equipo real y confirmación de sus mediciones. En equipos médicos, la verificación y liberación deben cumplir los requisitos de seguridad y calibración aplicables.</p></div>';
  document.body.appendChild(overlay);
  const dialog=overlay.querySelector(".equipment-dialog");
  const closeButton=overlay.querySelector(".equipment-dialog-close");
  const title=overlay.querySelector("#equipmentDetailTitle");
  const intro=overlay.querySelector(".equipment-dialog-intro");
  const cases=overlay.querySelector(".equipment-cases");
  let previousFocus=null;

  function initCaseCarousels(root){
    root.querySelectorAll("[data-case-carousel]").forEach(carousel=>{
      if(carousel.dataset.ready==="true") return;
      carousel.dataset.ready="true";
      const slides=[...carousel.querySelectorAll(".case-slide")];
      const dots=[...carousel.querySelectorAll(".case-dot")];
      const prev=carousel.querySelector(".case-prev"), next=carousel.querySelector(".case-next");
      if(slides.length<2) return;
      let active=0,timer=null,resumeTimer=null,startX=0;
      const show=index=>{
        active=(index+slides.length)%slides.length;
        slides.forEach((slide,i)=>{slide.classList.toggle("is-active",i===active);slide.setAttribute("aria-hidden",i===active?"false":"true");});
        dots.forEach((dot,i)=>{dot.classList.toggle("is-active",i===active);dot.setAttribute("aria-current",i===active?"true":"false");});
      };
      const stop=()=>{if(timer) clearInterval(timer);timer=null;};
      const start=()=>{stop();timer=setInterval(()=>show(active+1),4500);};
      const pause=()=>{stop();if(resumeTimer) clearTimeout(resumeTimer);resumeTimer=setTimeout(start,9000);};
      prev.addEventListener("click",()=>{show(active-1);pause();});
      next.addEventListener("click",()=>{show(active+1);pause();});
      dots.forEach((dot,i)=>dot.addEventListener("click",()=>{show(i);pause();}));
      carousel.addEventListener("mouseenter",stop);
      carousel.addEventListener("mouseleave",start);
      carousel.addEventListener("focusin",stop);
      carousel.addEventListener("focusout",start);
      carousel.addEventListener("touchstart",event=>{startX=event.changedTouches[0].clientX;stop();},{passive:true});
      carousel.addEventListener("touchend",event=>{const delta=event.changedTouches[0].clientX-startX;if(Math.abs(delta)>45)show(active+(delta<0?1:-1));pause();},{passive:true});
      carousel.addEventListener("keydown",event=>{if(event.key==="ArrowLeft"){show(active-1);pause();}else if(event.key==="ArrowRight"){show(active+1);pause();}});
      start();
    });
  }

  function openCategory(key,trigger){
    const category=categories[key];
    if(!category) return;
    previousFocus=trigger;
    title.textContent=category.title;
    intro.textContent=category.intro;
    cases.innerHTML=category.cases.map(item=>{
      const gallery=item.carousel
        ? '<div class="case-carousel" data-case-carousel aria-label="Carrusel de fotografías del equipo atendido"><div class="case-viewport">'+item.carousel.map((photo,index)=>'<figure class="case-slide'+(index===0?' is-active':'')+'" aria-hidden="'+(index===0?'false':'true')+'">'+(item.spriteCarousel?'<div class="case-slide-image" role="img" aria-label="'+photo.alt+'" style="background-image:url(\''+photo.src+'\');background-position:0 '+photo.position+'"></div>':'<img src="'+photo.src+'" alt="'+photo.alt+'" loading="'+(index===0?'eager':'lazy')+'" width="640" height="480">')+'</figure>').join("")+'</div><button class="case-arrow case-prev" type="button" aria-label="Fotografía anterior">‹</button><button class="case-arrow case-next" type="button" aria-label="Fotografía siguiente">›</button><div class="case-controls" aria-label="Seleccionar fotografía">'+item.carousel.map((photo,index)=>'<button class="case-dot'+(index===0?' is-active':'')+'" type="button" aria-label="Ver fotografía '+(index+1)+'" aria-current="'+(index===0?'true':'false')+'" data-case-slide="'+index+'"></button>').join("")+'</div></div>'
        : item.imageSheet
          ? '<div class="equipment-case-cover" role="img" aria-label="'+item.alt+'" style="background-image:url(\''+item.imageSheet+'\');background-position:'+item.imagePosition+'"></div>'
          : '<img src="'+item.image+'" alt="'+item.alt+'" loading="lazy">';
      return '<article class="equipment-case">'+gallery+'<div class="equipment-case-body"><span class="equipment-case-tag">'+item.tag+'</span><h3>'+item.model+'</h3>'+(item.summary?'<p class="equipment-case-summary">'+item.summary+'</p>':'<p><strong>Falla reportada:</strong> '+item.fault+'</p><p class="equipment-diagnosis"><strong>Diagnóstico técnico:</strong> '+item.diagnosis+'</p>')+'</div></article>';
    }).join("");
    initCaseCarousels(cases);
    overlay.hidden=false;
    document.body.classList.add("equipment-modal-open");
    closeButton.focus();
    dialog.scrollTop=0;
  }
  function closeCategory(){
    if(overlay.hidden) return;
    overlay.hidden=true;
    document.body.classList.remove("equipment-modal-open");
    cases.innerHTML="";
    if(previousFocus) previousFocus.focus();
  }
  section.querySelectorAll("[data-equipment-category]").forEach(button=>{
    button.addEventListener("click",()=>openCategory(button.dataset.equipmentCategory,button));
  });
  closeButton.addEventListener("click",closeCategory);
  overlay.addEventListener("click",event=>{if(event.target===overlay) closeCategory();});
  document.addEventListener("keydown",event=>{
    if(overlay.hidden) return;
    if(event.key==="Escape"){closeCategory();return;}
    if(event.key==="Tab"){
      const focusable=dialog.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])');
      const first=focusable[0],last=focusable[focusable.length-1];
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
    }
  });
})();