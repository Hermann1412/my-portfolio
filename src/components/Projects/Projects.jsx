import React, { useContext, useState } from "react";

import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { LanguageContext } from "../../LanguageContext.jsx";

const ALL = "All";

export const Projects = () => {
  const { t } = useContext(LanguageContext);
  const [activeCategory, setActiveCategory] = useState(ALL);

  const categories = [ALL, ...new Set(projects.map((p) => p.category).filter(Boolean))];
  const filtered = activeCategory === ALL
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section className={styles.container} id="projects">
      <div className={styles.titleRow}>
        <h2 className={styles.title}>{t.projects.title}</h2>
        <span className={styles.totalCount}>{projects.length}</span>
      </div>

      <div className={styles.filters} role="tablist" aria-label="Filter projects by category">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
            {cat !== ALL && (
              <span className={styles.filterCount}>
                {projects.filter((p) => p.category === cat).length}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className={styles.projects}>
        {filtered.map((project, id) => (
          <ProjectCard key={`${project.title}-${id}`} project={project} />
        ))}
      </div>
    </section>
  );
};
