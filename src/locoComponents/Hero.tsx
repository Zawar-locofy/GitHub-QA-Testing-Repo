import { FunctionComponent } from "react";
import styles from "./Hero.module.css";

const Hero: FunctionComponent = () => {
  return (
    <div className={styles.hero}>
      <button className={styles.hamburgerbtn}>
        <div className={styles.hamburgerbtnChild} />
        <div className={styles.hamburgerbtnChild} />
        <div className={styles.hamburgerbtnChild} />
      </button>
      <div className={styles.banner}>
        <div className={styles.logoParent}>
          <div className={styles.logo}>
            <img
              className={styles.cogaiLogotrans11Icon}
              alt=""
              src="/cogailogotrans1-11@2x.png"
            />
          </div>
          <div className={styles.navBar}>
            <b className={styles.home}>Home</b>
            <b className={styles.about}>About</b>
            <b className={styles.services}>Services</b>
            <b className={styles.industries}>Industries</b>
            <b className={styles.resources}>Resources</b>
          </div>
          <button className={styles.getAQuote}>
            <div className={styles.getAQuote1}>GET A QUOTE</div>
          </button>
        </div>
        <div className={styles.pagetitle}>
          <b className={styles.contactUs}>Contact Us</b>
        </div>
      </div>
    </div>
  );
};

export default Hero;
