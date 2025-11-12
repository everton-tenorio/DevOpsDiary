<template>
  <div class="max-w-3xl mx-auto">
    <!-- Loading State -->
    <div v-if="loading" class="text-center py-12">
      <div class="text-terminal-green font-mono">Loading project...</div>
    </div>
    
    <!-- Error State -->
    <div v-else-if="error" class="bg-red-900 text-white p-4 rounded">
      {{ error }}
    </div>
    
    <!-- Project Content -->
    <div v-else>
      <!-- Project Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-mono font-bold text-terminal-green mb-4">{{ project.title }}</h1>
        
        <div class="mb-4">
          <span 
            v-for="tag in project.tags" 
            :key="tag" 
            class="terminal-tag"
          >
            {{ tag }}
          </span>
        </div>
        
        <p class="text-lg mb-4">{{ project.description }}</p>
        
        <div class="flex space-x-4">
          <router-link :to="`/${$route.params.level}`" class="text-terminal-green hover:underline" style="color: #51df85">
            ← Back to {{ capitalizeFirstLetter($route.params.level) }}
          </router-link>
        </div>
      </div>
      
      <!-- Project Content -->
      <div class="bg-[#1c2128] text-[#E6EDF3] lg:ml-[1px] lg:mr-[1px] ml-[-20px] mr-[-20px] p-6 rounded-lg mb-8">
        <div v-if="project.overview" class="mb-6">
          <h2 class="text-xl font-mono font-bold text-terminal-green mb-4">Requirements</h2>
          <div v-html="project.overview"></div>
        </div>
        
        <div v-if="project.prerequisites && project.prerequisites.length" class="mb-6">
          <h2 class="text-xl font-mono font-bold text-terminal-green mb-4">Prerequisites</h2>
          <ul class="list-disc pl-6">
            <li v-for="(prereq, index) in project.prerequisites" :key="index" class="mb-2" v-html="prereq"></li>
          </ul>
        </div>
        
        <div v-if="project.steps && project.steps.length" class="mb-6">
          <h2 class="text-xl font-mono font-bold text-terminal-green mb-4">Steps</h2>
          <div>
            <div 
              v-for="(step, index) in project.steps" 
              :key="index"
              class="mb-6"
            >
              <h3 class="text-lg font-mono text-terminal-green mb-2">
                Step {{ index + 1 }}: {{ step.title }}
              </h3>
              <div v-for="(block, blockIndex) in step.blocks" :key="blockIndex">
                <div v-if="block.type === 'text'" v-html="block.content" class="mb-3"></div>
                <div v-if="block.type === 'code'" class="bg-[#1a1a1a] rounded pt-4 pb-4 mb-3 font-mono text-white overflow-x-auto">
                  <pre><code class="hljs" :class="block.lang ? `language-${block.lang}` : ''" v-html="block.content"></code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div v-if="project.stretchGoal" class="mb-6">
          <h2 class="text-xl font-mono font-bold text-terminal-green mb-4">Stretch Goal</h2>
          <div v-html="project.stretchGoal"></div>
        </div>
        
        <div v-if="project.resources && project.resources.length" class="mb-6">
          <h2 class="text-xl font-mono font-bold text-terminal-green mb-4">Resources</h2>
          <ul class="list-disc pl-6">
            <li v-for="(resource, index) in project.resources" :key="index" class="mb-2">
              <a :href="resource.url" target="_blank" class="text-terminal-green hover:underline">
                {{ resource.title }}
              </a>
              <span v-if="resource.isPaid" class="text-xs ml-2">(Paid Resource)</span>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Submission -->
      <div class="bg-[#1c2128] text-[#E6EDF3] p-6 rounded-lg mb-8">
        <h2 class="text-xl font-mono font-bold text-terminal-green mb-4">Submit Your Solution</h2>
        <p class="mb-4">
          Completed this project? Share your solution with the community!
        </p>
        <ol class="list-decimal pl-6 mb-6">
          <li class="mb-2">Push your code to a GitHub repository</li>
          <li class="mb-2">Open an issue on our GitHub repo with your solution link</li>
          <li class="mb-2">Share on X with the hashtag #DevOpsDiary</li>
        </ol>
        <div class="flex space-x-4">
          <a 
            :href="issueUrl"            
            target="_blank"
            class="terminal-button"
          >
            Submit Solution
          </a>
          <a 
            href="https://twitter.com/intent/tweet?hashtags=DevOpsDiary" 
            target="_blank"
            class="terminal-button"
          >
            Share on X
          </a>
        </div>
      </div>
      
      <!-- Community Solutions -->
      <div v-if="project.communitySolutions && project.communitySolutions.length" class="bg-gray-900 p-6 rounded-lg">
        <h2 class="text-xl font-mono font-bold text-terminal-green mb-4">Community Solutions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="solution in project.communitySolutions" 
            :key="solution.id"
            class="terminal-card"
          >
            <div class="font-mono text-terminal-green mb-2">@{{ solution.username }}</div>
            <p class="mb-2">{{ solution.description }}</p>
            <div class="flex space-x-3">
              <a :href="solution.githubUrl" target="_blank" class="text-terminal-green hover:underline">GitHub</a>
              <a v-if="solution.tweetUrl" :href="solution.tweetUrl" target="_blank" class="text-terminal-green hover:underline">X Post</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { parseMarkdown } from '../utils/markdownParser';

const props = defineProps({
  projectTitle: {
    type: String,
    default: ''
  }
});

const route = useRoute();
const router = useRouter();
const loading = ref(true);
const error = ref(null);
const project = ref(null);

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};


const issueUrl = computed(() => {
  let level_p = route.params.level
  const base = 'https://github.com/everton-tenorio/DevOpsDiary/issues/new'
  const template = 'project_submission.yml'
  const project_title = encodeURIComponent(props.projectTitle || project.value?.title || '');
  const level = encodeURIComponent(`${capitalizeFirstLetter(level_p)}`|| '')
  const devopsLink = encodeURIComponent(`https://devopsdiary.site/#/${route.params.level}/${route.params.slug}`)
  const repoLink = encodeURIComponent('')
  const labels = encodeURIComponent(`${level_p}` || '')

  return `${base}?template=${template}&title=&project_title=${project_title}&labels=${labels}&level=${level}&devopsdiary_link=${devopsLink}&repository_link=${repoLink}&description=`
})

onMounted(async () => {
  try {
    // Forçar rolagem para o topo
    window.scrollTo(0, 0);

    // Remover qualquer hash da URL
    if (window.location.hash) {
      await router.replace({ ...route, hash: '' });
    }

    const { level, slug } = route.params;
    
    // Fetch the markdown file using import.meta.glob
    const projectFiles = import.meta.glob('/projects/*/*.md', { query: '?raw', import: 'default', eager: false });
    const filePath = `/projects/${level}/${slug}.md`;

    if (!projectFiles[filePath]) {
      throw new Error(`Project not found at path: ${filePath}`);
    }

    const markdownContent = await projectFiles[filePath]();
    project.value = parseMarkdown(markdownContent);
    
  } catch (err) {
    console.error('Error loading project:', err);
    error.value = `Failed to load project: ${err.message}`;
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.terminal-tag {
  @apply inline-block bg-gray-800 text-terminal-green px-2 py-1 rounded mr-2 mb-2;
}
.terminal-button {
  @apply inline-block bg-terminal-green text-gray-900 px-4 py-2 rounded font-mono hover:bg-green-400;
}
.terminal-card {
  @apply bg-gray-800 p-4 rounded;
}
.hljs {
  background: transparent;
}
:deep(h2) {
  @apply text-2xl;
}
:deep(h3) {
  @apply text-xl pt-4 text-terminal-green;
}
:deep(p) {
  @apply mb-6 mt-6;
}
:deep(ul) {
  @apply list-disc pl-6 mb-4;
}
:deep(a) {
  @apply text-[#95bafd];
}
pre {
  @apply mb-4;
}

/* Evitar foco automático em links e botões no carregamento */
a:focus, button:focus {
  outline: none;
}
</style>