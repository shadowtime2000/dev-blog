import Head from "next/head";
import styles from "../styles/About.module.css";
import axios from "axios";

import Header from "../components/Header";

function About({ profile_image, summary, github_username, twitter_username }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content={process.env.NEXT_PUBLIC_USERNAME} />
        <meta
          name="description"
          content={`${process.env.NEXT_PUBLIC_USERNAME}'s DEV Blog`}
        />
        {process.env.NEXT_PUBLIC_BING_WEBMASTER ? (
          <meta
            name="msvalidate.01"
            content={process.env.NEXT_PUBLIC_BING_WEBMASTER}
          />
        ) : undefined}
        <title>About | {process.env.NEXT_PUBLIC_USERNAME}'s DEV Blog</title>
      </Head>
      <main>
        <Header />
        <img width={100} src={profile_image} />
        <strong>{summary}</strong>
        <div>
          {github_username ? (
            <a href={`https://github.com/${github_username}`}>Github</a>
          ) : undefined}
          {twitter_username ? (
            <a href={`https://twitter.com/${twitter_username}`}>Twitter</a>
          ) : undefined}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const {
    data: { summary, profile_image, github_username, twitter_username },
  } = await axios.get("https://dev.to/api/users/me", {
    headers: { "api-key": process.env.API_KEY },
  });
  return {
    props: {
      summary,
      profile_image,
      github_username,
      twitter_username,
    },
    revalidate: 30,
  };
}

export default About;
