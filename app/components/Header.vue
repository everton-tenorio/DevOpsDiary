<script setup lang="ts">
const route = useRoute()
const isMenuOpen = ref<boolean>(false)

interface NavLink {
  name: string
  path: string
}

const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
]

const isCurrentRoute = (path: string): boolean => {
  if (path === '/' && route.path === '/') return true
  if (path !== '/' && route.path.startsWith(path)) return true
  return false
}
</script>

<template>
  <header class="bg-[#161b22] border-b border-green-400/30 sticky top-0 z-50 backdrop-blur-sm">
    <div class="container mx-auto px-4 py-3">
      <div class="flex flex-wrap items-center justify-between">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="text-xl font-mono font-bold text-green-400 hover:text-white transition-colors duration-200"
        >
        <img src="/devopsdiary1.png" width="60px" />
          <!--<span class="text-white">#</span>DevOpsDiary-->
        </NuxtLink>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 text-green-400 border border-green-400/30 rounded hover:bg-green-400 hover:text-black transition-colors"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span v-if="isMenuOpen">Close</span>
          <span v-else>Menu</span>
        </button>

        <!-- Navigation - Desktop -->
        <nav class="hidden md:flex items-center space-x-6">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="font-mono text-white hover:text-green-400 border-b-2 border-transparent hover:border-green-400 pb-1 transition-all duration-200"
            :class="{ 'border-green-400 text-green-400': isCurrentRoute(link.path) }"
          >
            {{ link.name }}
          </NuxtLink>
          <iframe
            src="https://github.com/sponsors/everton-tenorio/button"
            title="Sponsor everton-tenorio"
            height="32"
            width="114"
            style="border: 0; border-radius: 6px; margin-top: -5px"
          />
        </nav>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isMenuOpen"
        class="md:hidden pt-4 pb-2 border-t border-green-400/30 mt-3 animate-[fadeIn_0.3s_ease-out]"
      >
        <nav class="flex flex-col space-y-3">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="font-mono text-white hover:text-green-400 py-2 px-3 rounded hover:bg-[#1c2128] transition-colors"
            :class="{ 'bg-[#1c2128] text-green-400': isCurrentRoute(link.path) }"
            @click="isMenuOpen = false"
          >
            {{ link.name }}
          </NuxtLink>
          <iframe
            src="https://github.com/sponsors/everton-tenorio/button"
            title="Sponsor everton-tenorio"
            height="32"
            width="114"
            style="border: 0; border-radius: 6px; margin-top: 20px"
          />
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>