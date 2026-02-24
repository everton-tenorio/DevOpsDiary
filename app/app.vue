<script setup lang="ts">
// Global app setup — components auto-imported by Nuxt
</script>

<template>
  <div class="bg-[#0A0E14] min-h-screen flex flex-col font-sans relative overflow-hidden">
    <div class="absolute inset-0 opacity-10 pointer-events-none bg-[length:40px_40px] bg-[linear-gradient(to_right,#4ADE8015_1px,transparent_1px),linear-gradient(to_bottom,#4ADE8015_1px,transparent_1px)]" />
    <Header />
    <main class="flex-grow container mx-auto px-4 py-8 relative z-10">
      <NuxtPage />
    </main>
    <Footer />
    <SocialFollowPopup />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@400;500;600&display=swap');

body {
  font-family: 'Inter', sans-serif;
  background-color: #0A0E14;
  color: rgba(0, 0, 0, 0.635);
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5, h6, code, pre {
  font-family: 'JetBrains Mono', monospace;
}

.terminal-glow {
  box-shadow: 0 0 10px rgba(74, 222, 128, 0.5);
  animation: glow 1.5s ease-in-out infinite alternate;
}

* {
  scrollbar-width: thin;
  scrollbar-color: #4ADE80 #1C2128;
}

::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: #1C2128; border-radius: 3px; }
::-webkit-scrollbar-thumb { background-color: #4ADE80; border-radius: 3px; }

.typing-cursor::after {
  content: '|';
  display: inline-block;
  animation: cursor-blink 1s step-end infinite;
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes glow {
  0% { box-shadow: 0 0 5px rgba(74, 222, 128, 0.5); }
  100% { box-shadow: 0 0 20px rgba(74, 222, 128, 0.8); }
}
</style>