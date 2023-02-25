import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className={styles.locofyButtonWrapper}>
      <div className={styles.locofyButton}>Locofy Button</div>
    </div>
  );
};

export default FrameComponent1;
