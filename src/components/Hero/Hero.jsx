import React from 'react'

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return ( 
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hermann</h1>
        <p className={styles.description}>
          I'm a full-stack developer with experience in React, Node.js, and modern web technologies. Let's build something amazing together!
        </p>
        <a href="mailto:www.ngendahermann14@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  );
}
