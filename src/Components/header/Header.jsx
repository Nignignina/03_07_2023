import { useState } from "react";
import styles from "./header.module.scss";
import { FaChevronDown } from "react-icons/fa6";

const Header = () => {
  const [openMenu, setOpenMenu] = useState();

  const showItems = (items) => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };
  // funziona, credo di avere problemi con la

  const menuItems = [
    {
      id: 1,
      label: "home",
      items: [{ id: 1, label: "A,1" }],
    },
    {
      id: 2,
      label: "sections",
      items: [
        { id: 1, label: "contact" },
        { id: 2, label: "help" },
        { id: 3, label: "wine" },
      ],
    },
    {
      id: 3,
      label: "Giovanni",
      items: [
        { id: 1, label: "contact" },
        { id: 2, label: "help" },
        { id: 3, label: "wine" },
      ],
    },
  ];

  return (
    <header className={styles.Header}>
      <div>LOGO</div>
      <ul className={styles.Header__menu}>
        {menuItems.map((items) => (
          <li
            className={styles.Header__menu__section}
            key={items.id}
            onClick={() => showItems(items?.id)}>
            {items.label}
            <span>
              <FaChevronDown />
            </span>
            <div
              className={`${styles.Header__menu__section_dropdown} ${
                openMenu && openMenu === items?.id ? styles.open : ""
              }`}>
              <ul>
                {items?.items?.map((item) => (
                  <li key={item?.id}>{item?.label}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <div>icons</div>
    </header>
  );
};

export default Header;
