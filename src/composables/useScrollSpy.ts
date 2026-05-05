import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollSpy(ids: readonly string[]) {
  const active = ref<string>(ids[0] ?? '')
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) active.value = e.target.id
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((s) => observer?.observe(s))
  })

  onUnmounted(() => {
    observer?.disconnect()
    observer = null
  })

  return active
}
