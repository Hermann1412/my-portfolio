import React from 'react'

import styles from "./Background.module.css";
import { getImageUrl } from '../../utils';

export const Background = () => {
  return (
    <section className={styles.container} id="more_background">
      <h2 className={styles.title} >Background. </h2>
      <p className={styles.description} >I'm currenctly Doing my learning at Assumption University(ABAC) in Thailand, precisely in Computer Engineering Domain.</p>
      <div className={styles.building} >
        <div className={styles.CLBuilding} >
          <img src={getImageUrl("about/CLB.png")}/>
        </div>
        <div className={styles.AUbuilding} >
          <img src={getImageUrl("about/AU.png")}/>
        </div>
      </div>
    </section>
  );
};
