import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const GitHubFileLoader = ({ githubLink }) => {
  console.log('GitHubFileLoader rendered with githubLink:', githubLink);
  const [fileContent, setFileContent] = useState(() => {
    // Try to load content from localStorage on component mount
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
  }, [githubLink]);

  return (
    <div style={{ maxWidth: '100%', wordWrap: 'break-word', height: 'fit-content'}}>
      {/* Include remarkGfm plugin in the ReactMarkdown component */}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} // Here's the change
        components={{
          img: ({ node, ...props }) => (
            <img {...props} style={{ width: '100%' }} alt="" />
          ),
          table: ({ node, ...props }) => (
            <table {...props} style={{
              borderCollapse: 'collapse',
              width: '100%'
            }} />
          ),
          th: ({ node, ...props }) => (
            <th {...props} style={{
              border: '1px solid #ddd',
              padding: '8px'
            }} />
          ),
          td: ({ node, ...props }) => (
            <td {...props} style={{
              border: '1px solid #ddd',
              padding: '8px'
            }} />
          )
        }}
      >
        {fileContent}
      </ReactMarkdown>
    </div>
  );
};

export default GitHubFileLoader;
