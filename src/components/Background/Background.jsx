import React, { useContext } from 'react'

import styles from "./Background.module.css";
import { getImageUrl } from '../../utils';
import { LanguageContext } from '../../LanguageContext.jsx';

export const Background = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section className={styles.container} id="more_background">
      <p className="sectionKicker">02 — background.json</p>
      <h2 className={styles.title}>{t.background.title}</h2>
      <p className={styles.description}>{t.background.description}</p>
      <div className={styles.building} >
        <div className={styles.CLBuilding} >
          <div className={`winBar ${styles.imgBar}`}>
            <span className="winDots"><span></span><span></span><span></span></span>
            <span className="winBarLabel">campus-life.jpg</span>
          </div>
          <img src={getImageUrl("about/CLB.png")} alt="Assumption University building" />
        </div>
        <div className={styles.AUbuilding} >
          <div className={`winBar ${styles.imgBar}`}>
            <span className="winDots"><span></span><span></span><span></span></span>
            <span className="winBarLabel">campus.jpg</span>
          </div>
          <img src={getImageUrl("about/AU.png")} alt="Assumption University campus" />
        </div>
      </div>
    </section>
  );
};
