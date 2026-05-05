import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollY() {
  const y = ref(0)

  const onScroll = () => {
    y.value = window.scrollY
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return y
}
