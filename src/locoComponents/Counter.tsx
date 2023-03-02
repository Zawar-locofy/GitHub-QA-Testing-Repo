import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import styles from "./Counter.module.css";

const Counter: FunctionComponent = () => {
  return (
    <div className={styles.counter}>
      <FrameComponent1 m="95%" />
    </div>
  );
};

export default Counter;
