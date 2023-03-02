import { FunctionComponent } from "react";
import styles from "./ContactUsForm.module.css";

const ContactUsForm: FunctionComponent = () => {
  return (
    <div className={styles.contactusform}>
      <div className={styles.nameInputParent}>
        <input className={styles.nameInput} type="text" placeholder="Name" />
        <input className={styles.nameInput} type="text" placeholder="Email" />
      </div>
      <div className={styles.phoneInput}>
        <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
        <div className={styles.phone}>Phone</div>
      </div>
      <div className={styles.mail} />
      <div className={styles.companyInputParent}>
        <input className={styles.nameInput} type="text" placeholder="Company" />
        <input
          className={styles.nameInput}
          type="text"
          placeholder="Company Size"
        />
      </div>
      <div className={styles.messageTxtarea}>
        <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
        <img className={styles.vectorIcon2} alt="" src="/vector5.svg" />
        <div className={styles.message}>Message</div>
      </div>
      <div className={styles.button}>
        <div className={styles.iAgree}>
          <div className={styles.background} />
          <div className={styles.phone}>
            Keep me up to date with news and offers from time to time by email
          </div>
        </div>
        <div className={styles.button1}>
          <b className={styles.sendMessage}>Send Message</b>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
