import { FunctionComponent } from "react";
import styles from "./RectangleIcon.module.css";

const RectangleIcon: FunctionComponent = () => {
  return (
    <img
      className={styles.frameChild}
      alt=""
      src="../../public/rectangle-11@2x.png"
    />
  );
};

export default RectangleIcon;
