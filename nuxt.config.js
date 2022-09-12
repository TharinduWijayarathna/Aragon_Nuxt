export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Dashboard",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700",
      },
      {
        rel: "stylesheet",
        href: "/assets/css/nucleo-icons.css",
      },
      {
        rel: "stylesheet",
        href: "/assets/css/nucleo-svg.css",
      },
      {
        rel: "stylesheet",
        href: "/assets/css/argon-dashboard.min.css?v=2.0.5",
        id: "pagestyle",
      },
    ],
    script: [
      {
        type: "text/javascript",
        src: "/assets/js/header_scripts.js",
      },
      {
        type: "text/javascript",
        src: "https://kit.fontawesome.com/42d5adcbca.js",
      },
      {
        type: "text/javascript",
        src: "/assets/js/scripts.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "/assets/js/core/popper.min.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "/assets/js/core/bootstrap.min.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "/assets/js/plugins/perfect-scrollbar.min.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "/assets/js/plugins/smooth-scrollbar.min.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "/assets/js/plugins/dragula/dragula.min.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "/assets/js/plugins/jkanban/jkanban.js",
        body: true,
      },
      {
        type: "text/javascript",
        src: "/assets/js/plugins/chartjs.min.js",
        body: true,
      },

      {
        type: "text/javascript",
        src: "https://buttons.github.io/buttons.js",
        async: true,
        defer: true,
        body: true,
      },
      {
        type: "text/javascript",
        src: "/assets/js/argon-dashboard.min.js?v=2.0.5",
        body: true,
      },
    ],
    bodyAttrs: {
      class: "g-sidenav-show   bg-gray-100",
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
