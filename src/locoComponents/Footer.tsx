import { FunctionComponent } from "react";
import ContactUsDetails from "./ContactUsDetails";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer1}>
        <div className={styles.footerChild} />
        <div className={styles.copyright}>
          <div className={styles.termsCondition}>
            Copyright @ 2022. All Rights Reserved.
          </div>
        </div>
        <div className={styles.otherlinks}>
          <b className={styles.otherLinks}>Other Links</b>
          <div className={styles.termsCondition}>{`Terms & Condition`}</div>
          <div className={styles.termsCondition}>Privacy Policy</div>
          <div className={styles.termsCondition}>Report Abuse</div>
          <div className={styles.termsCondition}>Contact Us</div>
        </div>
        <div className={styles.services}>
          <b className={styles.otherLinks}>Serives</b>
          <div className={styles.termsCondition}>Application Development</div>
          <div className={styles.termsCondition}>
            Human-to-Machine Communication
          </div>
          <div className={styles.termsCondition}>
            Machine-to-Machine Communication
          </div>
          <div className={styles.termsCondition}>Video Analytics</div>
        </div>
        <ContactUsDetails
          vector="/vector6.svg"
          vector1="/vector7.svg"
          group="/group1.svg"
          vector2="16x16x320945574"
        />
        <div className={styles.socialmedialinks}>
          <img
            className={styles.socialmedialinksChild}
            alt=""
            src="/group-2151.svg"
          />
        </div>
        <div className={styles.summary}>
          <div className={styles.weSpecializeIn}>
            We specialize in developing custom applications that streamline
            processes and improve efficiency for businesses of all sizes.
          </div>
        </div>
        <div className={styles.logo}>
          <img className={styles.vectorIcon} alt="" src="/vector9.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector10.svg" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
