import { onMounted, onUnmounted } from 'vue'

export function useReveal() {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal')
    const vh = window.innerHeight || document.documentElement.clientHeight

    els.forEach((el) => {
      const r = el.getBoundingClientRect()
      if (r.top < vh - 20 && r.bottom > 0) el.classList.add('in')
    })

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            observer?.unobserve(e.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -10% 0px' },
    )

    els.forEach((el) => {
      if (!el.classList.contains('in')) observer?.observe(el)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
    observer = null
  })
}
