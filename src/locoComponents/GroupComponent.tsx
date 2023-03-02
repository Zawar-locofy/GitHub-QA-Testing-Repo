import { FunctionComponent } from "react";
import ContactUsDetails from "./ContactUsDetails";
import styles from "./GroupComponent.module.css";

const GroupComponent: FunctionComponent = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.copyright2022}>
          Copyright @ 2022. All Rights Reserved.
        </div>
        <b className={styles.otherLinks}>Other Links</b>
        <div className={styles.termsCondition}>{`Terms & Condition`}</div>
        <div className={styles.privacyPolicy}>Privacy Policy</div>
        <div className={styles.reportAbuse}>Report Abuse</div>
        <div className={styles.contactUs}>Contact Us</div>
        <b className={styles.serives}>Serives</b>
        <div className={styles.applicationDevelopment}>
          Application Development
        </div>
        <div className={styles.humanToMachineCommunication}>
          Human-to-Machine Communication
        </div>
        <div className={styles.machineToMachineCommunicati}>
          Machine-to-Machine Communication
        </div>
        <div className={styles.videoAnalytics}>Video Analytics</div>
        <div className={styles.div} />
        <img className={styles.groupItem} alt="" src="/group-215.svg" />
        <img className={styles.frameIcon} alt="" src="/frame.svg" />
        <div className={styles.weSpecializeIn}>
          We specialize in developing custom applications that streamline
          processes and improve efficiency for businesses of all sizes.
        </div>
      </div>
      <ContactUsDetails
        vector="/vector.svg"
        vector1="/vector1.svg"
        group="/group.svg"
        vector2="/vector2.svg"
      />
    </div>
  );
};

export default GroupComponent;
