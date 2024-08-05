import type { NextPage } from "next";
import TitleSubtitle from "./title-subtitle";
import styles from "./testimonial.module.css";

export type TestimonialType = {
  className?: string;
};

const Testimonial: NextPage<TestimonialType> = ({ className = "" }) => {
  return (
    <div className={[styles.testimonial, className].join(" ")}>
      <div className={styles.testimonialContent}>
        <div className={styles.testimonialHeading}>
          <TitleSubtitle
            propHeight="unset"
            propPosition="unset"
            propDisplay="flex"
            propFlexDirection="row"
            propAlignSelf="unset"
            propFlex="1"
            propPosition1="unset"
            propHeight1="unset"
            propTop="unset"
            propRight="unset"
            propBottom="unset"
            propLeft="unset"
            propFlex1="1"
            propDisplay1="flex"
            propFlexDirection1="row"
            nullaLobortisNunc="Accessible. Affordable. Adaptable"
            propPosition2="relative"
            propHeight2="unset"
            propTop1="unset"
            propLeft1="unset"
            propDisplay2="inline-block"
            propFlex2="1"
            propFontWeight="bold"
          />
        </div>
        <div className={styles.benefitOneContent}>
          <div className={styles.testimonialQuote}>
            <img
              className={styles.testimonialQuoteChild}
              loading="lazy"
              alt=""
              src="/rectangle-2144@2x.png"
            />
          </div>
          <div className={styles.testimonialDetails}>
            <div className={styles.vestibulumSitAmetContainer}>
              <p className={styles.whetherYoureAn}>
                Whether you're an established enterprise or a scaling startup,
                your Virtual office should drive your business forward. Our
                virtual office solutions take your business places! (Accessible.
                Affordable. Adaptable)
              </p>
            </div>
            <div className={styles.testimonialCompany}>
              <div className={styles.companyLogo}>
                <div className={styles.contentWrapper}>
                  <div className={styles.testimonialTitle}>
                    <img
                      className={styles.shapeIcon}
                      loading="lazy"
                      alt=""
                      src="/shape.svg"
                    />
                  </div>
                  <div
                    className={styles.nullaLobortisNunc}
                  >{`Professional Image & Enhanced Credibility`}</div>
                </div>
                <div className={styles.interdumEtMalesuadWrapper}>
                  <div className={styles.interdumEtMalesuad}>
                    Elevate your company's image and attract top talent with a
                    professional virtual address for websites, business cards,
                    and marketing materials.
                  </div>
                </div>
                <div className={styles.testimonialContent1}>
                  <div className={styles.testimonialTitle}>
                    <div className={styles.innerShape}>
                      <div className={styles.itemTitle} />
                      <img
                        className={styles.groupIcon}
                        loading="lazy"
                        alt=""
                        src="/group.svg"
                      />
                    </div>
                  </div>
                  <TitleSubtitle
                    propHeight="unset"
                    propPosition="unset"
                    propDisplay="flex"
                    propFlexDirection="row"
                    propAlignSelf="stretch"
                    propFlex="unset"
                    propPosition1="unset"
                    propHeight1="unset"
                    propTop="unset"
                    propRight="unset"
                    propBottom="unset"
                    propLeft="unset"
                    propFlex1="1"
                    propDisplay1="flex"
                    propFlexDirection1="row"
                    nullaLobortisNunc="Streamlined Business Operations"
                    propPosition2="relative"
                    propHeight2="unset"
                    propTop1="unset"
                    propLeft1="unset"
                    propDisplay2="unset"
                    propFlex2="1"
                    propFontWeight="500"
                  />
                </div>
                <div className={styles.interdumEtMalesuad1}>
                  Access essential services like virtual assistants, answering
                  services, and teleconferencing – all under one roof.
                </div>
              </div>
              <div className={styles.featureBlock}>
                <div className={styles.fAQContainer}>
                  <img
                    className={styles.shapeIcon1}
                    loading="lazy"
                    alt=""
                    src="/shape-1.svg"
                  />
                  <div className={styles.nullaLobortisNunc1}>
                    Unmatched Work Flexibility
                  </div>
                  <div className={styles.interdumEtMalesuad2}>
                    Improve work-life balance by eliminating commutes and
                    allowing flexible schedules.
                  </div>
                </div>
                <div className={styles.fAQLink}>
                  <div className={styles.testimonialTitle}>
                    <img
                      className={styles.shapeIcon2}
                      loading="lazy"
                      alt=""
                      src="/shape-2.svg"
                    />
                  </div>
                  <TitleSubtitle
                    nullaLobortisNunc={`Scalable & Cost-Effective Solution`}
                  />
                </div>
                <div className={styles.interdumEtMalesuad3}>
                  Choose a virtual office plan that fits your needs and budget,
                  with options for various locations and service levels.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
