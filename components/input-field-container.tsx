import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./input-field-container.module.css";

export type InputFieldContainerType = {
  className?: string;
  label?: string;
  contentPlaceholder?: string;
  helpIcon?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const InputFieldContainer: NextPage<InputFieldContainerType> = ({
  className = "",
  label,
  propMinWidth,
  contentPlaceholder,
  helpIcon,
}) => {
  const labelStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.inputFieldContainer, className].join(" ")}>
      <div className={styles.inputField}>
        <div className={styles.inputFieldBase}>
          <div className={styles.inputWithLabel}>
            <div className={styles.label} style={labelStyle}>
              {label}
            </div>
            <div className={styles.input}>
              <input
                className={styles.content}
                placeholder={contentPlaceholder}
                type="text"
              />
              <img className={styles.helpIcon} alt="" src={helpIcon} />
            </div>
          </div>
          <div className={styles.hintText}>
            This is a hint text to help user.
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputFieldContainer;
