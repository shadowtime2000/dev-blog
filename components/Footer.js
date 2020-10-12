import { Link } from "@material-ui/core";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      Created with ❤️ by{" "}
      <Link href="https://github.com/shadowtime2000" target="_blank">
        shadowtime2000
      </Link>
    </div>
  );
}
