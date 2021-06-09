import propTypes from "prop-types"
import styles from "./IndicatorIcon.module.css"
export default function IndicatorIcon({children, bgColor } = props) {
  return (
    <div className={styles.card_icon} style={{ backgroundColor: bgColor, maxWidth: "28px"}}>
      {children}
    </div>
  );
}
