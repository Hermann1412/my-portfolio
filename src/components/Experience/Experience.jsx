import { useContext } from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import { LanguageContext } from "../../LanguageContext.jsx";

export const Experience = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className={styles.container} id="experience">
      <p className="sectionKicker">03 — experience.ts</p>
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
        <span className={styles.messageComment}>/**</span>
        <p>{t.experience.message}</p>
        <span className={styles.messageComment}>*/</span>
      </div>

      {/* Certifications */}
      <p className={`sectionKicker ${styles.subKicker}`}>certifications.json</p>
      <h3 className={styles.certsTitle}>Certifications</h3>
      <div className={styles.certsGrid}>
        <a
          href="https://coursera.org/verify/9PL8YON81ZSP"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.certCard}
        >
          <div className={`winBar ${styles.cardBar}`}>
            <span className="winDots"><span></span><span></span><span></span></span>
          </div>
          <img
            src={getImageUrl("projects/IBM-certification.png")}
            alt="IBM Networking Security Certification"
            className={styles.certImg}
          />
          <div className={styles.certInfo}>
            <span className={styles.certIssuer}>IBM</span>
            <span className={styles.certName}>Networking &amp; Security</span>
            <span className={styles.certVerify}>$ verify ↗</span>
          </div>
        </a>

        <a
          href={`${import.meta.env.BASE_URL}Aicertification.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.certCard}
        >
          <div className={`winBar ${styles.cardBar}`}>
            <span className="winDots"><span></span><span></span><span></span></span>
          </div>
          <img
            src={getImageUrl("projects/CODOT.png")}
            alt="Council of Deans of Thailand Certification"
            className={styles.certImg}
          />
          <div className={styles.certInfo}>
            <span className={styles.certIssuer}>Council of Deans of Thailand</span>
            <span className={styles.certName}>Academic Certification</span>
            <span className={styles.certVerify}>$ open ↗</span>
          </div>
        </a>

        <a
          href={`${import.meta.env.BASE_URL}Graduation.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.certCard}
        >
          <div className={`winBar ${styles.cardBar}`}>
            <span className="winDots"><span></span><span></span><span></span></span>
          </div>
          <img
            src={getImageUrl("projects/graduation.png")}
            alt="Graduation Status Certification"
            className={styles.certImg}
          />
          <div className={styles.certInfo}>
            <span className={styles.certIssuer}>Assumption University</span>
            <span className={styles.certName}>Graduation Status Certification</span>
            <span className={styles.certVerify}>$ open ↗</span>
          </div>
        </a>
      </div>

      {/* Involvement */}
      <p className={`sectionKicker ${styles.subKicker}`}>involvement.log</p>
      <h3 className={styles.involvementTitle}>Involvement</h3>
      <div className={styles.involvementGrid}>
        <div className={styles.involvementCard}>
          <p className={styles.involvementRole}>Attendee</p>
          <p className={styles.involvementName}>Day One — AI Expo &amp; Conference</p>
          <p className={styles.involvementMeta}>Bangkok, Thailand</p>
          <p className={styles.involvementDesc}>
            Attended a national AI exposition showcasing applied machine learning, generative AI tools,
            and real-world deployment case studies from industry practitioners and researchers.
          </p>
        </div>
      </div>
    </section>
  );
};
