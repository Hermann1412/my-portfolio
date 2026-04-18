import { useContext } from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import { LanguageContext } from "../../LanguageContext.jsx";

export const Experience = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>{t.experience.title}</h2>

      {/* Infinite scrolling marquee */}
      <div className={styles.marqueeWrapper} aria-label="Skills">
        <div className={styles.marqueeTrack}>
          {[...skills, ...skills].map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.message}>
        <p>{t.experience.message}</p>
      </div>
    </section>
  );
};
