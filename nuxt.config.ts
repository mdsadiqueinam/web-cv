// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  ssr: true,

  nitro: {
    preset: "static",
    output: {
      dir: "dist",
      publicDir: "dist",
    },
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss(), svgLoader()],
  },

  app: {
    // If deploying to https://<USERNAME>.github.io/, set baseURL to '/'
    // If deploying to https://<USERNAME>.github.io/<REPOSITORY>/, set baseURL to '/<REPOSITORY>/'
    // Use GH_PAGES=true env var to set baseURL to '/web-cv/' for GitHub Pages
    baseURL: process.env.GH_PAGES === "true" ? "/web-cv/" : "/",
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "MD Sadique Inam - Senior Software Developer",
    },
  },
});
