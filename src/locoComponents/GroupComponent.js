import WeSpecializeIn from "./WeSpecializeIn";
import ContactUsDetails from "./ContactUsDetails";
import styles from "./GroupComponent.module.css";

const GroupComponent = () => {
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
        <img className={styles.groupItem} alt="" src="/group-2151.svg" />
        <img className={styles.frameIcon} alt="" src="/frame1.svg" />
        <WeSpecializeIn />
      </div>
      <ContactUsDetails
        vector="/vector3.svg"
        vector1="/vector4.svg"
        group="/group.svg"
        vector2="/vector5.svg"
      />
    </div>
  );
};

export default GroupComponent;
