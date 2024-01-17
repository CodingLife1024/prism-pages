import React from 'react'
import PageLoader from '../PageLoader/PageLoader'

const Article = () => {
  return (
    <><div>Article</div>
    <PageLoader githubLink="https://api.github.com/repos/CodingLife1024/blog-content/contents/2024-01-14::02:16.md" />
    </>
  )
}

export default Article