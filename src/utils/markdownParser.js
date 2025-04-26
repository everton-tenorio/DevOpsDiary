// src/utils/markdownParser.js
import markdownIt from 'markdown-it';
import frontMatter from 'front-matter';
import hljs from 'highlight.js';
import yaml from 'highlight.js/lib/languages/yaml';
import dockerfile from 'highlight.js/lib/languages/dockerfile';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';
import python from 'highlight.js/lib/languages/python';

// Register languages
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('dockerfile', dockerfile);
hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('python', python);

const md = markdownIt({
  html: true,
  linkify: true,
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre><code class="hljs language-${lang}">${
          hljs.highlight(str, { language: lang }).value
        }</code></pre>`;
      } catch (err) {
        console.error(`Highlight.js failed for language "${lang}":`, err);
      }
    }
    return `<pre><code class="hljs">${md.utils.escapeHtml(str)}</code></pre>`;
  },
});
/**
 * Parse markdown content into structured project data
 * @param {string} markdown - Raw markdown content
 * @returns {Object} - Structured project data
 */
export function parseMarkdown(markdown) {
  // Parse frontmatter and body
  const { attributes, body } = frontMatter(markdown);

  // Initialize project data from frontmatter
  const projectData = {
    title: attributes.title || '',
    description: attributes.description || '',
    tags: Array.isArray(attributes.tags) ? attributes.tags : [],
    overview: '',
    prerequisites: [],
    steps: [],
    resources: [],
    communitySolutions: [], // Default empty array
  };

  // Split body into sections based on ## headers
  const sections = body.split(/^## /m).filter(Boolean);

  sections.forEach((section) => {
    const lines = section.split('\n');
    const sectionTitle = lines[0].trim();
    const sectionContent = lines.slice(1).join('\n').trim();

    switch (sectionTitle.toLowerCase()) {
      case 'overview':
        projectData.overview = md.render(sectionContent);
        break;
      case 'prerequisites':
        projectData.prerequisites = parseListItems(sectionContent);
        break;
      case 'steps':
        projectData.steps = parseSteps(sectionContent);
        break;
      case 'resources':
        projectData.resources = parseResources(sectionContent);
        break;
    }
  });

  return projectData;
}

/**
 * Parse list items from markdown content
 * @param {string} content - Markdown content with list items
 * @returns {Array} - Array of rendered HTML list items
 */
function parseListItems(content) {
  const items = content
    .split('\n')
    .filter((line) => line.trim().startsWith('- '))
    .map((line) => line.replace(/^-\s+/, '').trim());
  return items.map((item) => md.renderInline(item));
}

/**
 * Parse steps section into structured steps
 * @param {string} content - Steps section content
 * @returns {Array} - Array of step objects
 */
function parseSteps(content) {
  const stepSections = content.split(/^### /m).filter(Boolean);

  return stepSections.map((stepSection) => {
    const lines = stepSection.split('\n');
    const title = lines[0].trim();
    const content = lines.slice(1).join('\n').trim();

    // Split content into blocks (text or code)
    const blocks = [];
    let currentText = '';
    let inCodeBlock = false;
    let codeLang = null;
    let codeContent = '';

    content.split('\n').forEach((line) => {
      if (line.match(/^```(\w+)?/)) {
        if (inCodeBlock) {
          // End of code block
          inCodeBlock = false;
          let highlightedCode;
          try {
            highlightedCode = codeLang && hljs.getLanguage(codeLang)
              ? hljs.highlight(codeContent, { language: codeLang }).value
              : md.utils.escapeHtml(codeContent);
          } catch (err) {
            console.error(`Highlight.js failed for language "${codeLang}":`, err);
            highlightedCode = md.utils.escapeHtml(codeContent);
          }
          blocks.push({ type: 'code', lang: codeLang, content: highlightedCode });
          codeContent = '';
          codeLang = null;
        } else {
          // Start of code block
          inCodeBlock = true;
          codeLang = line.match(/^```(\w+)/)?.[1] || null;
        }
      } else if (inCodeBlock) {
        codeContent += line + '\n';
      } else {
        if (line.trim()) {
          currentText += line + '\n';
        } else if (currentText.trim()) {
          // End of text block
          blocks.push({ type: 'text', content: md.render(currentText.trim()) });
          currentText = '';
        }
      }
    });

    // Handle any remaining text
    if (currentText.trim()) {
      blocks.push({ type: 'text', content: md.render(currentText.trim()) });
    }

    return {
      title,
      blocks, // Array of { type: 'text' | 'code', content: string, lang?: string }
    };
  });
}

/**
 * Parse resources section into structured resources
 * @param {string} content - Resources section content
 * @returns {Array} - Array of resource objects
 */
function parseResources(content) {
  return content
    .split('\n')
    .filter((line) => line.trim().startsWith('- '))
    .map((line) => {
      const linkMatch = line.match(/\[([^\]]+)\]\(([^)]+)\)/);
      const isPaid = line.toLowerCase().includes('(paid)');

      if (linkMatch) {
        return {
          title: linkMatch[1],
          url: linkMatch[2],
          isPaid,
        };
      }

      const text = line.replace(/^-\s+/, '').trim();
      return {
        title: text,
        url: '#',
        isPaid,
      };
    });
}

