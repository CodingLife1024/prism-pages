import React from 'react'
import styles from './topbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const TopBar = () => {
  const style = { color: "#DBF8FA", fontSize: "30px"}
  return (
    <div className={styles.topbar}>
      <div className={styles.name}>Riddhi</div>
      <div className={styles.social}>
      <a href="https://github.com/CodingLife1024" target="_blank" rel="noopener noreferrer">
        <FaGithub style={style} />
      </a>
      <a href="https://www.linkedin.com/in/riddhidipta-pal-854b5b234/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin style={style} />
      </a>
      <a href="https://www.instagram.com/coding_1024_/" target="_blank" rel="noopener noreferrer">
        <FaInstagram style={style} />
      </a>
    </div>
      <div className={styles.intro}>
        <p>I am a final year Computer Science undergraduate student at IIT Delhi. My interests are AI and ML algorithms, Web and App Development and Game Theory.</p>
      </div>
      <div className={styles.interests}>
        I am a part of <a href="https://facciitd.netlify.app/" target="_blank" rel="noreferrer">Azure</a> (IITD Art Club) and <a href="https://indradhanuiitd.in/" target="_blank" rel="noreferrer">Indradhanu</a> (Queer Collective).
      </div>
    </div>
  )
}

export default TopBar
