# CLAUDE.md

Portafolio personal de Fabricio Luna Palacios, hecho con Astro 5 + Tailwind CSS v4 a partir del template devportfolio.
Se publica en GitHub Pages desde `main` con `.github/workflows/deploy.yml`.

## Comandos

```bash
npm run dev       # servidor de desarrollo
npm run build     # build de producción en dist/
npm run preview   # sirve dist/
```

## Arquitectura

- `src/data/es.ts` y `src/data/en.ts`: todo el contenido, tipado con `src/data/types.ts`. `en.ts` reutiliza
  campos de `es.ts` (imágenes, links) y solo traduce texto. Cualquier cambio de contenido va en **ambos** archivos.
- `src/components/Page.astro`: arma la página; `src/pages/index.astro` (es) y `src/pages/en/index.astro` (en)
  solo le pasan el idioma.
- Cada sección es un componente que recibe `t: SiteContent` como prop (Hero, About, Projects + ProjectCard,
  Experience, Education, Beyond, Footer). Las secciones se ocultan si su lista está vacía.
- Colores y temas: tokens CSS en `src/styles/global.css` (`--accent`, `--bg`, `--ink`…), con modo oscuro por
  `prefers-color-scheme` y por `data-theme` en `<html>` (el botón del header lo guarda en localStorage).
- Iconos: `src/components/Icon.astro` (paths de Tabler Icons).

## Reglas de contenido

- Una tarjeta de proyecto = título que dice qué se hizo, la pregunta en una línea, un resultado con número, una
  imagen y los links al código. El mejor proyecto va primero (se muestra ancho).
- Nada de claves, `.env`, datos personales de terceros ni archivos de más de 50 MB. El teléfono no va en la web.
- No inventar logros ni hobbies: todo debe salir del CV o de lo que Fabricio confirme.
- Imágenes en `public/images/projects/` en WebP o SVG livianos; las figuras SVG tienen versión `-en.svg`.
