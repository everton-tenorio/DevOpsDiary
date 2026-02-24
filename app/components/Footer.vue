<script setup lang="ts">
const commands: string[] = [
  'docker build -t devops-app .',
  'kubectl apply -f deployment.yaml',
  'git push origin main',
  'terraform apply',
  'ansible-playbook deploy.yml',
  'helm install my-release ./chart',
]

const displayedCommand = ref<string>('')
let currentCommandIndex = 0
let currentCharIndex = 0
let typingTimeout: ReturnType<typeof setTimeout> | null = null

const typeCommand = (): void => {
  if (currentCharIndex < commands[currentCommandIndex].length) {
    displayedCommand.value = commands[currentCommandIndex].substring(0, currentCharIndex + 1)
    currentCharIndex++
    typingTimeout = setTimeout(typeCommand, Math.random() * 50 + 50)
  } else {
    typingTimeout = setTimeout(eraseCommand, 2000)
  }
}

const eraseCommand = (): void => {
  if (currentCharIndex > 0) {
    displayedCommand.value = commands[currentCommandIndex].substring(0, currentCharIndex - 1)
    currentCharIndex--
    typingTimeout = setTimeout(eraseCommand, 30)
  } else {
    currentCommandIndex = (currentCommandIndex + 1) % commands.length
    typingTimeout = setTimeout(typeCommand, 500)
  }
}

onMounted(() => {
  typingTimeout = setTimeout(typeCommand, 1000)
})

onBeforeUnmount(() => {
  if (typingTimeout) clearTimeout(typingTimeout)
})
</script>

<template>
  <footer class="bg-[#161b22] border-t border-green-400/30 py-8 relative overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto bg-[#0A0E14] rounded-lg border border-green-400/30 overflow-hidden shadow-lg">
        <!-- Terminal Header -->
        <div class="bg-[#1c2128] px-4 py-2 flex items-center">
          <div class="flex space-x-2 mr-4">
            <div class="w-3 h-3 rounded-full bg-red-500" />
            <div class="w-3 h-3 rounded-full bg-yellow-500" />
            <div class="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div class="font-mono text-xs text-gray-400">~/devops-diary</div>
        </div>

        <!-- Terminal Content -->
        <div class="p-6 font-mono">
          <div class="mb-6 text-green-400">
            <span class="text-blue-400">$</span> {{ displayedCommand
            }}<span class="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse" />
          </div>

          <div class="flex flex-col md:flex-row md:items-center justify-between py-4 border-t border-green-400/20">
            <!-- Social Links -->
            <div class="flex flex-wrap gap-4 mb-6 md:mb-0">
              <a
                href="https://github.com/everton-tenorio/DevOpsDiary"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white hover:text-green-400 transition-colors duration-200 flex items-center"
              >
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.84 9.651.5.1.712-.216.712-.499 0-.254-.008-1-.008-1.834C7 19.91 6.35 18.781 6.15 18.201c-.113-.275-.6-1.181-1.025-1.435C4.775 16.566 4.275 15.974 5.125 15.964c.775-.01 1.338.767 1.525 1.052.9 1.539 2.338 1.224 2.934.941.105-.671.3-1.137.566-1.383-2.375-.246-4.85-1.103-4.85-4.973 0-1.144.412-2.092 1.375-2.842-.116-.273-.488-1.337.125-2.778 0 0 .837-.283 2.75.948a9.4 9.4 0 012.513-.337c.85 0 1.7.127 2.513.337 1.913-1.231 2.75-.948 2.75-.948.613 1.441.241 2.505.125 2.778.963.75 1.375 1.698 1.375 2.842 0 3.88-2.475 4.727-4.85 4.973.375.313.7.905.7 1.839 0 1.368-.025 2.386-.025 2.763 0 .289.237.614.737.5C19.137 20.174 22 16.576 22 12.226 22 6.703 17.523 2.226 12 2.226 6.477 2.226 2 6.478 2 12c0 5.522 4.477 10 10 10 5.523 0 10-4.478 10-10C22 6.478 17.523 2 12 2z" />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://twitter.com/hashtag/DevOpsDiary"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white hover:text-green-400 transition-colors duration-200 flex items-center"
              >
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>#DevOpsDiary</span>
              </a>
              <iframe
                src="https://github.com/sponsors/everton-tenorio/button"
                title="Sponsor everton-tenorio"
                height="32"
                width="114"
                style="border: 0; border-radius: 6px;"
              />
            </div>

            <!-- Copyright -->
            <div class="text-gray-400 text-sm font-mono">
              <span class="text-blue-400">&copy;</span> {{ new Date().getFullYear() }} DevOpsDiary
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>