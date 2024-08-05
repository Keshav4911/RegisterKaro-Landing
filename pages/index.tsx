import type { NextPage } from "next";
import Background from "../components/background";
import FrameComponent from "../components/frame-component";
import EasySetupContent from "../components/easy-setup-content";
import Testimonial from "../components/testimonial";
import Consultation from "../components/consultation";
import Content from "../components/content";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import Footer from "../components/footer";
import styles from "./index.module.css";

const LandingPage: NextPage = () => {
  return (
    <div className={styles.landingPage1}>
      <header className={styles.discountBanner}>
        <h1 className={styles.flashSale20Container}>
          <span className={styles.flashSale}>{`Flash sale `}</span>
          <b>20% Discount</b>
          <span className={styles.flashSale}> for New Clients, use code “</span>
          <b>QUICK20</b>
          <span className={styles.flashSale}>” at Checkout!</span>
        </h1>
      </header>
      <main className={styles.header6}>
        <Background />
        <div className={styles.navbarToggler}>
          <div className={styles.navbarTogglerIcon} />
        </div>
        <FrameComponent />
        <section className={styles.downloadContentWrapper}>
          <img
            className={styles.downloadContentIcon}
            loading="lazy"
            alt=""
            src="/frame-109849@2x.png"
          />
        </section>
        <section className={styles.easySetup}>
          <EasySetupContent />
          <Testimonial />
          <Consultation />
          <Content />
          <FrameComponent1 />
          <FrameComponent2 />
        </section>
        <div className={styles.header6Child} />
        <div className={styles.header6Item} />
        <div className={styles.header6Inner} />
        <div className={styles.checkBackground} />
        <div className={styles.itemDescription} />
        <div className={styles.locationBackground} />
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;
