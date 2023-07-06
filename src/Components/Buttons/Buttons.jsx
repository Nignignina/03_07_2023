import styles from "./Buttons.module.scss";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

const Buttons = (props) => {
  const { icon, iconLeft, label, outline, text, size, square } = props || null;

  return (
    <button
      className={`${styles.Button}  ${iconLeft ? styles.icon__right : ""}
      ${outline ? styles.outline : styles.fill} 
      ${text ? styles.text : ""} ${square ? styles.square : ""} 
       ${size ? styles[size] : styles.default}`}>
      {label && label}
      {icon && <RiArrowRightLine className="size_icon" />}
    </button>
  );
};
export default Buttons;

//  <div className={`${styles.Container} ${iconLeft}`}></div>
