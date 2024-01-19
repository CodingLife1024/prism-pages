// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TitleList from './scenes/TitleList/index';
import PageLoader from './PageLoader/PageLoader';
import TopBar from './scenes/Topbar';

function App() {
  return (
    <>
      {/* <PageLoader githubLink="https://api.github.com/repos/CodingLife1024/blog-content/contents/README.md" /> */}
      <TopBar />
      <Routes>
        <Route path="/" element={<TitleList />} />
        <Route path="/ttt" element={<PageLoader githubLink="https://api.github.com/repos/CodingLife1024/blog-content/contents/README.md" />} />
      </Routes>
    </>
  );
}

export default App;
