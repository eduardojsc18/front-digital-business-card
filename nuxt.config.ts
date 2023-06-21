// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'pt-br'
            },
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.png'},
                {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
                {rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: 'anonymous'},
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap'},
            ],
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'description', content: 'Fisioterapeuta especializada em Ortopédica, Liberação Miofascial, Dry-needling e muito mais. Acesse e agende sua consulta à domicílio agora mesmo!'},
                {name: 'keywords', content: 'Dra. Erika Queiroz, CREFITO-7, Fisioterapia, Fisioterapia Ortopédica, Liberação Miofascial, Dry-needling, Terapia Manual, Paralisia Facial, Disfunção temporomandibular, Pilates solo, Pilates para gestante, Pilates, Quiropraxia, Homecare, atendimento domicíliar, fisioterapia domicíliar, Guarulhos, GRU, Guarulhos-SP, Fisio, Fisioterapeuta, São Paulo, Arujá, Itaquaquecetuba, São Miguel Paulista, Estou com dores, Preciso de um fisioterapeuta, Melhor fisioterapeuta, Fisioterapeuta mulher, Fisioterapeuta feminino, Intrutora de pilates, Atendimento Pediatrico, Pediatrico, Ped'},
                {name: 'robots', content: 'index'},
                {name: 'format-detection', content: 'telephone=no'},
                {name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#E6CCB2'},
                {name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#E6CCB2'},
                {name: 'apple-mobile-web-app-capable', content: 'yes'},
                {name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'},
            ],
            title: 'Dra. Erika Queiroz - Fisioterapeuta Ortopédica - Guarulhos e Região',
        }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['nuxt-gtag'],
    gtag: {
        id: 'G-CKRGQWZPQY'
    }
})
