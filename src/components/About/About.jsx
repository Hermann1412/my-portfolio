import { useContext } from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { LanguageContext } from "../../LanguageContext.jsx";

const ITEM_ICONS = [
  { src: "about/cursorIcon.png", alt: "Frontend icon" },
  { src: "about/serverIcon.png", alt: "Backend icon" },
  { src: "about/uiIcon.png",     alt: "UI Design icon" },
  { src: "about/unity1.png",     alt: "Game Dev icon" },
  { src: "about/serverIcon.png", alt: "Cybersecurity icon" },
];

export const About = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{t.about.title}</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/hermann1.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          {t.about.items.map((item, i) => (
            <li key={i} className={styles.aboutItem}>
              <img
                src={getImageUrl(ITEM_ICONS[i]?.src || "about/cursorIcon.png")}
                alt={ITEM_ICONS[i]?.alt || "icon"}
              />
              <div className={styles.aboutItemText}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
