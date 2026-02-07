import React from "react";

import styles from "./Experience.module.css"
import skills from "../../data/skills.json";
import history from "../../data/history.json"
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return <section className={styles.container} id="experience">
    <h2 className={styles.title}>Experience</h2>
    <div className={styles.content}>
      <div className={styles.skills}>{
          skills.map((skill, id) =>{
            return (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
              </div>
              <p >{skill.title}</p>
            </div>
            );
        })}
      </div>
      <div className={styles.message}>
        <p>While I am at the beginning of my professional career, I have built a strong foundation through my studies and hands-on projects. I am eager to apply my knowledge in a real-world environment and to continue developing the skills required for my field. The projects I have completed reflect my dedication, technical ability, and readiness to add value to your organization. 😊</p>
      </div>
    </div>
  </section>;
};
