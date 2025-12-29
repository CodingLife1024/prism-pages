import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './../PageLoader/pageloader.module.css';

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

  const renderProgress = ({ node, ...props }) => {
    if (node.children[0]?.type === 'element' && node.children[0]?.tagName === 'progress') {
      return <div {...props} />;

    }
    return <p {...props} />;
  };

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
            className={styles.markdown}
            components={{
            img: ({ node, ...props }) => <img {...props} style={{ maxWidth: '100%', height: 'auto' }} alt="" />,
            table: ({ node, ...props }) => <table {...props} style={{ borderCollapse: 'collapse', width: '100%', marginBottom: '1rem' }} />,
            th: ({ node, children, ...props }) => {
              const index = node.position?.start.column - 1;
              const style = {
                width: ['5%', '30%', '15%', '20%', '20%'][index] || '20%', // Set the width of the column
                border: '1px solid #ddd',
                padding: '8px',
                textAlign: 'center', // Center align the header text
                verticalAlign: 'middle', // Vertically center the content
              };
              return <th {...props} style={style}>{children}</th>;
            },
            td: ({ node, children, ...props }) => {
              const index = node.position?.start.column - 1;
              const style = {
                width: ['5%', '30%', '15%', '20%', '20%'][index] || '20%', // Set the width of the column
                border: '1px solid #ddd',
                padding: '8px',
                textAlign: 'center', // Center align the header text
                verticalAlign: 'middle', // Vertically center the content
              };
              return <td {...props} style={style}>{children}</td>;
            },
            p: renderProgress,
            progress: ({ node, ...props }) => <progress {...props} style={{ width: '100%' }} />,
          }}
        >
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
