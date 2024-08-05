import type { NextPage } from "next";
import styles from "./easy-setup-content.module.css";

export type EasySetupContentType = {
  className?: string;
};

const EasySetupContent: NextPage<EasySetupContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.easySetupContent, className].join(" ")}>
      <div className={styles.getYourVirtualOfficeUpAndWrapper}>
        <h1 className={styles.getYourVirtualContainer}>
          <span className={styles.getYourVirtual}>
            Get Your Virtual Office Up and Running in
          </span>
          <b> 3 Easy Steps!</b>
        </h1>
      </div>
      <div className={styles.maskGroupParent}>
        <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" />
        <img
          className={styles.maskGroupIcon1}
          loading="lazy"
          alt=""
          src="/mask-group-1@2x.png"
        />
        <img className={styles.maskGroupIcon2} alt="" src="/mask-group-2.svg" />
        <img
          className={styles.maskGroupIcon3}
          loading="lazy"
          alt=""
          src="/mask-group-3@2x.png"
        />
        <div className={styles.stepOneContainer}>
          <div className={styles.stepOneContainerChild} />
          <div className={styles.contentWrapperFour}>
            <h3 className={styles.procedureToObtain}>
              Procedure to obtain Virtual office address.
            </h3>
          </div>
          <div className={styles.supportContentParent}>
            <div className={styles.supportContent}>
              <div className={styles.supportStep}>
                <div className={styles.supportElementsWrapper}>
                  <div className={styles.supportElements}>
                    <div className={styles.supportShapes}>
                      <img
                        className={styles.supportShapesChild}
                        alt=""
                        src="/rectangle-486.svg"
                      />
                    </div>
                    <div className={styles.stepCircle}>
                      <img
                        className={styles.stepCircleChild}
                        alt=""
                        src="/ellipse-79.svg"
                      />
                    </div>
                    <div className={styles.stepIcon}>
                      <div className={styles.iconWrapper}>
                        <img
                          className={styles.iconWrapperChild}
                          alt=""
                          src="/rectangle-486.svg"
                        />
                        <img
                          className={styles.maskGroupIcon4}
                          loading="lazy"
                          alt=""
                          src="/mask-group-4@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.supportElementsInner}>
                      <img
                        className={styles.stepCircleChild}
                        loading="lazy"
                        alt=""
                        src="/ellipse-81.svg"
                      />
                    </div>
                    <img
                      className={styles.supportElementsChild}
                      alt=""
                      src="/rectangle-486.svg"
                    />
                  </div>
                </div>
                <div className={styles.supportDescription}>
                  <div className={styles.registerKaro}>
                    <b className={styles.connectWithRegisterkaroContainer}>
                      <p className={styles.connectWith}>{`Connect With `}</p>
                      <p className={styles.connectWith}>RegisterKaro</p>
                    </b>
                  </div>
                  <b className={styles.giveEssentialDetailsContainer}>
                    <p
                      className={styles.connectWith}
                    >{`Give Essential Details `}</p>
                    <p className={styles.connectWith}>{`& Documents`}</p>
                  </b>
                  <b className={styles.getYourVirtualContainer1}>
                    <p
                      className={styles.connectWith}
                    >{`Get Your Virtual Office `}</p>
                    <p className={styles.connectWith}>Ready To Work</p>
                  </b>
                </div>
              </div>
            </div>
            <div className={styles.stepFourContainer}>
              <div className={styles.reachOutTo}>
                Reach out to our friendly customer support team through chat,
                email, or phone. They'll guide you through the process.
              </div>
              <div className={styles.reachOutTo}>
                Upload essential documents required for registration, following
                our clear and secure guidelines.
              </div>
              <div className={styles.onceYourApplicationContainer}>
                <p className={styles.connectWith}>
                  Once your application is approved, your virtual office is
                  activated instantly!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasySetupContent;
