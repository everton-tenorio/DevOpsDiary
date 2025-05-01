import markdownIt from 'markdown-it';
import frontMatter from 'front-matter';
import hljs from 'highlight.js';
import sanitizeHtml from 'sanitize-html';
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
        const highlighted = hljs.highlight(str, { language: lang }).value;
        return `<pre><code class="hljs language-${lang}">${highlighted}</code></pre>`;
      } catch (err) {
        console.error(`Highlight.js failed for language "${lang}":`, err);
      }
    }
    return `<pre><code class="hljs">${md.utils.escapeHtml(str)}</code></pre>`;
  },
});

// Configuração para sanitize-html
const sanitizeOptions = {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat(['pre', 'code', 'span']),
  allowedAttributes: {
    ...sanitizeHtml.defaults.allowedAttributes,
    code: ['class'],
    pre: ['class'],
    span: ['class'],
  },
  disallowedTagsMode: 'discard',
};

/**
 * Parse markdown content into structured project data
 * @param {string} markdown - Raw markdown content
 * @returns {Object} - Structured project data
 */
export function parseMarkdown(markdown) {
  let attributes, body;
  try {
    const parsed = frontMatter(markdown);
    attributes = parsed.attributes;
    body = parsed.body;
  } catch (err) {
    console.error('Error parsing frontmatter:', err);
    return {
      title: 'Error',
      description: 'Failed to parse project content.',
      tags: [],
      overview: '',
      prerequisites: [],
      steps: [],
      resources: [],
      stretchGoal: '',
      communitySolutions: [],
    };
  }

  const projectData = {
    title: attributes.title || 'Untitled Project',
    description: attributes.description || 'No description available.',
    tags: Array.isArray(attributes.tags) ? attributes.tags : [],
    overview: '',
    prerequisites: [],
    steps: [],
    resources: [],
    stretchGoal: '',
    communitySolutions: [],
  };

  const sections = body.split(/^##\s+/m).filter(Boolean);

  sections.forEach((section) => {
    const lines = section.split('\n');
    const sectionTitle = lines[0].trim();
    const sectionContent = lines.slice(1).join('\n').trim();

    switch (sectionTitle.toLowerCase()) {
      case 'overview':
      case 'requirements': // Tratar Requirements como Overview
        projectData.overview = sanitizeHtml(md.render(sectionContent), sanitizeOptions);
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
      case 'stretch goal':
        projectData.stretchGoal = sanitizeHtml(md.render(sectionContent), sanitizeOptions);
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
  return items.map((item) => sanitizeHtml(md.renderInline(item), sanitizeOptions));
}

/**
 * Parse steps section into structured steps
 * @param {string} content - Steps section content
 * @returns {Array} - Array of step objects
 */
function parseSteps(content) {
  const stepSections = content.split(/^###\s+/m).filter(Boolean);

  return stepSections.map((stepSection) => {
    const lines = stepSection.split('\n');
    const title = lines[0].trim();
    const content = lines.slice(1).join('\n').trim();

    const blocks = [];
    let currentText = '';
    let inCodeBlock = false;
    let codeLang = null;
    let codeContent = '';

    content.split('\n').forEach((line) => {
      const codeBlockStart = line.match(/^```(\w+)?/);
      if (codeBlockStart) {
        if (inCodeBlock) {
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
          inCodeBlock = true;
          codeLang = codeBlockStart[1] || null;
        }
      } else if (inCodeBlock) {
        codeContent += line + '\n';
      } else {
        if (line.trim()) {
          currentText += line + '\n';
        } else if (currentText.trim()) {
          blocks.push({ type: 'text', content: sanitizeHtml(md.render(currentText.trim()), sanitizeOptions) });
          currentText = '';
        }
      }
    });

    if (currentText.trim()) {
      blocks.push({ type: 'text', content: sanitizeHtml(md.render(currentText.trim()), sanitizeOptions) });
    }
    if (inCodeBlock && codeContent.trim()) {
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
    }

    return { title, blocks };
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