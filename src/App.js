// src/App.js
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
// import GitHubFileLoader from './FileLoader/GitHubFileLoader';
import PageLoader from './PageLoader/PageLoader';
import Article from './Article';

function App() {
  const githubLink = 'https://api.github.com/repos/CodingLife1024/blog-content/contents/2024-01-14::02:16.md';

  return (
    <div className="App">
      <header className="App-header">
        {/* <GitHubFileLoader githubLink={githubLink} /> */}
        <PageLoader githubLink={githubLink}/>
        <Link to="/Article">Go to Article</Link>
        <Routes>
          <Route path="/Articl" element={<Article githubLink={githubLink} />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
