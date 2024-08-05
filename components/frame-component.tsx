import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.rowWrapper, className].join(" ")}>
      <div className={styles.row}>
        <div className={styles.colMd4}>
          <div className={styles.cardItem}>
            <img
              className={styles.icnResizeIcnMd}
              loading="lazy"
              alt=""
              src="/icn-resize-icnmd.svg"
            />
            <h2 className={styles.h3FeatureTitle1}>Unleash Flexibility</h2>
            <div className={styles.paragraph}>
              Work from anywhere in India with a prestigious virtual address.
            </div>
          </div>
        </div>
        <div className={styles.colMd4}>
          <div className={styles.cardItem}>
            <img
              className={styles.icnResizeIcnMd}
              loading="lazy"
              alt=""
              src="/icn-resize-icnmd.svg"
            />
            <h2 className={styles.h3FeatureTitle1}>Simplify Operations</h2>
            <div className={styles.paragraph1}>
              Get a mailing address, access GST registration, and enjoy
              streamlined services.
            </div>
          </div>
        </div>
        <div className={styles.colMd42}>
          <div className={styles.cardItem2}>
            <img
              className={styles.icnResizeIcnMd}
              loading="lazy"
              alt=""
              src="/icn-resize-icnmd1.svg"
            />
            <h2 className={styles.h3FeatureTitle1}>Boost Credibility</h2>
            <div className={styles.paragraph2}>
              Project a professional image and attract top talent nationwide.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
