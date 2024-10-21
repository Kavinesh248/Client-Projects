import { useState } from "react";
import styles from "./Form.module.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Welcome from "./Welcome";

function Form() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <div
      className={`${styles.container} ${
        isActive ? styles.rightPanelActive : ""
      }`}
      id="container"
    >
      <SignUp />
      <SignIn />
      <Welcome handleClick={handleClick} />
    </div>
  );
}

export default Form;
