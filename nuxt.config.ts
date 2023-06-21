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
                {name: 'description', content: 'Fisioterapeuta especializada em Ortopédica, Liberação Miofacial, Dry-needling e muito mais. Acesse e agende sua consulta à domicílio agora mesmo!'},
                {name: 'keywords', content: 'Dra. Erika Queiroz, CREFITO-7, Fisioterapia, Fisioterapia Ortopédica, Liberação Miofacial, Dry-needling, Terapia Manual, Paralisia Facial, Disfunção temporomandibular, Pilates solo, Pilates para gestante, Pilates, Quiropraxia, Home-care, atendimento domiciliar, fisioterapia domiciliar, Guarulhos, GRU, Guarulhos-SP, Fisio, Fisioterapeuta, São Paulo, Arujá, Itaquaquecetuba, São Miguel Paulista, Estou com dores, Preciso de um fisioterapeuta, Melhor fisioterapeuta, Fisioterapeuta mulher, Fisioterapeuta feminino, Instrutora de pilates, Atendimento Pediatrico, Pediatrico, Ped'},
                {name: 'robots', content: 'index'},
                {name: 'format-detection', content: 'telephone=no'},
                {name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#E6CCB2'},
                {name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#E6CCB2'},
                {name: 'apple-mobile-web-app-capable', content: 'yes'},
                {name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'},
                {name: 'google-site-verification', content: 'NpBr31H0XCatpIVHmPwE6FK_4TWluY3Pe3OTN_4OAs8'},
            ],
            script: [
                {async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-CKRGQWZPQY'},
                { hid: 'gtm', innerHTML: `  window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-CKRGQWZPQY');`, type: 'text/javascript'}
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
    // modules: ['nuxt-gtag'],
    // gtag: {
    //     id: 'G-CKRGQWZPQY'
    // },
})
