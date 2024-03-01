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
          // Save content to localStorage
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
    <div style={{ maxWidth: '100%', wordWrap: 'break-word' }}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {fileContent}
      </ReactMarkdown>
    </div>
  );
};

export default GitHubFileLoader;
