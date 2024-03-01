// App.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLoader from './PageLoader/PageLoader';
import TopBar from './scenes/Topbar';
import SideBar from './scenes/Sidebar';
import Dashboard from './scenes/Dashboard';
import Category from './scenes/Categories';
import About from './scenes/About';
import { postData } from './data/postData';
import Layout from './Layout';
import "./App.css"

function App() {
  const [selectedTag, setSelectedTag] = useState("all");

  const handleCategoryClick = (category) => {
    setSelectedTag(category);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <div className='full'>
              <TopBar />
              <div className="main-container">
                <Category onCategoryClick={handleCategoryClick} selectedTag={selectedTag} />
                <Dashboard selectedTag={selectedTag} />
                <SideBar />
              </div>
            </div>
          </>
        } />

        <Route path="/about" element={<About />} />
        <Route path="/books" element={<PageLoader githubLink={`https://api.github.com/repos/CodingLife1024/blog-content/contents/books.md`} />} />
        <Route path="/TV" element={<PageLoader githubLink={`https://api.github.com/repos/CodingLife1024/blog-content/contents/TV.md`} />} />

        {postData.map((post) => (
          <Route
            key={post.id}
            path={`/${post.link}`}
            element={<PageLoader githubLink={`https://api.github.com/repos/CodingLife1024/blog-content/contents/${post.file}`} />}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
