// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    app: {
      head: {
        title: 'Erika Queiroz | Fisioterapeuta e Instrutura de Pilates',
          htmlAttrs: {
            lang: 'pt-br'
          },
          meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#E6CCB2' },
            { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#69462F' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
          ],
          link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.png' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: 'anonymous' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap' },
          ],
      }
    },

    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },

})
