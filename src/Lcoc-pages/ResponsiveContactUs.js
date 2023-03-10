import Hero from "../locoComponents/Hero";
import ContactDetails from "../locoComponents/ContactDetails";
import ContactUsForm from "../locoComponents/ContactUsForm";
import FAQ from "../locoComponents/FAQ";
import Footer from "../locoComponents/Footer";
import styles from "./ResponsiveContactUs.module.css";

const ResponsiveContactUs = () => {
  return (
    <div className={styles.responsiveContactUs}>
      <Hero />
      <div className={styles.contactussection}>
        <ContactDetails />
        <ContactUsForm />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
};

export default ResponsiveContactUs;
