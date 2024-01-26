import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import PageLoader from '../../PageLoader/PageLoader';
import styles from './dashboard.module.css';

// Import your postData array
import { postData } from '../../data/postData';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // No need to fetch data as it comes from postData.js
  }, []);

  return (
    <div className={styles.dashboard}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Routes>
          {postData.map((post) => (
            <Route
              key={post.id}
              path={`/${post.link}`}
              element={<PageLoader githubLink={`https://api.github.com/repos/CodingLife1024/blog-content/contents/${post.file}`} />}
            />
          ))}
          <Route
            path="/"
            element={
              <div className="">
                {postData.map((post) => (
                  <div key={post.id} className={styles.topics}>
                    <Link to={`/${post.link}`}>{post.title}</Link>
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
