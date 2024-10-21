import styles from "./Form.module.css";

function SignIn() {
  return (
    <div className={`${styles.formContainer} ${styles.signInContainer}`}>
      <form action="#">
        <h1>Sign in</h1>
        <div className={styles.socialContainer}>
          <a href="#" className={styles.social}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className={styles.social}>
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className={styles.social}>
            <i className="fab fa-apple"></i>
          </a>
        </div>
        <span>or use your account</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
