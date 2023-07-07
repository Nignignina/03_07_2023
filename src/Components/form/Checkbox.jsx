import { useState, useEffect } from "react";
import styles from "./Checkbox.module.scss";
import { FaCheck } from "react-icons/fa6";

const Checkbox = (props) => {
  const { checked } = props || null;
  const [isChecked, setIsChecked] = useState(checked);
  useEffect(() => {
    setIsChecked(isChecked);
  }, [isChecked]);

  const toggleChecked = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  return (
    <label
      className={`  ${styles.Checkbox} ${isChecked ? styles.activeInput : ""}`}>
      <input
        type="checkbox"
        name="name"
        className={styles.input}
        defaultChecked={isChecked}
        onClick={() => toggleChecked()}
      />

      <span
        className={`${styles.checked}   ${
          isChecked ? styles.activeCheck : ""
        }`}>
        <FaCheck />
      </span>
    </label>
  );
};

export default Checkbox;
