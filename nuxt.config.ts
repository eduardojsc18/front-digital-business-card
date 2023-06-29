// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {lang: 'pt-br'},
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.png'},
                {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
                {rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: 'anonymous'},
            ],
            meta: [
                {name: 'google-site-verification', content: 'NpBr31H0XCatpIVHmPwE6FK_4TWluY3Pe3OTN_4OAs8'},
                {name: 'msvalidate.01', content: '7EBC86C963D48A9DC86E6320A8E481BA'},
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    name: 'description',
                    content: 'Fisioterapeuta especializada em Ortopédica, Liberação Miofacial, Dry-needling e muito mais. Acesse e agende sua consulta à domicílio agora mesmo!'
                },
                {
                    name: 'keywords',
                    content: 'Dra. Erika Queiroz, CREFITO-7, Fisioterapia, Fisioterapia Ortopédica, Liberação Miofacial, Dry-needling, Terapia Manual, Paralisia Facial, Disfunção temporomandibular, Pilates solo, Pilates para gestante, Pilates, Quiropraxia, Home-care, atendimento domiciliar, fisioterapia domiciliar, Guarulhos, GRU, Guarulhos-SP, Fisio, Fisioterapeuta, São Paulo, Arujá, Itaquaquecetuba, São Miguel Paulista, Estou com dores, Preciso de um fisioterapeuta, Melhor fisioterapeuta, Fisioterapeuta mulher, Fisioterapeuta feminino, Instrutora de pilates, Atendimento Pediatrico, Pediatrico, Ped'
                },
                {name: 'robots', content: 'index'},
                {name: 'format-detection', content: 'telephone=no'},
                {name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#E6CCB2'},
                {name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#E6CCB2'},
                {name: 'apple-mobile-web-app-capable', content: 'yes'},
                {name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'},
                {property: "og:locale", content: 'pt_BR'},
                {property: "og:type", content: 'website'},
                {property: "og:site_name", content: 'Dra. Erika Queiroz - Fisioterapeuta Ortopédica - Guarulhos e Região'},
                {property: "og:url", content: 'https://fisioerikaqueiroz.vercel.app/'},
                {property: "og:title", content: 'Dra. Erika Queiroz - Fisioterapeuta Ortopédica - Guarulhos e Região'},
                {
                    property: "og:description",
                    content: 'Fisioterapeuta especializada em Ortopédica, Liberação Miofacial, Dry-needling e muito mais. Acesse e agende sua consulta à domicílio agora mesmo!'
                },
                {property: "og:image", content: '/img/dra-erika-queiroz-fisioterapeuta-especialista-ortopedista-pilates-guarulhos.webp'},
                {property: "og:image:alt", content: 'Dra. Erika Queiroz - Fisioterapeuta Ortopédica - Guarulhos e Região'},
                {property: "twitter:card", content: 'summary_large_image'},
                {property: "twitter:url", content: 'https://fisioerikaqueiroz.vercel.app/'},
                {property: "twitter:title", content: 'Dra. Erika Queiroz - Fisioterapeuta Ortopédica - Guarulhos e Região'},
                {
                    property: "twitter:description",
                    content: 'Fisioterapeuta especializada em Ortopédica, Liberação Miofacial, Dry-needling e muito mais. Acesse e agende sua consulta à domicílio agora mesmo!'
                },
                {property: "twitter:image", content: '/img/dra-erika-queiroz-fisioterapeuta-especialista-ortopedista-pilates-guarulhos.webp'},
            ],
            script: [
                {async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-CKRGQWZPQY'},
                {
                    hid: 'gtm',
                    innerHTML: `  window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-CKRGQWZPQY');`,
                    type: 'text/javascript'
                }
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
