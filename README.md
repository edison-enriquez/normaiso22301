# Continuidad del negocio — ISO 22301

Sitio divulgativo en React + Vite sobre **ISO 22301:2019**, *Seguridad y
resiliencia — Sistemas de gestión de continuidad del negocio — Requisitos*.

Misma arquitectura y sistema visual que el sitio de
[ISO 19011](https://edison-enriquez.github.io/ISO19011/).

## Arranque

Node.js 18 o superior.

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:5173
npm run build    # compila a dist/
npm run preview  # sirve lo compilado
npm run lint     # comprobación de tipos sin emitir
```

## Despliegue en GitHub Pages

El workflow `.github/workflows/deploy.yml` compila y publica en cada push a
`main`. Requiere activar una sola vez **Settings → Pages → Source: GitHub
Actions** en el repositorio.

El sitio usa `BrowserRouter`, no `HashRouter`, porque el contenido depende de
anclas internas (`#bia`, `#fase-3`, los índices de cada página). Por eso el
workflow copia `dist/index.html` como `dist/404.html`: así cualquier ruta
profunda carga la SPA. La base (`/<nombre-del-repo>/`) se inyecta con
`VITE_BASE` y `src/main.tsx` la reutiliza como `basename` del router.

## Estructura

```
src/
  tema/
    tokens.css        ← ÚNICO archivo con colores literales
    global.css        ← sistema visual completo
  datos/
    tipos.ts          ← modelo: Norma, Seccion, Vinculo, Fuente
    normas.ts         ← registro de la norma y sus secciones
    interrelacion.ts  ← correspondencias 27001/27002 ↔ 22301
  contenido/*.html    ← fragmentos de contenido, importados con ?raw
  componentes/
  paginas/
```

Los menús, el índice lateral, el pie y la navegación anterior/siguiente se
generan a partir de `src/datos/normas.ts`. Para añadir una página: crear el
fragmento en `src/contenido/`, registrarlo en `normas.ts` y añadir su archivo a
`RUTA_POR_ARCHIVO` en `src/componentes/ContenidoHtml.tsx`.

Los fragmentos se enlazan entre sí con nombres de archivo
(`href="capitulo-8.html#bia"`); `ContenidoHtml.tsx` los reescribe a rutas de
React Router en tiempo de render.

## Sobre el contenido

- **Capítulos 1 a 10**: contrastados con el texto original en inglés,
  ISO 22301:2019(E). La terminología en español es **traducción propia** y no
  se ha contrastado con la traducción oficial ni con NTC-ISO 22301; por eso el
  glosario da siempre el término original.
- **ISO/IEC 27001:2022 y 27002:2022** (página «SGCN y SGSI») y las
  descripciones de las normas relacionadas: conocimiento general, sin documento
  de respaldo en este proyecto. El componente `AvisoFuente` lo advierte en cada
  página afectada y `/fuentes` lo detalla.
- **Implantación, información documentada, preguntas frecuentes**, ejemplos,
  figuras y cajas de «error frecuente»: elaboración propia, no texto normativo.

El sitio explica y resume la norma; no la reproduce. El PDF de la norma es un
documento con derechos de autor y **no se versiona** (`*.pdf` está en
`.gitignore`).

No se utilizan logotipos, escudos ni marcas institucionales.
