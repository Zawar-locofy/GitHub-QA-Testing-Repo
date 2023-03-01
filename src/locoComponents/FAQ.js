import styles from "./FAQ.module.css";

const FAQ = () => {
  return (
    <div className={styles.faq}>
      <div className={styles.background} />
      <div className={styles.frequentQuestionsWrapper}>
        <b className={styles.frequentQuestions}>Frequent Questions?</b>
      </div>
      <div className={styles.whatIsDigitalisationParent}>
        <b className={styles.whatIsDigitalisation}>What is digitalisation?</b>
        <div className={styles.frameChild} />
        <b className={styles.whatIsA}>What is a smart technology company?</b>
        <div className={styles.aSmartTechnologyContainer}>
          <p className={styles.aSmartTechnology}>
            A smart technology company is a business that specializes in the
            development and implementation of smart technology solutions. Smart
            technology refers to using advanced technology, such as artificial
            intelligence and the Internet of Things (IoT), to improve the
            efficiency
          </p>
          <p className={styles.andEffectivenessOf}>
            and effectiveness of various operations and processes.
          </p>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.howDoesYourCompanyApproachParent}>
          <b className={styles.howDoesYour}>
            How does your company approach projects?
          </b>
          <img className={styles.frameItem} alt="" src="/ellipse-16.svg" />
        </div>
        <div className={styles.frameChild} />
        <b className={styles.doYouOffer}>
          Do you offer ongoing support and maintenance?
        </b>
        <div className={styles.frameChild} />
        <b className={styles.whatDifferentiatesYourContainer}>
          <p
            className={styles.aSmartTechnology}
          >{`What differentiates your company from other `}</p>
          <p className={styles.andEffectivenessOf}>
            digitalisation and smart technology companies?
          </p>
        </b>
      </div>
    </div>
  );
};

export default FAQ;
