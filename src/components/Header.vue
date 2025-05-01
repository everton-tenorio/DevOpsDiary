<template>
  <header class="bg-terminal-black-light border-b border-terminal-green/30 sticky top-0 z-50 backdrop-blur-sm">
    <div class="container mx-auto px-4 py-3">
      <div class="flex flex-wrap items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="text-xl font-mono font-bold text-terminal-green hover:text-terminal-white transition-colors duration-200 terminal-logo">
            <span class="text-terminal-white">#</span>DevOpsDiary
          </router-link>
        </div>
        
        <!-- Mobile Menu Button -->
        <button 
          @click="isMenuOpen = !isMenuOpen" 
          class="md:hidden p-2 text-terminal-green border border-terminal-green/30 rounded hover:bg-terminal-green hover:text-terminal-black transition-colors"
        >
          <span v-if="isMenuOpen">Close</span>
          <span v-else>Menu</span>
        </button>
        
        <!-- Navigation - Desktop -->
        <nav class="hidden md:flex items-center space-x-6">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path" 
            :to="link.path"
            class="font-mono text-terminal-white hover:text-terminal-green border-b-2 border-transparent hover:border-terminal-green pb-1 transition-all duration-200"
            :class="{ 'border-terminal-green text-terminal-green': isCurrentRoute(link.path) }"
          >
            {{ link.name }}
          </router-link>
          <iframe src="https://github.com/sponsors/everton-tenorio/button" 
            title="Sponsor everton-tenorio" 
            height="32" width="114" 
            style="border: 0; border-radius: 6px; margin-top:-5px">
          </iframe>
        </nav>
      </div>
      
      <!-- Mobile Menu -->
      <div 
        v-if="isMenuOpen" 
        class="md:hidden pt-4 pb-2 border-t border-terminal-green/30 mt-3 animated-fade-in"
      >
        <nav class="flex flex-col space-y-3">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path" 
            :to="link.path"
            class="font-mono text-terminal-white hover:text-terminal-green py-2 px-3 rounded hover:bg-terminal-black-lighter transition-colors"
            :class="{ 'bg-terminal-black-lighter text-terminal-green': isCurrentRoute(link.path) }"
            @click="isMenuOpen = false"
          >
            {{ link.name }}
          </router-link>
          <iframe src="https://github.com/sponsors/everton-tenorio/button" 
            title="Sponsor everton-tenorio" 
            height="32" width="114" 
            style="border: 0; border-radius: 6px; margin-top:20px">
          </iframe>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isMenuOpen = ref(false);

const navLinks = [
  { name: 'Home', path: '/' },
  //{ name: 'Community', path: '/community' },
  { name: 'About', path: '/about' }
];

const isCurrentRoute = (path) => {
  if (path === '/' && route.path === '/') return true;
  if (path !== '/' && route.path.startsWith(path)) return true;
  return false;
};
</script>

<style scoped>
.terminal-logo {
  position: relative;
  padding: 0 4px;
}

.terminal-logo::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: radial-gradient(circle at center, rgba(74, 222, 128, 0.2) 0%, transparent 70%);
  z-index: -1;
  opacity: 0.8;
}

.animated-fade-in {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>