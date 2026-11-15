import { useContext } from 'react'

import styles from "./Background.module.css";
import { LanguageContext } from '../../LanguageContext.jsx';

export const Background = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className={styles.container} id="more_background">
      <span className="eyebrow">Education</span>
      <h2 className={styles.title}>{t.background.title}</h2>
      <p className={styles.description}>{t.background.description}</p>
    </section>
  );
};
