// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://faluna22.github.io",
  trailingSlash: "ignore",
  build: {
    // CSS dentro del HTML: evita páginas sin estilos si el navegador guardó un HTML viejo.
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
