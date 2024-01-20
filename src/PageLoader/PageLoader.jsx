// PageLoader.jsx

import React from 'react'
import GitHubFileLoader from '../FileLoader/GitHubFileLoader';

const PageLoader = ( {githubLink} ) => {
  console.log('PageLoader rendered with githubLink:', githubLink);
  return (
    <div>
      <GitHubFileLoader githubLink={githubLink} />
    </div>
  )
}

export default PageLoader