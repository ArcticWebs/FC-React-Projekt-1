import styles from "./Footer.module.scss";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import clsx from "clsx";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={clsx("container", styles.footerContent)}>
        <p>Lanthan Electronics - wszelkie prawa zastrzeżone, 2023</p>
        <div>
          <FaInstagram />
          <FaFacebookSquare />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
