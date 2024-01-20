import React from 'react'
import styles from "./category.module.css"

const Category = () => {
  return (
    <div className={styles.category}>
      <div className={styles.title}>Categories</div>
      <div className={styles.technology}>technology</div>
      <div className={styles.experiences}>experiences</div>
      <div className={styles.books}>books</div>
      <div className={styles.films}>films</div>
      <div className={styles.lgbt}>lgbt</div>
    </div>
  )
}

export default Category