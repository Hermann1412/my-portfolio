import { useContext } from 'react';

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';
import { LanguageContext } from '../../LanguageContext.jsx';
import projects from '../../data/projects.json';
import skills from '../../data/skills.json';

export const Hero = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.terminalWindow}>
          <div className={`winBar ${styles.terminalBar}`}>
            <span className="winDots"><span></span><span></span><span></span></span>
            <span className="winBarLabel">hero.tsx</span>
          </div>

          <div className={styles.terminalBody}>
            <p className={styles.statusBadge}>
              <span className={styles.statusDot} />
              <span className={styles.statusComment}>//</span> {t.hero.statusBadge}
            </p>

            <h1 className={styles.title}>{t.hero.title}</h1>
            <p className={styles.description}>{t.hero.description}</p>

            <div className={styles.actions}>
              <a href="mailto:www.ngendahermann14@gmail.com" className={styles.contactBtn}>
                $ {t.hero.contactButton}
              </a>
              <a href="#projects" className={styles.projectsBtn}>
                {t.hero.projectsButton}
              </a>
              <a
                href="https://www.linkedin.com/in/hermann-ngenda-3310582b7/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedinBtn}
              >
                LinkedIn
              </a>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{projects.length}</span>
                <span className={styles.statLabel}>{t.hero.statProjects}</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNumber}>{skills.length}</span>
                <span className={styles.statLabel}>{t.hero.statSkills}</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNumber}>2</span>
                <span className={styles.statLabel}>{t.hero.statLanguages}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styled image area */}
      <div className={styles.imageArea}>
        <div className={styles.imageGlow} />

        <div className={styles.imageFrame}>
          <div className={`winBar ${styles.imageBar}`}>
            <span className="winDots"><span></span><span></span><span></span></span>
            <span className="winBarLabel">profile.png</span>
          </div>
          <img
            src={getImageUrl("hero/heroImage.png")}
            alt="Hermann — Full-stack developer"
            className={styles.heroImg}
          />
        </div>

        <div className={styles.captionRow}>
          <span className={styles.captionTag}>Computer Engineer</span>
          <span className={styles.captionTag}>✓ Certified</span>
        </div>

        <div className={styles.dotGrid} aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className={styles.dot} />
          ))}
        </div>
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}
