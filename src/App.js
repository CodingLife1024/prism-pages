// App.js
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLoader from './PageLoader/PageLoader';
import TopBar from './scenes/Topbar';
import SideBar from './scenes/Sidebar';
import Dashboard from './scenes/Dashboard';
import Category from './scenes/Categories';
import About from './scenes/About';
import { postData } from './data/postData';
import Layout from './Layout';
import ReactGA from 'react-ga4';
import "./App.css"


ReactGA.initialize('G-FZG9F8BZPG');

function App() {

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const handleButtonClick = () => {
    ReactGA.event({
      category: 'User',
      action: 'Clicked a button'
    });
  };

  const [selectedTag, setSelectedTag] = useState("all");

  const handleCategoryClick = (category) => {
    setSelectedTag(category);
  };

  return (
      <Layout>
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
      </Layout>
  );
}

export default App;
