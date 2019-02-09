import hljs from 'highlight.js/lib/highlight';
import rust from 'highlight.js/lib/languages/rust';

hljs.registerLanguage('rust', rust);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('code').forEach(block => {
    hljs.highlightBlock(block);
  });
});
