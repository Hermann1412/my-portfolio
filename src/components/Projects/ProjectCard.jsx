import React, { useContext } from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from '../../utils';
import { LanguageContext } from "../../LanguageContext.jsx";

const CATEGORY_COLORS = {
  "Web Dev":   { bg: "rgba(10,87,82,0.12)",    border: "rgba(10,87,82,0.35)",    text: "#0a5752" },
  "Mobile":    { bg: "rgba(55,48,163,0.12)",   border: "rgba(55,48,163,0.35)",   text: "#3730a3" },
  "AI / ML":   { bg: "rgba(180,83,9,0.12)",    border: "rgba(180,83,9,0.35)",    text: "#b45309" },
  "Game Dev":  { bg: "rgba(185,28,28,0.12)",   border: "rgba(185,28,28,0.35)",   text: "#b91c1c" },
  "Database":  { bg: "rgba(29,78,216,0.12)",   border: "rgba(29,78,216,0.35)",   text: "#1d4ed8" },
  "Networking":{ bg: "rgba(109,40,217,0.12)",  border: "rgba(109,40,217,0.35)",  text: "#6d28d9" },
  "Security":  { bg: "rgba(139,58,16,0.12)",   border: "rgba(139,58,16,0.35)",   text: "#8b3a10" },
};

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, report, certificate, category },
}) => {
  const { t } = useContext(LanguageContext);
  const localizedProject = t.projects.localizedCards[title];
  const localizedTitle = localizedProject?.title || title;
  const localizedDescription = localizedProject?.description || description;
  const categoryStyle = CATEGORY_COLORS[category] || {};

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`${t.projects.imageAlt} ${localizedTitle}`}
          className={styles.image}
        />
        {category && (
          <span
            className={styles.badge}
            style={{
              background: categoryStyle.bg,
              border: `1px solid ${categoryStyle.border}`,
              color: categoryStyle.text,
            }}
          >
            {category}
          </span>
        )}
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
            <a href={report} className={`${styles.link} ${styles.linkReport}`} target="_blank" rel="noopener noreferrer">
              {t.projects.report}
            </a>
          )}
          {certificate && (
            <a href={certificate} className={`${styles.link} ${styles.linkCert}`} target="_blank" rel="noopener noreferrer">
              {t.projects.certificate}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
