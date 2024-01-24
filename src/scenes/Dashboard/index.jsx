import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import PageLoader from '../../PageLoader/PageLoader';
import styles from './dashboard.module.css';

const GitHubAPI = "https://api.github.com/repos/CodingLife1024/blog-content/contents/";

const Dashboard = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch(GitHubAPI);
        if (!response.ok) {
          throw new Error(`Failed to fetch files: ${response.status} ${response.statusText}`);
        }

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
    <div className={styles.dashboard}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Routes>
          {files.map((file) => (
            <Route
              key={file.name}
              path={`/${file.name}`}
              element={<PageLoader githubLink={`${GitHubAPI}${file.name}`} />}
            />
          ))}
          <Route
            path="/"
            element={
              <div className="">
                {files.map((file) => (
                  <div key={file.name} className={styles.topics}>
                    <Link to={`/${file.name}`}>{file.name}</Link>
                  </div>
                ))}
              </div>
            }
          />
        </Routes>
      )}
    </div>
  );
};

export default Dashboard;
