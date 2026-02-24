// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: { compatibilityVersion: 4 },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
  ],

  nitro: {
    preset: 'static',
  },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL ?? '/',
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: 'DevOps, CI/CD, Docker, Kubernetes, Terraform, Ansible, GitOps, IaC, DevSecOps, SRE' },
        { property: 'og:title', content: '#DevOpsDiary' },
        { property: 'og:description', content: 'Hands-on DevOps projects for all skill levels.' },
        { property: 'og:image', content: 'https://devopsdiary.site/devopsdiary.png' },
        { property: 'og:url', content: 'https://devopsdiary.site' },
        { property: 'og:type', content: 'website' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: '#DevOpsDiary' },
        { property: 'twitter:description', content: 'Hands-on DevOps projects for all skill levels.' },
        { property: 'twitter:image', content: 'https://devopsdiary.site/devopsdiary.png' },
      ],
      link: [
        { rel: 'canonical', href: 'https://devopsdiary.site' },
      ],
      title: 'DevOpsDiary | Hands-On DevOps Projects for All Levels',
    },
  },
})