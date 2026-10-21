import { useContext, useState } from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from '../../utils';
import { LanguageContext } from "../../LanguageContext.jsx";
import { Lightbox } from "../Lightbox/Lightbox.jsx";

const CATEGORY_COLORS = {
  "Web Dev":                           "#0f9d6f",
  "Mobile":                            "#7c3aed",
  "AI / ML":                           "#b45309",
  "Game Dev":                          "#e11d48",
  "DevOps":                            "#e11d48",
  "Database / Data-analytics":         "#0284c7",
  "Networking / Networking security":  "#7c3aed",
  "Security":                          "#b45309",
};

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, report, certificate, category },
}) => {
  const { t } = useContext(LanguageContext);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const images = Array.isArray(imageSrc) ? imageSrc : [imageSrc];
  const localizedProject = t.projects.localizedCards[title];
  const localizedTitle = localizedProject?.title || title;
  const localizedDescription = localizedProject?.description || description;
  const categoryColor = CATEGORY_COLORS[category] || "var(--color-primary)";

  const openLightbox = () => { setLightboxIdx(0); setLightboxOpen(true); };
  const closeLightbox = () => setLightboxOpen(false);
  const prevImg = () => setLightboxIdx((i) => (i - 1 + images.length) % images.length);
  const nextImg = () => setLightboxIdx((i) => (i + 1) % images.length);

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.imageWrapper}
          onClick={openLightbox}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && openLightbox()}
          aria-label={`View ${localizedTitle} screenshots`}
        >
          <img
            src={getImageUrl(images[0])}
            alt={`${t.projects.imageAlt} ${localizedTitle}`}
            className={styles.image}
          />
          {category && (
            <span
              className={styles.badge}
              style={{ color: categoryColor }}
            >
              {category}
            </span>
          )}
          <div className={styles.imageOverlay}>
            <span className={styles.zoomIcon}>
              {images.length > 1 ? `View ${images.length} photos` : 'View case study'}
            </span>
          </div>
        </div>

        <div className={styles.body}>
          <h3 className={styles.title}>{localizedTitle}</h3>
          <p className={styles.description}>{localizedDescription}</p>

          <ul className={styles.skills}>
            {skills.map((skill, id) => (
              <li key={id} className={styles.skill}>{skill}</li>
            ))}
          </ul>

          <div className={styles.links}>
            {demo && (
              <a href={demo} className={`${styles.link} ${styles.linkPrimary}`} target="_blank" rel="noopener noreferrer">
                {t.projects.demo}
              </a>
            )}
            {source && (
              <a href={source} className={`${styles.link} ${styles.linkSecondary}`} target="_blank" rel="noopener noreferrer">
                {t.projects.source}
              </a>
            )}
            {report && (
              <a href={report} className={`${styles.link} ${styles.linkSecondary}`} target="_blank" rel="noopener noreferrer">
                {t.projects.report}
              </a>
            )}
            {certificate && (
              <a href={certificate} className={`${styles.link} ${styles.linkSecondary}`} target="_blank" rel="noopener noreferrer">
                {t.projects.certificate}
              </a>
            )}
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={images}
          index={lightboxIdx}
          onClose={closeLightbox}
          onPrev={prevImg}
          onNext={nextImg}
          onGoTo={setLightboxIdx}
        />
      )}
    </>
  );
};
