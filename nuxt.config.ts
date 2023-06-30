// https://nuxt.com/docs/api/configuration/nuxt-config
import headMetaTags from "./utils/headMetaTags";

export default defineNuxtConfig({
    build: undefined,
    app: {
        head: {
            htmlAttrs: {lang: 'pt-br'},
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.png'},
                {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
                {rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: 'anonymous'},
            ],
            meta: headMetaTags,
            script: [
                {async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-CKRGQWZPQY'},
                {
                    hid: 'gtm',
                    innerHTML: `  window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-CKRGQWZPQY');`,
                    type: 'text/javascript'
                },
                {
                    type: "application/ld+json",
                    innerHTML: JSON.stringify({
                        "@context": "https://fisioerikaqueiroz.vercel.app/",
                        "@type": "Person",
                        "headline": "Dra. Erika Queiroz - Fisioterapeuta Ortopedista",
                        "image": [
                            "https://fisioerikaqueiroz.vercel.app/profile/profile-erika-queiroz-fisioterapeuta-ortopedista-1x1.jpg",
                            "https://fisioerikaqueiroz.vercel.app/profile/profile-erika-queiroz-fisioterapeuta-ortopedista-4x3.jpg",
                            "https://fisioerikaqueiroz.vercel.app/profile/profile-erika-queiroz-fisioterapeuta-ortopedista-16x9.jpg"
                        ],
                        "author": [
                            {
                                "@type": "Person",
                                "name": "Erika Queiroz",
                                "url": "https://fisioerikaqueiroz.vercel.app/"
                            }
                        ]
                    })
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
    }
})
