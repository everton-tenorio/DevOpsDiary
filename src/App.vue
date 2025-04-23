<template>
  <div class="bg-white min-h-screen flex flex-col font-sans relative overflow-hidden">
    <!-- Background Grid Pattern -->
    <div class="absolute inset-0 bg-grid-pattern bg-grid opacity-10 pointer-events-none"></div>
    
    <!-- Scanline Effect -->
    <div class="scanline pointer-events-none"></div>
    
    <Header />
    <main class="flex-grow container mx-auto px-4 py-8 relative z-10">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@400;500;600&display=swap');

body {
  font-family: 'Inter', sans-serif;
  background-color: #0A0E14;
  color: #000000a2;
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5, h6, code, pre {
  font-family: 'JetBrains Mono', monospace;
}

/* Scanline effect */
.scanline {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(74, 222, 128, 0.1);
  z-index: 999;
  animation: scanline 6s linear infinite;
  pointer-events: none;
  opacity: 0.5;
}

/* Terminal glow for highlighted elements */
.terminal-glow {
  box-shadow: 0 0 10px rgba(74, 222, 128, 0.5);
  animation: glow 1.5s ease-in-out infinite alternate;
}

/* CRT monitor style flicker */
@keyframes flicker {
  0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
    opacity: 1;
  }
  20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
    opacity: 0.8;
  }
}

/* Custom scrollbars */
* {
  scrollbar-width: thin;
  scrollbar-color: #4ADE80 #1C2128;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: #1C2128;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background-color: #4ADE80;
  border-radius: 3px;
}

/* Typing cursor animation */
.typing-cursor::after {
  content: '|';
  display: inline-block;
  animation: cursor-blink 1s step-end infinite;
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes scanline {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}

@keyframes glow {
  0% { box-shadow: 0 0 5px rgba(74, 222, 128, 0.5); }
  100% { box-shadow: 0 0 20px rgba(74, 222, 128, 0.8); }
}
</style>