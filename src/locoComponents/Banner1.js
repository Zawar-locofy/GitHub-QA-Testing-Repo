import styles from "./Banner1.module.css";

const Banner1 = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.image}>
        <div className={styles.background} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <b className={styles.aboutZawar}>About ZAWAR</b>
        </div>
      </div>
      <img
        className={styles.cogaiLogotrans11Icon}
        alt=""
        src="/cogailogotrans1-11@2x.png"
      />
      <div className={styles.homeParent}>
        <div className={styles.home}>Home</div>
        <div className={styles.about}>About</div>
        <div className={styles.home}>Services</div>
        <div className={styles.home}>Industries</div>
        <div className={styles.home}>Resources</div>
      </div>
      <button className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.getAQuote}>GET A QUOTE</div>
      </button>
    </div>
  );
};

export default Banner1;
