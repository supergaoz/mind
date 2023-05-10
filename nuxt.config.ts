// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require("path");
export default defineNuxtConfig({
  app: {
    head: {
      title: "mind图形编程分享",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        { name: "referrer", content: "strict-origin-when-cross-origin" },
        { name: "applicable-device", content: "pc" },
      ],
      link: [
        {
          rel: "icon",
          href: "favicon.ico",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
          defer: true,
        },
        {
          type: 'text/javascript',
          src: 'https://www.googletagmanager.com/gtag/js?id=G-QW266BDB6E',
          async: true,
        },
        {
          type: "text/javascript",
          innerHTML:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());          
            gtag('config', 'G-QW266BDB6E');
          `
        },
      ],
    },
    
  },
  css: [
    "/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "/node_modules/bootstrap-icons/font/bootstrap-icons.css",
  ],

  // Keys within public, will be also exposed to the client-side
  runtimeConfig: {
    // The private keys which are only available within server-side
    public: {
      baseUrl: process.env.PUBLIC_BASE_URL || "",
      apiKey: "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",
    },
  }
});
