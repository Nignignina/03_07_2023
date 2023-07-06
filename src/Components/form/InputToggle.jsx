import styles from "./InputToggle.module.scss";
import { useState } from "react";

import React from "react";
const InputToggle = (props) => {
  const { toggled, size } = props || null;
  const [isToggled, setIsToggled] = useState(toggled);

  const handleToggled = () => {
    console.log("ciao");
    setIsToggled(!isToggled);
  };

  return (
    <>
      <label className={styles.InputToggle}>
        <input
          className={styles.input}
          type="checkbox"
          defaultChecked={isToggled}
          onClick={() => handleToggled()}
        />
        <span className={styles.toggle} />
      </label>
    </>
  );
};

export default InputToggle;
