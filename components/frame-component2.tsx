import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.fAQContentWrapper, className].join(" ")}>
      <div className={styles.fAQContent}>
        <div className={styles.linkContainerWrapper}>
          <div className={styles.linkContainer}>
            <div className={styles.questionsInMindWrapper}>
              <h1 className={styles.questionsInMind}>Questions in mind?</h1>
            </div>
            <div className={styles.readOurFaqWrapper}>
              <h3 className={styles.readOurFaq}>Read our FAQ</h3>
            </div>
            <div className={styles.largeMapParent}>
              <div className={styles.largeMap} />
              <div className={styles.largeMap} />
            </div>
          </div>
        </div>
        <div className={styles.questionListWrapper}>
          <div className={styles.questionList}>
            <div className={styles.howCanA}>
              How can a virtual office benefit my business in India?
            </div>
            <div className={styles.fAQDropdowns}>
              <img
                className={styles.fAQDropdownsChild}
                alt=""
                src="/group-35622.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.questionListWrapper}>
          <div className={styles.questionList}>
            <div className={styles.canILegally}>
              Can I legally register my business using a virtual office address
              in India?
            </div>
            <div className={styles.frameWrapper}>
              <img
                className={styles.fAQDropdownsChild}
                alt=""
                src="/group-35621.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.questionListWrapper}>
          <div className={styles.howWillIReceiveMyBusinessParent}>
            <div className={styles.howWillI}>
              How will I receive my business mail and packages with a virtual
              office?
            </div>
            <div className={styles.frameContainer}>
              <img
                className={styles.fAQDropdownsChild}
                alt=""
                src="/group-35621-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.fAQBlocks1}>
          <div className={styles.canIUseAVirtualOfficeAddParent}>
            <div className={styles.canIUse}>
              Can I use a virtual office address for official correspondence and
              marketing materials?
            </div>
            <div className={styles.frameContainer}>
              <img
                className={styles.fAQDropdownsChild}
                alt=""
                src="/group-35621-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.doVirtualOfficeServicesInParent}>
          <div className={styles.doVirtualOffice}>
            Do virtual office services in India include call answering and
            forwarding?
          </div>
          <div className={styles.frameContainer}>
            <img
              className={styles.fAQDropdownsChild}
              alt=""
              src="/group-35621-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
