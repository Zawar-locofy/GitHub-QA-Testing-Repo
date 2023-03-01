import Counter from "../locoComponents/Counter";
import FrameComponent from "../locoComponents/FrameComponent";
import OurCompanyIs from "../locoComponents/OurCompanyIs";
import Component from "../locoComponents/Component";
import Banner from "../locoComponents/Banner";
import Banner1 from "../locoComponents/Banner1";
import GroupComponent from "../locoComponents/GroupComponent";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <img className={styles.photoIcon} alt="" src="/photo@2x.png" />
      <div className={styles.aboutOurLocofy}>About Our LOCOFY Company</div>
      <div className={styles.weAreAContainer}>
        <p
          className={styles.weAreA}
        >{`We are a digitalization and smart technology company with a passion for using technology to make a positive impact on the world. `}</p>
        <p className={styles.aTeamOf}>
          A team of experts with diverse backgrounds and expertise, including
          software and hardware development and wireless communication, formed
          our company.
        </p>
      </div>
      <b className={styles.ourStory}>Our Story</b>
      <div className={styles.aboutUsChild} />
      <Counter />
      <div className={styles.content}>
        <FrameComponent />
      </div>
      <div className={styles.ourValuesParent}>
        <b className={styles.ourValues}>Our Values</b>
        <div className={styles.groupChild} />
      </div>
      <OurCompanyIs />
      <div className={styles.div}>
        <Component
          icon="/icon.svg"
          innovation="Innovation"



          innovationIsTheKeyToDrivi="GIT GIT GIT GIT GIT GIT GIT Innovation is the key to driving progress and solving complex challenges. We are"
          committedToConstantlySeek="committed to constantly seeking new ideas and approaches and using the latest technologies and methodologies to deliver innovative solutions to our clients."
        />
        <Component
          icon="/icon1.svg"
          innovation="Team work
"
          innovationIsTheKeyToDrivi="We believe that teamwork is the GIT GIT GIT"
          committedToConstantlySeek="foundation of our success. We are dedicated to fostering a culture of collaboration and mutual support and working together to achieve our common goals."
          propHeight="263px"
          propWidth="620px"
          propWidth1="350px"
          propWidth2="357.2px"
        />
      </div>
      <div className={styles.banner}>
        <Banner />
        <Banner1 />
      </div>
      <GroupComponent />
      <div className={styles.homeAbout}>Home / About Us</div>
    </div>
  );
};

export default AboutUs;
