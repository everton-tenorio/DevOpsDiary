<script setup lang="ts">
const STORAGE_KEY = 'social_popup_dismissed'
const RESHOW_DAYS = 7
const MAX_SHOWS_PER_SESSION = 2
const TIMER_DELAY_MS = import.meta.client && window.innerWidth < 640 ? 5000 : 12000
const SECOND_SHOW_DELAY_MS = 90000 // 90s after first dismiss

const isVisible = ref(false)
const sessionShows = ref(0)
let timer: ReturnType<typeof setTimeout> | null = null

const isPermanentlyDismissed = (): boolean => {
  if (!import.meta.client) return false
  const dismissed = localStorage.getItem(STORAGE_KEY)
  if (!dismissed) return false
  const daysSince = (Date.now() - Number(dismissed)) / (1000 * 60 * 60 * 24)
  return daysSince < RESHOW_DAYS
}

const show = (): void => {
  if (isVisible.value) return
  if (isPermanentlyDismissed()) return
  if (sessionShows.value >= MAX_SHOWS_PER_SESSION) return
  isVisible.value = true
  sessionShows.value++
  cleanup()
}

const dismiss = (): void => {
  isVisible.value = false
  // Only persist to localStorage after the user has dismissed both times
  if (sessionShows.value >= MAX_SHOWS_PER_SESSION) {
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, String(Date.now()))
    }
    return
  }
  // Schedule second appearance
  timer = setTimeout(show, SECOND_SHOW_DELAY_MS)
}

const onExitIntent = (e: MouseEvent): void => {
  if (e.clientY <= 10) show()
}

const cleanup = (): void => {
  if (timer) clearTimeout(timer)
  if (import.meta.client) {
    document.removeEventListener('mouseleave', onExitIntent)
  }
}

onMounted(() => {
  if (isPermanentlyDismissed()) return
  timer = setTimeout(show, TIMER_DELAY_MS)
  if (window.innerWidth >= 640) {
    document.addEventListener('mouseleave', onExitIntent)
  }
})

onBeforeUnmount(cleanup)
</script>

<template>
  <Transition name="popup">
    <div
      v-if="isVisible"
      class="fixed inset-0 z-[9999] flex items-center justify-center p-4"
    >
      <!-- Backdrop -->
      <div
        class="absolute inset-0 bg-black/75 backdrop-blur-sm"
        @click="dismiss"
      />

      <!-- Panel -->
      <div class="relative w-full max-w-sm bg-[#0d1117] border border-green-400/40 rounded-xl shadow-[0_0_50px_rgba(74,222,128,0.12)] overflow-hidden">

        <!-- Terminal bar -->
        <div class="flex items-center gap-2 px-4 py-2.5 bg-[#161b22] border-b border-green-400/20">
          <div class="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div class="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span class="ml-2 font-mono text-xs text-gray-500">~/devopsdiary/follow</span>
          <button
            class="ml-auto text-gray-600 hover:text-gray-300 transition-colors text-xl leading-none pb-0.5"
            aria-label="Close"
            @click="dismiss"
          >
            ×
          </button>
        </div>

        <!-- Content -->
        <div class="p-6">
          <h2 class="font-mono font-bold text-white text-lg leading-snug mb-2">
            <span class="text-[#49da7e]">@devopsdiary.site</span><br />Short format. Free.
          </h2>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            Docker, Kubernetes, CI/CD and IaC tips - under 60 seconds.
            Follow us where you hang out.
          </p>

          <!-- Buttons -->
          <div class="flex flex-col gap-3">
            <!-- Instagram -->
            <a
              href="https://instagram.com/devopsdiary.site"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 hover:border-purple-400/60 hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-200 group"
              @click="dismiss"
            >
              <svg class="w-5 h-5 text-pink-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <div class="flex-1 min-w-0">
                <div class="text-white text-sm font-semibold font-mono">Follow on Instagram</div>
                <div class="text-gray-500 text-xs font-mono">@devopsdiary.site</div>
              </div>
              <svg class="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>

            <!-- TikTok -->
            <a
              href="https://tiktok.com/@devopsdiary.site"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#161b22] border border-gray-700/50 hover:border-green-400/40 hover:bg-[#1c2128] transition-all duration-200 group"
              @click="dismiss"
            >
              <svg class="w-5 h-5 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
              </svg>
              <div class="flex-1 min-w-0">
                <div class="text-white text-sm font-semibold font-mono">Follow on TikTok</div>
                <div class="text-gray-500 text-xs font-mono">@devopsdiary.site</div>
              </div>
              <svg class="w-4 h-4 text-gray-600 group-hover:text-green-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <!-- Dismiss -->
          <button
            class="mt-4 w-full text-center text-xs text-gray-600 hover:text-gray-400 transition-colors font-mono py-1"
            @click="dismiss"
          >
            maybe later
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.popup-enter-active {
  transition: opacity 0.3s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.popup-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.popup-enter-from {
  opacity: 0;
  transform: scale(0.94);
}
.popup-leave-to {
  opacity: 0;
  transform: scale(0.97);
}
</style>