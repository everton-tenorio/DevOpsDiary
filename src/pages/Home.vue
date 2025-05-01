<template>
  <div class="flex flex-col items-center text-center">
    <!-- Hero Section -->
    <div class="w-full max-w-4xl py-10 px-4">
      <h1 class="text-4xl md:text-6xl font-mono font-bold text-terminal-green mb-8">
        #DevOpsDiary
      </h1>
      
      <p class="text-xl md:text-2xl mb-12">
        Hands-on DevOps projects to level up your skills
      </p>
      
      <!-- Call to Action Buttons -->
      <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-16">
        <router-link 
          v-for="level in levels" 
          :key="level.path" 
          :to="level.path" 
          class="terminal-button"
        >
          {{ level.name }} Projects
        </router-link>
      </div>
      
      <!-- How It Works -->
      <div class="bg-gray-900 p-6 rounded-lg mb-12">
        <h2 class="text-2xl font-mono font-bold text-terminal-green mb-4">How It Works</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div class="flex flex-col items-center info-project">
            <div class="text-4xl text-terminal-green mb-4">01</div>
            <p>Pick a project that matches your skill level</p>
          </div>
          
          <div class="flex flex-col items-center info-project">
            <div class="text-4xl text-terminal-green mb-4">02</div>
            <p>Build the project following the step-by-step guide</p>
          </div>
          
          <div class="flex flex-col items-center info-project">
            <div class="text-4xl text-terminal-green mb-4">03</div>
            <p>Share on GitHub or X with #DevOpsDiary</p>
          </div>
        </div>
      </div>
      
      <!-- Community Section -
      <div class="mb-12">
        <h2 class="text-2xl font-mono font-bold text-terminal-green mb-4">Join the Community</h2>
        <p class="mb-6">
          See what others are building and share your own projects
        </p>
        <router-link to="/community" class="terminal-button">
          View Community Projects
        </router-link>
      </div>-->
    </div>
  </div>
</template>

<script setup>
const levels = [
  { name: 'Beginner', path: '/beginner' },
  { name: 'Intermediate', path: '/intermediate' },
  { name: 'Advanced', path: '/advanced' }
];
</script>

<style scoped>
.info-project{ color: #E6EDF3 }

.terminal-button {
  background: #ffffffd2; 
  border-radius: 30px;
  font-weight: bold;
}

.terminal-button:hover {
  background:#4ade80;
  border-radius: 30px;
  font-weight: bold;
}
</style>