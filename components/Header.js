import { memo } from "react";

import styles from "../styles/Header.module.css";

import { Link } from "@material-ui/core";

function Header() {
  return (
    <>
      <h1 className={styles.title}>
        <Link
          href={`https://dev.to/${process.env.NEXT_PUBLIC_USERNAME}`}
          target="_blank"
        >
          {process.env.NEXT_PUBLIC_USERNAME}
        </Link>
        's DEV Blog
      </h1>
    </>
  );
}

export default memo(Header, () => true);
