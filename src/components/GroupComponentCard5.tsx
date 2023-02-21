import { FunctionComponent } from "react";
import styles from "./GroupComponentCard5.module.css";

const GroupComponentCard5: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <img
        className={styles.groupChild}
        alt=""
        src="../../public/pages/testFolder1/rectangle-9@2x.png"
      />
      <div className={styles.groupParent}>
        <div className={styles.applicationDevelopmentIsAtParent}>
          <div className={styles.applicationDevelopmentIsContainer}>
            <p className={styles.applicationDevelopmentIs}>
              Application development is at the heart of what we do. Our team
              are skilled in creating custom software solutions that meet the
              unique needs of our clients. So whether you need a simple
            </p>
            <p className={styles.applicationToAutomate}>
              application to automate a business process or a complex system to
              manage your entire operation, we have the expertise and experience
              to deliver results.
            </p>
          </div>
          <div className={styles.applicationDevelopment}>
            1. Application Development
          </div>
        </div>
        <div className={styles.groupItem} />
      </div>
      <div className={styles.readMore}>Read more</div>
    </div>
  );
};

export default GroupComponentCard5;
