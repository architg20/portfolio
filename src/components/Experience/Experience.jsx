import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import data from "../../data/data.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {data.map((dataItem, id) => {
            return (
              <li key={id} className={styles.dataItem}>
                <img
                  src={getImageUrl(dataItem.imageSrc)}
                  alt={`${dataItem.organisation} Logo`}
                />
                <div className={styles.dataItemDetails}>
                  <h3>{`${dataItem.role}, ${dataItem.organisation}`}</h3>
                  <p>{`${dataItem.startDate} - ${dataItem.endDate}`}</p>
                  <ul>
                    {dataItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};