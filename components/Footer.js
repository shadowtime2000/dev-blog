import { memo } from "react";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      Created with ❤️ by{" "}
      <a href="https://github.com/shadowtime2000" target="_blank">
        shadowtime2000
      </a>
    </div>
  );
}

export default memo(Footer, () => true);
