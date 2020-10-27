import { memo } from "react";
import { Link } from "@material-ui/core";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      Created with ❤️ by{" "}
      <Link href="https://github.com/shadowtime2000" target="_blank">
        shadowtime2000
      </Link>
    </div>
  );
}

export default memo(Footer, () => true);
