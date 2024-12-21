import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const GitHubFileLoader = ({ githubLink }) => {
  console.log('GitHubFileLoader rendered with githubLink:', githubLink);
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

    // Cleanup function
    return () => {
      localStorage.removeItem('githubFileContent');
    };
  }, [githubLink]);

  return (
    <div style={{ maxWidth: '100%', padding: '30px' }}>
      {fileContent ? (
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            img: ({ node, ...props }) => <img {...props} style={{ width: '100%' }} alt="" />,
            table: ({ node, ...props }) => <table {...props} style={{ borderCollapse: 'collapse', width: '100%' }} />,
            th: ({ node, ...props }) => <th {...props} style={{ border: '1px solid #ddd', padding: '8px' }} />,
            td: ({ node, ...props }) => <td {...props} style={{ border: '1px solid #ddd', padding: '8px' }} />,
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