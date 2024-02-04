import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./category.module.css"

const Category = ({ onCategoryClick, selectedTag }) => {
  const handleClick = (category) => {
    onCategoryClick(category);
  };

  return (
    <div className={styles.category}>
      <div className={styles.title}>Categories</div>
      <Link to="/" onClick={() => handleClick("all")} className={`${styles.categoryLink} ${selectedTag === "all" ? styles.active : styles.default_all}`}>All</Link>
      <Link to="/" onClick={() => handleClick("tech")} className={`${styles.categoryLink} ${selectedTag === "tech" ? styles.active : styles.default_tech}`}>Technology</Link>
      <Link to="/" onClick={() => handleClick("experiences")} className={`${styles.categoryLink} ${selectedTag === "experiences" ? styles.active : styles.default_experiences}`}>Experiences</Link>
      <Link to="/" onClick={() => handleClick("books")} className={`${styles.categoryLink} ${selectedTag === "books" ? styles.active : styles.default_books}`}>Books</Link>
      <Link to="/" onClick={() => handleClick("films")} className={`${styles.categoryLink} ${selectedTag === "films" ? styles.active : styles.default_films}`}>Films</Link>
      <Link to="/" onClick={() => handleClick("lgbt")} className={`${styles.categoryLink} ${selectedTag === "lgbt" ? styles.active : styles.default_lgbt}`}>LGBT</Link>
    </div>
  );
}

export default Category;
