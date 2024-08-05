import type { NextPage } from "next";
import styles from "./content.module.css";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  return (
    <div className={[styles.content2, className].join(" ")}>
      <div className={styles.group44Parent}>
        <img
          className={styles.group44Icon}
          loading="lazy"
          alt=""
          src="/group44@2x.png"
        />
        <div className={styles.contentBlocks}>
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src="/mask-group-6@2x.png"
          />
        </div>
        <div className={styles.contentBlocks1}>
          <img
            className={styles.weWork1}
            loading="lazy"
            alt=""
            src="/we-work-1.svg"
          />
        </div>
        <div className={styles.contentBlocks2}>
          <img
            className={styles.maskGroupIcon1}
            loading="lazy"
            alt=""
            src="/mask-group-7@2x.png"
          />
        </div>
        <div className={styles.contentBlocks3}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-1.svg"
          />
        </div>
        <div className={styles.contentBlocks3}>
          <img
            className={styles.maskGroupIcon2}
            loading="lazy"
            alt=""
            src="/mask-group-8@2x.png"
          />
        </div>
      </div>
      <div className={styles.emailForm}>
        <div className={styles.cardItem}>
          <h2 className={styles.h3}>
            <p
              className={styles.subscribeForLatest}
            >{`Subscribe For Latest `}</p>
            <p className={styles.subscribeForLatest}>Newsletter</p>
          </h2>
          <div className={styles.inputBlock}>
            <div className={styles.formControlInputStyle1}>
              <div className={styles.labelContainer}>
                <div className={styles.yourEmail}>Your Email</div>
              </div>
              <button className={styles.btn}>
                <div className={styles.footerContainer}>Subscribe</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
