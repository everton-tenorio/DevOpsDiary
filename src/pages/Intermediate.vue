<template>
  <div>
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-mono font-bold text-terminal-green mb-8">Intermediate DevOps Projects</h1>
      <p class="mb-8">
        Take your skills to the next level with these intermediate projects. Basic knowledge of Docker, Git, and command-line tools recommended.
      </p>

      <div class="flex pb-8 space-x-4">
          <router-link :to="`/`" class="text-terminal-green hover:underline">
            ← Home
          </router-link>
      </div>

      <div v-if="loading" class="text-center py-12">
        <div class="text-terminal-green font-mono">Loading projects...</div>
      </div>
      <div v-else-if="error" class="bg-red-900 text-white p-4 rounded mb-8">
        {{ error }}
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in projects"
          :key="project.slug"
          :project="project"
          level="intermediate"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProjectCard from '../components/ProjectCard.vue';

const loading = ref(true);
const error = ref(null);
const projects = ref([]);

// Use Vite's import.meta.glob to get all markdown files in the intermediate directory
const projectFiles = import.meta.glob('/projects/intermediate/*.md', { query: '?raw', import: 'default', eager: false });

// Parse frontmatter from markdown content
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    console.error('Invalid frontmatter in markdown file');
    return { title: 'Untitled', description: 'No description', tags: [] };
  }
  
  const frontmatter = match[1];
  const result = {};
  
  const titleMatch = frontmatter.match(/title:\s*(.*)/);
  if (titleMatch) result.title = titleMatch[1].trim();
  
  const descMatch = frontmatter.match(/description:\s*(.*)/);
  if (descMatch) result.description = descMatch[1].trim();
  
  const tagsMatch = frontmatter.match(/tags:\s*\[(.*)\]/);
  if (tagsMatch) {
    result.tags = tagsMatch[1]
      .split(',')
      .map(tag => tag.trim().replace(/['"]/g, ''))
      .filter(tag => tag);
  } else {
    result.tags = [];
  }
  
  return result;
}

onMounted(async () => {
  try {
    const projectsData = [];
    
    for (const path in projectFiles) {
      try {
        const content = await projectFiles[path]();
        const fileName = path.split('/').pop();
        const slug = fileName.replace('.md', '');
        
        const projectData = parseFrontmatter(content);
        if (projectData.title) {
          projectsData.push({ ...projectData, slug });
        } else {
          console.warn(`Skipping project with invalid frontmatter: ${path}`);
        }
      } catch (err) {
        console.error(`Error loading project from ${path}:`, err);
      }
    }
    
    if (projectsData.length === 0) {
      error.value = 'No valid projects found. Please check the markdown files.';
    } else {
      projects.value = projectsData;
    }
    
  } catch (err) {
    console.error('Error loading projects:', err);
    error.value = 'Failed to load projects. Please try again later.';
  } finally {
    loading.value = false;
  }
});
</script>