import { memo } from "react";
import styles from "../styles/Profile.module.css";

function Profile({ avatarURL, websiteURL, summary }) {
  return (
    <div className={styles.profile + " text-center w-full"}>
      <h3>
        <a href={websiteURL} color="inherit" target="_blank">
          {process.env.NEXT_PUBLIC_USERNAME}
        </a>
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
