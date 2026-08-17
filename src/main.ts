import '@/assets/portfolio.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import posthog from 'posthog-js'

import App from './App.vue'
import router from './router'

const token = import.meta.env.VITE_POSTHOG_PROJECT_TOKEN as string | undefined
const host = import.meta.env.VITE_POSTHOG_HOST as string | undefined

if (!token) {
  if (import.meta.env.DEV) {
    console.error(
      'VITE_POSTHOG_PROJECT_TOKEN variable required by PostHog is missing or un-configured, ' +
        'this causes events to be silently missed. ' +
        'This error stops appearing once VITE_POSTHOG_PROJECT_TOKEN is configured',
    )
  }
} else {
  posthog.init(token, {
    api_host: host || 'https://eu.i.posthog.com',
    defaults: '2026-01-30',
  })
}

const app = createApp(App)

app.config.errorHandler = (err) => {
  if (token) posthog.captureException(err)
}

app.use(createPinia())
app.use(router)

app.mount('#app')
