# Carrusel Cummins Onan P9500dfi — recursos y parche

Este paquete contiene las cuatro fotografías originales recibidas en la conversación,
convertidas individualmente a WebP. Se conserva su proporción 4:3 y resolución nativa
1600 × 1200; no se recortaron ni ampliaron.

## Archivos
- `assets/generadores/cummins-01.webp` — vista general y panel.
- `assets/generadores/cummins-02.webp` — depósito de combustible.
- `assets/generadores/cummins-03.webp` — componentes inferiores.
- `assets/generadores/cummins-04.webp` — conjunto de válvulas.
- `cummins-carousel.js` — renderer e inicializador del carrusel.
- `cummins-carousel.css` — estilos del carrusel.

## Integración necesaria en `section04.js`
1. En el objeto `generadores`, conserva los otros casos y reemplaza solamente el caso
   Cummins actual por el objeto `carousel` documentado al inicio de `cummins-carousel.js`.
2. Dentro del `map` que genera las tarjetas, sustituye la rama que construye
   `.equipment-case-gallery` por `renderCumminsCarousel(item)` cuando `item.carousel` exista.
3. Después de `cases.innerHTML = ...`, ejecuta `initCumminsCarousels(cases)`.
4. Incluye `cummins-carousel.css` al final de `section04.css` o copia su contenido allí.
5. No cambies el resto de categorías, casos ni secciones.

El carrusel ofrece avance/retroceso, indicadores, reproducción cada 4,5 segundos,
pausa al pasar el cursor o enfocar controles, reinicio tras interacción y gesto táctil.
