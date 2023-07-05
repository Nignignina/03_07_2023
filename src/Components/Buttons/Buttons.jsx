import styles from "./Buttons.module.scss";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

const Buttons = (props) => {
  const { icon, iconLeft, label, outline, text, size, square } = props || null;
  // const showIcon = !!icon;
  // const icon_Position = icon !== "left" ? styles._icon__right : "";

  // const button_className = `${styles.Button}  ${icon_Position}`;
  return (
    <button
      className={`${styles.Button}  ${iconLeft ? styles.icon__right : ""}
      ${outline ? styles.outline : styles.fill} 
      ${text ? styles.text : ""} ${square ? styles.square : ""} 
       ${size ? styles[size] : styles.md}`}>
      {label && label}
      {icon && <RiArrowRightLine />}
    </button>
  );
};
export default Buttons;

//  <div className={`${styles.Container} ${iconLeft}`}></div>
