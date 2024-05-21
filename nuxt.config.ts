// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  target: 'static',
  /*ssr: false,*/
  devtools: { enabled: false }, 

  css: ['/css/global.css', 'primevue/resources/themes/aura-light-green/theme.css'], 
  modules: [
    'nuxt-primevue'
  ],
  vite: {
    assetsInclude: ["**/*.JPG"]
  },
  generate: {
    routes: [
      '/'      // Add more routes as needed
    ]}
})
