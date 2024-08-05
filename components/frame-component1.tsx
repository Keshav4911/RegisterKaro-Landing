import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.easySetupInner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.testimonialHeader}>
          <h1 className={styles.clientTestimonial}>{`Client Testimonial `}</h1>
        </div>
        <div className={styles.testimonialDetails}>
          <div className={styles.clientDetails}>
            <div className={styles.zoomControls}>
              <div className={styles.zoomIn} />
              <img
                className={styles.ioarrowbacksharpIcon}
                loading="lazy"
                alt=""
                src="/ioarrowbacksharp.svg"
              />
            </div>
          </div>
          <div className={styles.clientLogo}>
            <img
              className={styles.daburHealthcareCompanyDubaiIcon}
              loading="lazy"
              alt=""
              src="/daburhealthcarecompanydubaiindia-1@2x.png"
            />
          </div>
          <div className={styles.quoteBlockWrapper}>
            <div className={styles.quoteBlock}>
              <div className={styles.quoteContent}>
                <div className={styles.div}>“</div>
                <div className={styles.theLaunchwiseTeamContainer}>
                  <p className={styles.theLaunchwiseTeam}>
                    The LaunchWise team is very professional and 100%
                    transparent. We would surely recommend them to everyone who
                    wants to have a new business setup or those who already have
                    a company. Their experts are thorough with all corners of
                    business. They have surely earned us as their permanent
                    client.
                  </p>
                </div>
              </div>
              <div className={styles.authorInfo}>
                <div className={styles.authorDetails}>
                  <div className={styles.socialLinks} />
                </div>
                <div className={styles.sunilDuggalCeo}>
                   Sunil Duggal, CEO, Dabur Healthcare
                </div>
              </div>
            </div>
          </div>
          <div className={styles.clientDetails1}>
            <img
              className={styles.clientDetailsChild}
              loading="lazy"
              alt=""
              src="/frame-1000005733@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
