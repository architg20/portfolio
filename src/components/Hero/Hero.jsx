import React from 'react'
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>
            My name is Archit 
        </h1>
        <p className={styles.description}> 
        I am currently working as a Software Trainee with 7 months of experience.
        You can reach me out in the contacts.     
        </p>
        <a href="mailto:architgnayak05@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/HeroAvatar.png")}alt="Hero image"className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>;
}
