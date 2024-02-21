import styles from "./Navbar.module.scss";
import clsx from "clsx";
import logo from "assets/Logo.png";
import { navOptions } from "data/navOptions";
import { nanoid } from "nanoid";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1024) {
      setShowMenu(false);
    }
  };
  return (
    <nav className={styles.navContainer}>
      <div className={clsx("container", styles.navbar)}>
        <div className={styles.logoBox}>
          <img src={logo} alt="my logo" className={styles.logo} />
        </div>
        <div className={clsx(styles.menu, showMenu && styles.showMenu)}>
          <ul className={styles.navLinks}>
            {navOptions.map((option) => (
              <li key={nanoid()}>
                <a
                  href={option.path}
                  onClick={closeMenuOnMobile}
                  className={option.isDisallowed && styles.disallowed}
                >
                  {option.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.navBtn} onClick={toggleMenu}>
          {showMenu ? <IoClose /> : <IoMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
