import { useContext } from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { LanguageContext } from "../../LanguageContext.jsx";

export const Contact = () => {
  const { t } = useContext(LanguageContext);

  return (
    <footer className={styles.container} id="contact">
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.description}</p>
        </div>

        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:www.ngendahermann14@gmail.com">www.ngendahermann14@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <a href="https://github.com/Hermann1412" target="_blank" rel="noopener noreferrer">
              github.com/Hermann1412
            </a>
          </li>
        </ul>

        <div className={styles.divider} />
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Hermann. {t.contact.copyright}
        </p>
      </div>
    </footer>
  );
};
