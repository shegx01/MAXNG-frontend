import Image from "next/image";
import styles from "./Index.module.css"
import propTypes from "prop-types"

const LeftSideBar = (props) => {
  const { headerText } = props;
  return (
    <div className={styles.leftSide}>
      <div className={styles.leftSide__container}>
        <div className={styles.leftSide__title}>{headerText}</div>
        <Image
          src="/home/undraw_to_the_stars.svg"
          alt="to the star"
          width="500"
          height="360"
        />
      </div>
    </div>
  );
};

LeftSideBar.propTypes = {
  headerText: propTypes.string.isRequired
}

export default LeftSideBar
