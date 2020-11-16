import { memo } from "react";

import styles from "../styles/Header.module.css";

function Header() {
  return (
    <>
      <h1 className={styles.title}>
        <a
          href={`https://dev.to/${process.env.NEXT_PUBLIC_USERNAME}`}
          target="_blank"
        >
          {process.env.NEXT_PUBLIC_USERNAME}
        </a>
        's DEV Blog
      </h1>
    </>
  );
}

export default memo(Header, () => true);
