import styles from "./Index.module.css";
import { Formik } from "formik";
import { useRouter } from "next/router";

const LoginForm = () => {
  const router = useRouter();
  const requiredPasswordLength = 8;
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Email is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email please correct";
          } else if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password.length < requiredPasswordLength) {
            errors.password = `Password length is less than ${requiredPasswordLength}`;
          } else if (!/.*[0-9].*/.test(values.password)) {
            errors.password = "Password must includes number";
          } else if (!/.*[A-Za-z].*/.test(values.password)) {
            errors.password = "Password must includes letters";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          router.push("/dashboard")
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className={styles.container}>
            <label className={styles.container__label}>
              <span className={styles.container__label__text}>
                Email address
              </span>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email address"
                className={styles.container__input}
              />
              <span className={styles.container__input__error}>
                {errors.email && touched.email && errors.email}
              </span>
            </label>
            <label className={styles.container__label}>
              <span className={styles.container__label__text}>Password</span>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter strong password"
                className={styles.container__input}
              />
              <span className={styles.container__input__error}>
                {errors.password && touched.password && errors.password}
              </span>
            </label>

            <button
              type="submit"
              className={styles.container__button}
              disabled={isSubmitting || !!errors.email || !!errors.password}
            >
              Sign in
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
