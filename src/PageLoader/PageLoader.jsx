// PageLoader.jsx

import React from 'react'
import GitHubFileLoader from '../FileLoader/GitHubFileLoader';
import styles from './pageloader.module.css'

const PageLoader = ( {githubLink} ) => {
  console.log('PageLoader rendered with githubLink:', githubLink);
  return (
    <div className={styles.main}>
      <GitHubFileLoader githubLink={githubLink} />
    </div>
  )
}

export default PageLoader