<template>
  <footer class="bg-terminal-black-light border-t border-terminal-green/30 py-8 relative overflow-hidden">
    <div class="container mx-auto px-4">
      <!-- Terminal Window Effect -->
      <div class="max-w-3xl mx-auto bg-terminal-black rounded-lg border border-terminal-green/30 overflow-hidden shadow-lg">
        <!-- Terminal Header -->
        <div class="bg-terminal-black-lighter px-4 py-2 flex items-center">
          <div class="flex space-x-2 mr-4">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div class="font-mono text-xs text-terminal-gray">~/devops-diary</div>
        </div>
        
        <!-- Terminal Content -->
        <div class="p-6 font-mono">
          <!-- Command Line Typing Effect -->
          <div class="mb-6 text-terminal-green">
            <span class="text-terminal-blue">$</span> {{ displayedCommand }}<span class="inline-block w-2 h-4 bg-terminal-green ml-1 animate-cursor-blink"></span>
          </div>
          
          <!-- Terminal Information -->
          <div class="flex flex-col md:flex-row md:items-center justify-between py-4 border-t border-terminal-green/20">
            <!-- Social Links -->
            <div class="flex flex-wrap gap-4 mb-6 md:mb-0">
              <a href="https://github.com/everton-tenorio/DevOpsDiary" target="_blank" class="text-terminal-white hover:text-terminal-green transition-colors duration-200 flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.167 8.84 21.651C9.34 21.751 9.552 21.435 9.552 21.152C9.552 20.898 9.544 20.152 9.544 19.318C7 19.91 6.35 18.781 6.15 18.201C6.037 17.926 5.55 17.02 5.125 16.766C4.775 16.566 4.275 15.974 5.125 15.964C5.9 15.954 6.463 16.731 6.650 17.016C7.55 18.555 8.988 18.24 9.584 17.957C9.689 17.286 9.884 16.82 10.150 16.574C7.775 16.328 5.3 15.471 5.3 11.601C5.3 10.457 5.712 9.509 6.675 8.759C6.559 8.486 6.187 7.422 6.774 5.981C6.774 5.981 7.611 5.698 9.524 6.929C10.337 6.685 11.187 6.563 12.037 6.563C12.887 6.563 13.737 6.69 14.55 6.929C16.463 5.698 17.3 5.981 17.3 5.981C17.887 7.422 17.515 8.486 17.399 8.759C18.362 9.509 18.774 10.457 18.774 11.601C18.774 15.481 16.3 16.328 13.925 16.574C14.3 16.887 14.625 17.479 14.625 18.413C14.625 19.781 14.6 20.799 14.6 21.176C14.6 21.465 14.837 21.79 15.337 21.676C19.137 20.174 22 16.576 22 12.226C22 6.703 17.523 2.226 12 2.226C6.477 2.226 2 6.478 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.478 17.523 2 12 2Z"/>
                </svg>
                <span class="font-mono">GitHub</span>
              </a>
              <a href="https://twitter.com/hashtag/DevOpsDiary" target="_blank" class="text-terminal-white hover:text-terminal-green transition-colors duration-200 flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
                <span class="font-mono">#DevOpsDiary</span>
              </a>
              <iframe src="https://github.com/sponsors/everton-tenorio/button" 
                title="Sponsor everton-tenorio" 
                height="32" width="114" 
                style="border: 0; border-radius: 6px;">
              </iframe>
              <!--<a href="https://buymeacoffee.com" target="_blank" class="text-terminal-white hover:text-terminal-green transition-colors duration-200 flex items-center pl-10">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.12.974a.544.544 0 01-.126.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z"></path>
                </svg>
                <span class="font-mono">Buy Me a Coffee</span>
              </a>-->
            </div>
            
            <!-- Copyright -->
            <div class="text-terminal-gray text-sm font-mono">
              <span class="text-terminal-blue">&copy;</span> {{ new Date().getFullYear() }} DevOpsDiary
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const commands = [
  'docker build -t devops-app .',
  'kubectl apply -f deployment.yaml',
  'git push origin main',
  'terraform apply',
  'ansible-playbook deploy.yml',
  'helm install my-release ./chart'
];

const displayedCommand = ref('');
let currentCommandIndex = 0;
let currentCharIndex = 0;
let typingInterval = null;
let pauseTimeout = null;

const typeCommand = () => {
  if (currentCharIndex < commands[currentCommandIndex].length) {
    displayedCommand.value = commands[currentCommandIndex].substring(0, currentCharIndex + 1);
    currentCharIndex++;
    typingInterval = setTimeout(typeCommand, Math.random() * 50 + 50); // Random typing speed for realism
  } else {
    pauseTimeout = setTimeout(eraseCommand, 2000);
  }
};

const eraseCommand = () => {
  if (currentCharIndex > 0) {
    displayedCommand.value = commands[currentCommandIndex].substring(0, currentCharIndex - 1);
    currentCharIndex--;
    typingInterval = setTimeout(eraseCommand, 30);
  } else {
    currentCommandIndex = (currentCommandIndex + 1) % commands.length;
    pauseTimeout = setTimeout(typeCommand, 500);
  }
};

onMounted(() => {
  pauseTimeout = setTimeout(typeCommand, 1000);
});

onBeforeUnmount(() => {
  clearTimeout(typingInterval);
  clearTimeout(pauseTimeout);
});
</script>