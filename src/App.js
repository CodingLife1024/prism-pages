import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import GitHubFileLoader from './FileLoader/GitHubFileLoader';
import PageLoader from './PageLoader/PageLoader';

function App() {
  const githubApi = 'https://api.github.com/repos/CodingLife1024/blog-content/contents/';
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // Fetch the list of files from the GitHub repository
    fetch(githubApi)
      .then((response) => response.json())
      .then((data) => {
        // Filter out non-file items (e.g., directories)
        const fileItems = data.filter((item) => item.type === 'file');
        setFiles(fileItems);
      })
      .catch((error) => console.error('Error fetching files:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* Generate links dynamically based on the files */}
        {files.map((file) => (
          <Link key={file.name} to={`/${file.name}`}>
            {file.name}
          </Link>
        ))}

        {/* Routes for each file */}
        <Routes>
          {files.map((file) => (
            <Route
              key={file.name}
              path={`/${file.name}`}
              element={<PageLoader githubLink={`${githubApi}${file.name}`} />}
            />
          ))}
        </Routes>
      </header>
    </div>
  );
}

export default App;
