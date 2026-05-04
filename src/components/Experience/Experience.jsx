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

      {/* Certifications */}
      <h3 className={styles.certsTitle}>Certifications</h3>
      <div className={styles.certsGrid}>
        <a
          href="https://coursera.org/verify/9PL8YON81ZSP"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.certCard}
        >
          <img
            src={getImageUrl("projects/IBM-certification.png")}
            alt="IBM Networking Security Certification"
            className={styles.certImg}
          />
          <div className={styles.certInfo}>
            <span className={styles.certIssuer}>IBM</span>
            <span className={styles.certName}>Networking &amp; Security</span>
            <span className={styles.certVerify}>Verify ↗</span>
          </div>
        </a>

        <div className={styles.certCard}>
          <img
            src={getImageUrl("projects/CODOT.png")}
            alt="Council of Deans of Thailand Certification"
            className={styles.certImg}
          />
          <div className={styles.certInfo}>
            <span className={styles.certIssuer}>Council of Deans of Thailand</span>
            <span className={styles.certName}>Academic Certification</span>
          </div>
        </div>
      </div>
    </section>
  );
};
