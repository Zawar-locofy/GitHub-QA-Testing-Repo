import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./com1.module.css";

type ComponentType = {
  icon?: string;
  innovation?: string;
  innovationIsTheKeyToDrivi?: string;
  committedToConstantlySeek?: string;

  /** Style props */
  propHeight?: Property.Height;
  propWidth?: Property.Width;
  propWidth1?: Property.Width;
  propWidth2?: Property.Width;
};

const Component: FunctionComponent<ComponentType> = ({
  icon,
  innovation,
  innovationIsTheKeyToDrivi,
  committedToConstantlySeek,
  propHeight,
  propWidth,
  propWidth1,
  propWidth2,
}) => {
  const divStyle: CSS.Properties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const innovationStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const contentStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const innovationIsTheContainerStyle: CSS.Properties = useMemo(() => {
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
            <p className={styles.innovationIsThe}>
              {committedToConstantlySeek}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
