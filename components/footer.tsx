import type { NextPage } from "next";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <img className={styles.separatorIcon} alt="" src="/separator@2x.png" />
      <b className={styles.safeLedgerPrivate}>
        © 2024 - Safe Ledger Private Limited. All rights reserved.
      </b>
      <div className={styles.mapContainerWrapper}>
        <div className={styles.mapContainer}>
          <div className={styles.locationBlock}>
            <h3 className={styles.heading}>Get in touch with us</h3>
          </div>
          <div className={styles.descriptionBlock}>
            <div className={styles.supportingText}>
              <span>{`Submit your Details to get an Instant `}</span>
              <b className={styles.allInclusive}>All-inclusive</b>
              <span>{` Quote to your email and a `}</span>
              <b className={styles.allInclusive}>{`FREE `}</b>
              <span>Expert consultation</span>
            </div>
            <div className={styles.controls}>
              <div className={styles.zoom}>
                <div className={styles.inputField}>
                  <div className={styles.inputFieldBase}>
                    <div className={styles.inputWithLabel}>
                      <div className={styles.label}>Name</div>
                      <div className={styles.input}>
                        <input
                          className={styles.content}
                          placeholder="Your name"
                          type="text"
                        />
                        <img
                          className={styles.helpIcon}
                          alt=""
                          src="/help-icon3.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.hintText}>
                      This is a hint text to help user.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.inputField1}>
                <div className={styles.inputFieldBase1}>
                  <div className={styles.inputWithLabel1}>
                    <div className={styles.label1}>Mobile</div>
                    <div className={styles.input1}>
                      <input
                        className={styles.content}
                        placeholder="Mobile no."
                        type="text"
                      />
                      <img
                        className={styles.helpIcon}
                        alt=""
                        src="/help-icon4.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.hintText1}>
                    This is a hint text to help user.
                  </div>
                </div>
              </div>
              <div className={styles.inputFieldBase2}>
                <div className={styles.inputFieldBase2}>
                  <div className={styles.label2}>Email</div>
                  <div className={styles.input2}>
                    <input
                      className={styles.content2}
                      placeholder="Email"
                      type="text"
                    />
                    <img
                      className={styles.helpIcon}
                      alt=""
                      src="/help-icon5.svg"
                    />
                  </div>
                </div>
                <div className={styles.hintText1}>
                  This is a hint text to help user.
                </div>
              </div>
              <div className={styles.reset}>
                <div className={styles.inputField2}>
                  <div className={styles.inputFieldBase}>
                    <div className={styles.inputWithLabel1}>
                      <div className={styles.label3}>City</div>
                      <div className={styles.input}>
                        <input
                          className={styles.content}
                          placeholder="City name"
                          type="text"
                        />
                        <img
                          className={styles.helpIcon}
                          alt=""
                          src="/help-icon6.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.hintText}>
                      This is a hint text to help user.
                    </div>
                  </div>
                </div>
                <div className={styles.inputField3} />
              </div>
            </div>
          </div>
          <div className={styles.mapFooter}>
            <div className={styles.inputField}>
              <div className={styles.button}>
                <div className={styles.buttonBase}>
                  <b className={styles.terms}>Get a Detailed Quotation Now!</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.footerBackground} />
        <div className={styles.contactInfo}>
          <img
            className={styles.headerLogo884459461Icon}
            loading="lazy"
            alt=""
            src="/headerlogo88445946-1-1.svg"
          />
          <div className={styles.info}>
            <div className={styles.feelFreeToConnectWithUsParent}>
              <h2 className={styles.feelFreeTo}>
                Feel free to connect with us
              </h2>
              <div className={styles.details}>
                <div className={styles.contactDetails}>
                  <div className={styles.emailContainer}>
                    <img
                      className={styles.emailIcon}
                      loading="lazy"
                      alt=""
                      src="/frame.svg"
                    />
                    <div className={styles.address}>+91 93112 21210</div>
                  </div>
                  <div className={styles.emailContainer1}>
                    <img
                      className={styles.emailIcon}
                      alt=""
                      src="/email-1.svg"
                    />
                    <h3 className={styles.virtualofficeteamcowork}>
                      virtualoffice@teamco.work
                    </h3>
                  </div>
                </div>
                <div className={styles.addressInfo}>
                  <img
                    className={styles.emailIcon}
                    alt=""
                    src="/navigation2-1.svg"
                  />
                  <h3 className={styles.palmCourtMehrauliGurgaon}>
                    704, Palm Court, Mehrauli-Gurgaon Rd, Gurugram, Haryana,
                    122007
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.socials}>
            <img
              className={styles.linkFacebook}
              loading="lazy"
              alt=""
              src="/link--facebook.svg"
            />
            <img
              className={styles.linkFacebook}
              loading="lazy"
              alt=""
              src="/link--instagram.svg"
            />
            <img
              className={styles.linkFacebook}
              loading="lazy"
              alt=""
              src="/link--linkedin.svg"
            />
            <img
              className={styles.linkTwitter}
              loading="lazy"
              alt=""
              src="/link--twitter.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.mapWrapper}>
        <div className={styles.map}>
          <div className={styles.frameParent}>
            <div className={styles.locationNameWrapper}>
              <div className={styles.locationName}>
                <div className={styles.palmCourtgurugram}>
                  Palm Court,Gurugram
                </div>
                <div className={styles.viewLargerMap}>View larger map</div>
              </div>
            </div>
            <img
              className={styles.locationIcon}
              loading="lazy"
              alt=""
              src="/location-icon@2x.png"
            />
          </div>
          <div className={styles.largeViewParent}>
            <img
              className={styles.largeViewIcon}
              loading="lazy"
              alt=""
              src="/large-view.svg"
            />
            <div className={styles.zoomOptions}>
              <div className={styles.zoomInButtonWrapper}>
                <img
                  className={styles.zoomInButton}
                  alt=""
                  src="/zoom-in-button.svg"
                />
              </div>
              <img
                className={styles.zoomOptionsChild}
                alt=""
                src="/line-9.svg"
              />
              <input className={styles.frameInput} type="checkbox" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.copyrightChild} />
        <b className={styles.safeLedgerPrivate1}>
          © 2024 - Safe Ledger Private Limited. All rights reserved.
        </b>
      </div>
    </footer>
  );
};

export default Footer;
