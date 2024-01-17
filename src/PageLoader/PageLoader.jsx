import React from 'react'
import GitHubFileLoader from '../FileLoader/GitHubFileLoader';

const PageLoader = ( {githubLink} ) => {
  return (
    <div>
      <GitHubFileLoader githubLink={githubLink} />
    </div>
  )
}

export default PageLoader