import React from 'react'
import PageLoader from '../PageLoader/PageLoader'

const Article = ( {githubLink} ) => {
  return (
    <><div>Article</div>
    <PageLoader githubLink={githubLink} />
    </>
  )
}

export default Article