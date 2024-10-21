import styles from "./Form.module.css";

function SignUp() {
  return (
    <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
      <form action="#">
        <h1>Create Account</h1>
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
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
