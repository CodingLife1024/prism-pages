import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import emoji from 'remark-emoji';
import 'katex/dist/katex.min.css';
import styles from './../PageLoader/pageloader.module.css';

const getColumnStyle = (index) => {
  const widths = ['5%', '20%', '15%', '20%', '40%'];
  return { width: widths[index] || '20%' };
};

const GitHubFileLoader = ({ githubLink }) => {
  const [fileContent, setFileContent] = useState(() => {
    const storedContent = localStorage.getItem('githubFileContent');
    return storedContent ? atob(storedContent) : '';
  });

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const response = await axios.get(githubLink);
        const data = response.data;

        if (data.content) {
          const content = atob(data.content);
          localStorage.setItem('githubFileContent', data.content);
          setFileContent(content);
        } else {
          console.error('No content found in the response:', data);
        }
      } catch (error) {
        console.error('Error fetching GitHub content:', error);
      }
    };

    fetchFileContent();

    return () => {
      localStorage.removeItem('githubFileContent');
    };
  }, [githubLink]);

  const renderProgress = ({ node, ...props }) => {
    if (node.children[0]?.type === 'element' && node.children[0]?.tagName === 'progress') {
      return <div {...props} />;
    }
    return <p {...props} />;
  };

  return (
    <div style={{ maxWidth: '100%', padding: '30px', overflowY: 'auto' }}>
      {fileContent ? (
        <ReactMarkdown
          className={styles.markdown}
          remarkPlugins={[remarkGfm, remarkMath, emoji]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
          components={{
            img: ({ node, ...props }) => <img {...props} style={{ maxWidth: '100%', height: 'auto' }} alt="" />,
            table: ({ node, ...props }) => <table {...props} style={{ borderCollapse: 'collapse', width: '100%', marginBottom: '1rem' }} />,
            th: ({ node, children, ...props }) => {
              const index = node.position?.start.column - 1;
              const style = {
                ...getColumnStyle(index),
                border: '1px solid #ddd',
                padding: '8px',
              };
              return <th {...props} style={style}>{children}</th>;
            },
            td: ({ node, children, ...props }) => {
              const index = node.position?.start.column - 1;
              const style = {
                ...getColumnStyle(index),
                border: '1px solid #ddd',
                padding: '8px',
              };
              return <td {...props} style={style}>{children}</td>;
            },
            p: renderProgress,
            progress: ({ node, ...props }) => <progress {...props} style={{ width: '100%' }} />,
          }}
        >
          {fileContent}
        </ReactMarkdown>
      ) : (
        <p>Loading content...</p>
      )}
    </div>
  );
};

export default GitHubFileLoader;
