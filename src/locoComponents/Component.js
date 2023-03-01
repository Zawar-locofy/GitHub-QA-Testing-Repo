import { useMemo } from "react";
import styles from "./Component.module.css";

const Component = ({
  icon,
  innovation,
  innovationIsTheKeyToDrivi,
  committedToConstantlySeek,
  propHeight,
  propWidth,
  propWidth1,
  propWidth2,
}) => {
  const divStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const innovationStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const contentStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const innovationIsTheContainerStyle = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div className={styles.div} style={divStyle}>
      <div className={styles.innovation} style={innovationStyle}>
        <img className={styles.icon} alt="" src={icon} />
        <div className={styles.content} style={contentStyle}>
          <div className={styles.innovation1}>{innovation}</div>
          <div
            className={styles.innovationIsTheContainer}
            style={innovationIsTheContainerStyle}
          >
            <p className={styles.innovationIsThe}>
              {innovationIsTheKeyToDrivi}
            </p>
            <p className={styles.committedToConstantly}>
              {committedToConstantlySeek}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
