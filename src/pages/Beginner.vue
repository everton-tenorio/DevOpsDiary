<template>
  <div>
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-mono font-bold text-terminal-green mb-8">Beginner DevOps Projects</h1>
      <p class="mb-8">
        Start your DevOps journey with these beginner-friendly projects. No previous DevOps experience required.
      </p>
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
          level="beginner"
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

// Use Vite's import.meta.glob to get all markdown files in the beginner directory
const projectFiles = import.meta.glob('/projects/beginner/*.md', { as: 'raw' });

// Parse frontmatter from markdown content
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);
  
  if (!match) return {};
  
  const frontmatter = match[1];
  const result = {};
  
  // Parse title
  const titleMatch = frontmatter.match(/title:\s*(.*)/);
  if (titleMatch) result.title = titleMatch[1].trim();
  
  // Parse description
  const descMatch = frontmatter.match(/description:\s*(.*)/);
  if (descMatch) result.description = descMatch[1].trim();
  
  // Parse tags
  const tagsMatch = frontmatter.match(/tags:\s*\[(.*)\]/);
  if (tagsMatch) {
    result.tags = tagsMatch[1]
      .split(',')
      .map(tag => tag.trim().replace(/['"]/g, ''));
  }
  
  return result;
}

onMounted(async () => {
  try {
    const projectsData = [];
    
    // Process each project file
    for (const path in projectFiles) {
      try {
        // Get the raw markdown content
        const content = await projectFiles[path]();
        
        // Extract the slug from the file path
        const fileName = path.split('/').pop();
        const slug = fileName.replace('.md', '');
        
        // Parse the frontmatter
        const projectData = parseFrontmatter(content);
        
        // Add the slug to the project data
        projectsData.push({
          ...projectData,
          slug
        });
      } catch (err) {
        console.error(`Error loading project from ${path}:`, err);
      }
    }
    
    // Set the projects data
    projects.value = projectsData;
    
  } catch (err) {
    console.error('Error loading projects:', err);
    error.value = 'Failed to load projects. Please try again later.';
  } finally {
    loading.value = false;
  }
});
</script>