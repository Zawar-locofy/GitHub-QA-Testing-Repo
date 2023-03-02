import { FunctionComponent } from "react";
import styles from "./contacyUSdetails.module.css";

type ContactUsDetailsType = {
  vector?: string;
  vector1?: string;
  group?: string;
  vector2?: string;
};

const ContactUsDetails: FunctionComponent<ContactUsDetailsType> = ({
  vector,
  vector1,
  group,
  vector2,
}) => {
  return (
    <div className={styles.contactusdetails}>
      <b className={styles.contactUs}>CONTACT US</b>
      <div className={styles.frameParent}>
        <div className={styles.vectorParent}>
          <img className={styles.vectorIcon} alt="" src={vector} />
          <div className={styles.contactUs}>+44-(0)-1474-338-718</div>
        </div>
        <div className={styles.vectorGroup}>
          <img className={styles.vectorIcon1} alt="" src={vector1} />
          <div className={styles.contactUs}>info@cogai.uk</div>
        </div>
        <div className={styles.groupParent}>
          <img className={styles.groupIcon} alt="" src={group} />
          <div className={styles.contactUs}>
            <p
              className={styles.hazelGroveStockport}
            >{`Cogai LTD, 6 Station View, `}</p>
            <p
              className={styles.hazelGroveStockport}
            >{`Hazel Grove, Stockport, `}</p>
            <p className={styles.hazelGroveStockport}>England, SK7 5ER</p>
          </div>
        </div>
        <div className={styles.vectorContainer}>
          <img className={styles.vectorIcon2} alt="" src={vector2} />
          <div className={styles.contactUs}>Monday To Friday</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsDetails;
