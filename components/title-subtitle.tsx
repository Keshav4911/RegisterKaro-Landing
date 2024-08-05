import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./title-subtitle.module.css";

export type TitleSubtitleType = {
  className?: string;
  nullaLobortisNunc?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propPosition?: CSSProperties["position"];
  propDisplay?: CSSProperties["display"];
  propFlexDirection?: CSSProperties["flexDirection"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propPosition1?: CSSProperties["position"];
  propHeight1?: CSSProperties["height"];
  propTop?: CSSProperties["top"];
  propRight?: CSSProperties["right"];
  propBottom?: CSSProperties["bottom"];
  propLeft?: CSSProperties["left"];
  propFlex1?: CSSProperties["flex"];
  propDisplay1?: CSSProperties["display"];
  propFlexDirection1?: CSSProperties["flexDirection"];
  propPosition2?: CSSProperties["position"];
  propHeight2?: CSSProperties["height"];
  propTop1?: CSSProperties["top"];
  propLeft1?: CSSProperties["left"];
  propDisplay2?: CSSProperties["display"];
  propFlex2?: CSSProperties["flex"];
  propFontWeight?: CSSProperties["fontWeight"];
};

const TitleSubtitle: NextPage<TitleSubtitleType> = ({
  className = "",
  propHeight,
  propPosition,
  propDisplay,
  propFlexDirection,
  propAlignSelf,
  propFlex,
  propPosition1,
  propHeight1,
  propTop,
  propRight,
  propBottom,
  propLeft,
  propFlex1,
  propDisplay1,
  propFlexDirection1,
  nullaLobortisNunc,
  propPosition2,
  propHeight2,
  propTop1,
  propLeft1,
  propDisplay2,
  propFlex2,
  propFontWeight,
}) => {
  const titleSubtitleStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      position: propPosition,
      display: propDisplay,
      flexDirection: propFlexDirection,
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [
    propHeight,
    propPosition,
    propDisplay,
    propFlexDirection,
    propAlignSelf,
    propFlex,
  ]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      position: propPosition1,
      height: propHeight1,
      top: propTop,
      right: propRight,
      bottom: propBottom,
      left: propLeft,
      flex: propFlex1,
      display: propDisplay1,
      flexDirection: propFlexDirection1,
    };
  }, [
    propPosition1,
    propHeight1,
    propTop,
    propRight,
    propBottom,
    propLeft,
    propFlex1,
    propDisplay1,
    propFlexDirection1,
  ]);

  const nullaLobortisNuncStyle: CSSProperties = useMemo(() => {
    return {
      position: propPosition2,
      height: propHeight2,
      top: propTop1,
      left: propLeft1,
      display: propDisplay2,
      flex: propFlex2,
      fontWeight: propFontWeight,
    };
  }, [
    propPosition2,
    propHeight2,
    propTop1,
    propLeft1,
    propDisplay2,
    propFlex2,
    propFontWeight,
  ]);

  return (
    <div
      className={[styles.titlesubtitle, className].join(" ")}
      style={titleSubtitleStyle}
    >
      <div className={styles.text} style={textStyle}>
        <div
          className={styles.nullaLobortisNunc}
          style={nullaLobortisNuncStyle}
        >
          {nullaLobortisNunc}
        </div>
      </div>
    </div>
  );
};

export default TitleSubtitle;
