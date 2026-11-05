# faluna22.github.io

Portafolio personal de **Fabricio Luna Palacios**, economista (PUCP) y científico de datos. Se publica en
<https://faluna22.github.io> (español) y <https://faluna22.github.io/en/> (inglés).

Está hecho con [Astro](https://astro.build) y Tailwind CSS, a partir del template
[devportfolio](https://github.com/RyanFitzgerald/devportfolio) de Ryan Fitzgerald (licencia MIT, ver `LICENSE.md`).

## Editar el contenido

Todo el texto vive en dos archivos de datos, con la misma estructura:

| Archivo | Qué contiene |
|---|---|
| `src/data/es.ts` | Versión en español: perfil, proyectos, experiencia, formación, «Más allá de los datos» |
| `src/data/en.ts` | Versión en inglés. Reutiliza imágenes y links de `es.ts` y traduce los textos |
| `src/data/types.ts` | La forma de los datos (qué campos tiene cada proyecto) |

Para sumar un proyecto, agrega un objeto a `projects.items` en ambos archivos, con su imagen en
`public/images/projects/` (WebP o SVG de menos de 300 KB). Cada tarjeta tiene: título, pregunta, resultado con número,
imagen, herramientas y links.

| Carpeta | Qué hay |
|---|---|
| `public/files/` | CV en PDF (versión web, sin teléfono) |
| `public/images/` | Foto y figuras de los proyectos |
| `public/demos/` | Dashboards autocontenidos: Chichas y Puna quemada |

## Correrlo en local

```bash
npm ci
npm run dev       # http://localhost:4321
npm run build     # genera dist/
```

## Publicación

Cada push a `main` corre `.github/workflows/deploy.yml`, que construye el sitio y lo publica en GitHub Pages
(Settings → Pages → Source: **GitHub Actions**).
