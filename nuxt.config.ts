// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts"],
  app:{
    head:{
      title: 'My 2024 spring',
      meta: [
        //<meta name ='description', content ='My Web Development Project site'>
        {name: 'description', content: 'My Web Development Project site'}
      ]
    }
  }
})