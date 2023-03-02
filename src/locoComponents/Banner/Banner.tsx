import { FunctionComponent } from "react";
import styles from "./Banner.module.css";

const Banner: FunctionComponent = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.title}>
          <b className={styles.contactUs}>Contact Us</b>
          <div className={styles.line} />
        </div>
        <div className={styles.thereAreMany}>
          There are many variations of passages of Lorem Ipsum available, have
          suffered alteration in some form.
        </div>
      </div>
      <img
        className={styles.cogaiLogotrans11Icon}
        alt=""
        src="/cogailogotrans1-1@2x.png"
      />
      <div className={styles.homeParent}>
        <div className={styles.home}>Home</div>
        <div className={styles.about}>About</div>
        <div className={styles.about}>Services</div>
        <div className={styles.about}>Industries</div>
        <div className={styles.about}>Resources</div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.getAQuote}>GET A QUOTE</div>
      </div>
    </div>
  );
};

export default Banner;
