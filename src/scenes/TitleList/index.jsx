import React, { useEffect, useState } from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import PageLoader from '../../PageLoader/PageLoader';

const GitHubAPI = "https://api.github.com/repos/CodingLife1024/blog-content/contents/"

const TitleList = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch("https://api.github.com/repos/CodingLife1024/blog-content/contents/");
        const data = await response.json();

        // Sort files based on last update
        const sortedFiles = data.sort((a, b) => {
          const dateA = new Date(a.last_modified);
          const dateB = new Date(b.last_modified);
          return dateB - dateA;
        });

        setFiles(sortedFiles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching files:', error);
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {files.map((file) => (
            <li key={file.name}>
              <a href={file.html_url} target="_blank" rel="noopener noreferrer">
                {file.name}
              </a>
            </li>
          ))}
        </ul>
      )}


      
      <Routes>
        {files.map((file) => (
          <Route
            key={file.name}
            path={`/${file.name}`}
            element={
              <div>
                <Link to={`/${file.name}`}>yy</Link>
                <PageLoader githubLink={`${GitHubAPI}${file.name}`} />
              </div>
            }
          />
        ))}
      </Routes>
    </div>
  );
};

export default TitleList;
