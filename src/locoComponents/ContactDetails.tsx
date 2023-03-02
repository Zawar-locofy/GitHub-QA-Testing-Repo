import { FunctionComponent } from "react";
import styles from "./conDetail.module.css";

const ContactDetails: FunctionComponent = () => {
  return (
    <div className={styles.contactdetails}>
      <div className={styles.homeContactUsWrapper}>
        <div className={styles.homeContact}>Home / Contact Us</div>
      </div>
      <div className={styles.contactUsHeading}>
        <b className={styles.homeContact}>Contact Us</b>
        <div className={styles.contactUsHeadingChild} />
        <div className={styles.keepInTouch}>KEEP IN TOUCH</div>
      </div>
      <div className={styles.name}>
        <div className={styles.visutUs}>
          <img className={styles.icon} alt="" src="/icon2.svg" />
          <div className={styles.registeredOfficeCogaiContainer}>
            <p className={styles.registeredOfficeCogaiLtd}>
              <span className={styles.registeredOffice}>
                Registered Office:
              </span>
              <span>{` Cogai LTD, 6 Station View, `}</span>
            </p>
            <p className={styles.registeredOfficeCogaiLtd}>
              Hazel Grove, Stockport, England, SK7 5ER
            </p>
            <p className={styles.registeredOfficeCogaiLtd}>
              <span className={styles.registeredOffice}>Business Office:</span>
              <span>{` Cogai LTD, The Old Rectory, `}</span>
            </p>
            <p className={styles.registeredOfficeCogaiLtd}>
              Springhead Road, Northfleet, Kent, DA11 8HN
            </p>
          </div>
          <b className={styles.visitUs}>Visit Us :</b>
        </div>
      </div>
      <div className={styles.name1}>
        <div className={styles.dropUs}>
          <img className={styles.icon1} alt="" src="/icon3.svg" />
          <div className={styles.infocogaiuk}>info@cogai.uk</div>
          <b className={styles.dropUs1}>Drop Us :</b>
        </div>
      </div>
      <div className={styles.contactUs1}>
        <img className={styles.icon2} alt="" src="/icon4.svg" />
        <div className={styles.name2}>
          <div className={styles.call4401474338718}>
            Call: +44-(0)-1474-338-718
          </div>
          <b className={styles.callUs}>Call Us :</b>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
