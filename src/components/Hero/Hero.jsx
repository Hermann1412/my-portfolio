import { useContext } from 'react';

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';
import { LanguageContext } from '../../LanguageContext.jsx';

export const Hero = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.statusBadge}>
          <span className={styles.statusDot} />
          {t.hero.statusBadge}
        </div>

        <h1 className={styles.title}>{t.hero.title}</h1>
        <p className={styles.description}>{t.hero.description}</p>

        <div className={styles.actions}>
          <a href="mailto:ngendahermann14@gmail.com" className={styles.contactBtn}>
            {t.hero.contactButton}
          </a>
          <a href="#projects" className={styles.projectsBtn}>
            {t.hero.projectsButton}
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>9</span>
            <span className={styles.statLabel}>{t.hero.statProjects}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>17</span>
            <span className={styles.statLabel}>{t.hero.statSkills}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>2</span>
            <span className={styles.statLabel}>{t.hero.statLanguages}</span>
          </div>
        </div>
      </div>

      {/* Styled image area */}
      <div className={styles.imageArea}>
        {/* Decorative ring behind the frame */}
        <div className={styles.imageGlow} />

        {/* Gradient-border frame */}
        <div className={styles.imageFrame}>
          <img
            src={getImageUrl("hero/heroImage.png")}
            alt="Hermann — Full-stack developer"
            className={styles.heroImg}
          />
        </div>

        {/* Floating role badge */}
        <div className={styles.roleBadge}>
          <span className={styles.roleDot} />
          Computer Engineer
        </div>

        {/* Decorative corner dots */}
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
