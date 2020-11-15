import { memo } from "react";
import styles from "../styles/Profile.module.css";

import { Link } from "@material-ui/core";

function Profile({ avatarURL, websiteURL, summary }) {
  return (
    <div className={styles.profile}>
      <h3>
        <Link href={websiteURL} color="inherit" target="_blank">
          {process.env.NEXT_PUBLIC_USERNAME}
        </Link>
      </h3>
      <p>{summary}</p>

      <img
        width={50}
        src={avatarURL}
        alt={`${process.env.NEXT_PUBLIC_USERNAME}'s DEV profile image`}
      />
    </div>
  );
}

export default memo(Profile, () => true);
