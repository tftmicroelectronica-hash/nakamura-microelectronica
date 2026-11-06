# NAKAMURA Microelectrónica — Sitio web

Sitio web estático, responsive y listo para publicar con **GitHub Pages**. Está construido con HTML, CSS y JavaScript puro; no requiere instalar dependencias ni ejecutar un servidor.

## Archivos

Guarda los cuatro archivos en la misma carpeta:

- `index.html` — estructura y contenido del sitio.
- `style.css` — diseño visual y adaptación a móviles.
- `script.js` — menú móvil, año automático y formulario que prepara un mensaje de WhatsApp.
- `README.md` — estas instrucciones.

## Probar en tu computadora

1. Descarga o copia los cuatro archivos en una carpeta, por ejemplo `nakamura-web`.
2. Abre `index.html` con tu navegador.
3. Comprueba los enlaces, el menú y el formulario. Al enviar el formulario se abrirá WhatsApp con el mensaje preparado; el visitante deberá pulsar Enviar.

## Publicar en GitHub Pages

1. Inicia sesión en [GitHub](https://github.com/).
2. Crea un repositorio nuevo. Para una web de proyecto puedes usar, por ejemplo, `nakamura-microelectronica`. Puedes dejarlo público.
3. En tu computadora, abre el repositorio y selecciona **Add file → Upload files**.
4. Arrastra `index.html`, `style.css`, `script.js` y `README.md` a la raíz del repositorio (no dentro de otra carpeta).
5. Escribe un mensaje como `Publicar sitio web inicial` y pulsa **Commit changes**.
6. En el repositorio, entra en **Settings → Pages**.
7. En **Build and deployment**, selecciona **Deploy from a branch**.
8. En **Branch**, selecciona `main` y la carpeta `/ (root)`. Pulsa **Save**.
9. Espera unos minutos. GitHub mostrará la dirección pública del sitio en esa misma sección, normalmente con este formato:
   `https://TU-USUARIO.github.io/nakamura-microelectronica/`

## Actualizar el sitio

Edita los archivos en tu computadora y vuelve a subirlos al mismo repositorio, reemplazando los anteriores. Cada cambio confirmado en la rama `main` se publicará automáticamente después de unos minutos.

## Datos que puedes personalizar

Los datos actuales están cargados como ejemplo para NAKAMURA Microelectrónica:

- Teléfono / WhatsApp: `0988566090` (enlace internacional `593988566090`).
- Correo: `tftnakamura@gmail.com`.
- Dirección: `Los Ríos #3725, entre Camilo Destruge y García Goyena, Guayaquil`.
- Servicios: reparación de televisores, evaluación de pantallas y COF, reparación de placas y mantenimiento.

Para cambiar el teléfono, actualiza los enlaces `tel:` y `wa.me` de `index.html`, además del número de WhatsApp en `script.js`. Para cambiar el correo o la dirección, edita los datos de la sección **Contacto** en `index.html`.

## Notas

- El formulario no almacena datos ni envía correos: abre WhatsApp con el texto rellenado.
- La tipografía se carga desde Google Fonts. Si no hay conexión, se utilizarán fuentes alternativas del sistema.
- No se incluyen fotografías ni el logotipo como archivo porque no se adjuntó un recurso de imagen en esta solicitud. Puedes añadirlos posteriormente y enlazarlos desde `index.html`.
