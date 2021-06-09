import styles from "./Index.module.css";
import propTypes from "prop-types";
import LoginForm from "./LoginForm/Index";

const MiddleContent = (props) => {
  const { formHeaderText } = props;
  return (
    <div className={styles.container}>
      <div className={styles.container__form_wrapper}>
        <div className={styles.container__header}>{formHeaderText}</div>
        <LoginForm />
      </div>
      <div className={styles.container__footer}>
        <div className={styles.container__footer__wrapper}>
          <span>
            All right reserved &copy; {new Date().getFullYear()} STAR WARS{" "}
          </span>
          <span>
            <a href="#">Privacy</a> <span className={styles.footer__privacy_divider}>|</span> <span>Terms</span>
            <span className={styles.footer__lang}>English</span>
          </span>
        </div>
      </div>
    </div>
  );
};

MiddleContent.propTypes = {
  formHeaderText: propTypes.string.isRequired,
};
export default MiddleContent;
