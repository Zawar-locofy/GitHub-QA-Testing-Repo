import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.ourMissionParent}>
        <b className={styles.ourMission}>Our Mission</b>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.ourMissionIs}>
        Our mission is to use our skills and knowledge to help organizations
        across various industries leverage the power of technology to improve
        their operations, reduce costs, and achieve their business goals.
        Technology has the potential to transform the world, and we are
        dedicated to using it to make a positive difference.
      </div>
    </div>
  );
};

export default FrameComponent;
