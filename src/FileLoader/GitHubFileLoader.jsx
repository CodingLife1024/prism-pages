import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const GitHubFileLoader = ({ githubLink }) => {
  const [fileContent, setFileContent] = useState('');
  const markdownRef = useRef(null);

  // Load MathJax with inline math config
  useEffect(() => {
    if (!window.MathJax) {
      window.MathJax = {
        tex: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          displayMath: [['$$', '$$']],
        },
        svg: {
          fontCache: 'global'
        }
      };

      const script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  // Fetch GitHub content
  useEffect(() => {
    const stored = localStorage.getItem('githubFileContent');
    if (stored) {
      setFileContent(atob(stored));
    }

    const fetchContent = async () => {
      try {
        const response = await axios.get(githubLink);
        const data = response.data;

        if (data.content) {
          const decoded = atob(data.content);
          localStorage.setItem('githubFileContent', data.content);
          setFileContent(decoded);
        } else {
          console.error("No content found:", data);
        }
      } catch (err) {
        console.error("Error fetching GitHub content:", err);
      }
    };

    fetchContent();

    return () => localStorage.removeItem('githubFileContent');
  }, [githubLink]);

  // Typeset math when content updates
  useEffect(() => {
    if (window.MathJax && markdownRef.current) {
      window.MathJax.typesetPromise([markdownRef.current]);
    }
  }, [fileContent]);

  return (
    <div style={{ maxWidth: '100%', padding: '30px', overflowY: 'auto' }}>
      {fileContent ? (
        <div ref={markdownRef}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="markdown">
            {fileContent}
          </ReactMarkdown>
        </div>
      ) : (
        <p>Loading content...</p>
      )}
    </div>
  );
};

export default GitHubFileLoader;
