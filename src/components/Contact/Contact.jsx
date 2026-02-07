import React from "react"

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
  <footer className={styles.container} id="contact">
    <div className={styles.text}>
      <h2>Contact</h2>
      <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
      <li className={styles.link}>
        <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
        <a href="mailto:www.ngendahermann14@gmail.com">www.ngendahermann14@gmail.com</a>
      </li>

      <li className={styles.link}>
        <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
        <a href="https://github.com/Hermann1412">github.com/Hermann1412</a>
      </li>
    </ul>
  </footer>
  );
};