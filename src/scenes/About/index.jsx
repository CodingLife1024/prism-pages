import React from 'react';
import styles from './about.module.css'
const About = () => {
  return (
    <div className={styles.main}>
      <div className={styles.aboutme}>
        About Me
      </div>
      <div className={styles.para}>
        <p>I am Riddhi, a 3rd year student at IIT Delhi. This blog is my attempt to get out of my FOMO.</p>
      </div>
      <div className={styles.aboutme}>
        About the Blog
      </div>
      <div className={styles.para}>
        <p>I will be writing about my areas of interest on this blog - Books, Movies, and Technology. This blog is my digital playground, where I share my experiences, insights and adventures. Horror, history or my latest technical proect, I am here to document it all.</p>
        <p>Join me on this journey of growth, learning, and occasional trial-and-error. Let us explore the intersection of academia and hobbies together. </p>
        <p>Thanks for stopping by, and I hope you find something here that sparks your curiosity. </p>
      </div>

      <div className={styles.aboutme}>
        Contact me
      </div>
      <div className={styles.para}>
        <p>Have an idea, suggestion, project or just wanna talk? Hit me up here and I will chat back!</p>
      </div>
    </div>
  );
};

export default About;
