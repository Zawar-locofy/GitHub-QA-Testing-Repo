import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <FrameComponent1 />
      <div className={styles.contactButtonWrapper}>
        <div className={styles.contactButton}>Contact Button</div>
      </div>
      <Button variant="contained" color="primary">
        About Button
      </Button>
      <div className={styles.contactButtonWrapper}>
        <div className={styles.contactButton}>Privacy Button</div>
      </div>
      <div className={styles.contactButtonWrapper}>
        <div className={styles.contactButton}>Policy Button</div>
      </div>
      <img className={styles.frameChild} alt="" src="/frame-7@2x.png" />
    </div>
  );
};

export default FrameComponent;
