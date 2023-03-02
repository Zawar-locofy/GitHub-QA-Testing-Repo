import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

type FrameComponent1Type = {
  m?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({ m }) => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.mParent}>
        <div className={styles.m}>{m}</div>
        <b className={styles.download}>Client Satisfaction</b>
      </div>
      <img className={styles.frameChild} alt="" src="/line-2.svg" />
      <div className={styles.mGroup}>
        <div className={styles.m1}>15</div>
        <b className={styles.transaction}>Years of Service</b>
      </div>
      <img className={styles.frameChild} alt="" src="/line-2.svg" />
      <div className={styles.mContainer}>
        <div className={styles.m2}>208+</div>
        <b className={styles.rattings}>Client Worldwide</b>
      </div>
    </div>
  );
};

export default FrameComponent1;
