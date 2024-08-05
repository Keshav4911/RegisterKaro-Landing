import type { NextPage } from "next";
import InputFieldContainer from "./input-field-container";
import styles from "./background.module.css";

export type BackgroundType = {
  className?: string;
};

const Background: NextPage<BackgroundType> = ({ className = "" }) => {
  return (
    <section className={[styles.background, className].join(" ")}>
      <div className={styles.headerContent}>
        <img
          className={styles.heroCover3Icon}
          alt=""
          src="/herocover3@2x.png"
        />
        <div className={styles.filter}>
          <img
            className={styles.headerLogo884459461Icon}
            loading="lazy"
            alt=""
            src="/headerlogo88445946-1.svg"
          />
          <button className={styles.buttonbtnprimaryColor}>
            <b className={styles.btnText}>Enquire now</b>
            <img
              className={styles.icnArrowRightIcnXs}
              alt=""
              src="/icn-arrowright-icnxs.svg"
            />
          </button>
          <h1 className={styles.h1Headline7}>
            <p
              className={styles.workFromAnywhere}
            >{`Work From Anywhere, Grow Everywhere. `}</p>
            <p className={styles.workFromAnywhere}>
              Get Your Instant Virtual Office
            </p>
          </h1>
          <div className={styles.inputFields}>
            <div className={styles.inputFieldWrapper}>
              <InputFieldContainer
                label="Name"
                contentPlaceholder="Your name"
                helpIcon="/help-icon.svg"
              />
              <div className={styles.inputField}>
                <div className={styles.inputFieldBase}>
                  <div className={styles.inputWithLabel}>
                    <div className={styles.label}>Mobile</div>
                    <div className={styles.input}>
                      <input
                        className={styles.content}
                        placeholder="Mobile no."
                        type="text"
                      />
                      <img
                        className={styles.helpIcon}
                        alt=""
                        src="/help-icon1.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.hintText}>
                    This is a hint text to help user.
                  </div>
                </div>
              </div>
              <div className={styles.inputFieldBase}>
                <div className={styles.inputWithLabel1}>
                  <div className={styles.label1}>Email</div>
                  <div className={styles.input}>
                    <input
                      className={styles.content}
                      placeholder="Email"
                      type="text"
                    />
                    <img
                      className={styles.helpIcon}
                      alt=""
                      src="/help-icon1.svg"
                    />
                  </div>
                </div>
                <div className={styles.hintText}>
                  This is a hint text to help user.
                </div>
              </div>
              <InputFieldContainer
                label="City"
                propMinWidth="28px"
                contentPlaceholder="City name"
                helpIcon="/help-icon2.svg"
              />
            </div>
            <b className={styles.heading}>Get in touch with us</b>
            <div className={styles.supportingText}>
              <span>{`Submit your Details to get an Instant `}</span>
              <span className={styles.allInclusive}>All-inclusive</span>
              <span>{` Quote to your email and a `}</span>
              <b className={styles.free}>FREE</b>
              <span> Expert consultation</span>
            </div>
            <button className={styles.actions}>
              <div className={styles.button}>
                <div className={styles.buttonBase}>
                  <b className={styles.text}>Get a Detailed Quotation Now!</b>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
