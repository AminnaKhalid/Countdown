/** @type {import('vite').UserConfig} */
// please run npm i @types/node -D to run the code below

import { resolve } from "path";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");
export default defineConfig({
  root,
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        countdown: resolve(root, "countdown.html"),
        date: resolve(root, "date.html"),
        day: resolve(root, "day.html"),
      },
      output: {
        chunkFileNames: "assets/scripts/[name].js",
        entryFileNames: "assets/scripts/[name].js",

        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "assets/img/[name][extname]";
          }

          if (/\.(woff|woff2|ttf|otf)$/.test(name ?? "")) {
            return "assets/fonts/[name][extname]";
          }

          if (/\.css$/.test(name ?? "")) {
            return "assets/css/[name][extname]";
          }

          if (/\.js$/.test(name ?? "")) {
            return "assets/scripts/[name][extname]";
          }

          return "assets/[name][extname]";
        },
      },
    },
  },
});
