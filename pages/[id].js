import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Post.module.css";
import axios from "axios";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import Header from "../components/Header";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

function Post({
  postContent,
  title,
  url,
  summary,
  profile_image,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content={process.env.NEXT_PUBLIC_USERNAME} />
        <meta
          name="description"
          content={`${process.env.NEXT_PUBLIC_USERNAME}'s DEV Blog`}
        />
        <title>
          {title} | {process.env.NEXT_PUBLIC_USERNAME}'s DEV Blog
        </title>
      </Head>
      <main>
        <Header />
        <ReactMarkdown plugins={[gfm]}>{postContent}</ReactMarkdown>
        <Link href="/">Back</Link> | <a href={url}>DEV.to</a>
        <Profile
          summary={summary}
          websiteURL={`https://dev.to/${process.env.NEXT_PUBLIC_USERNAME}`}
          avatarURL={profile_image}
        />
        <Footer />
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(ctx) {
  const {
    data: { body_markdown, title, url, },
  } = await axios.get(`https://dev.to/api/articles/${ctx.params.id}`);
  const {
    data: { summary, profile_image },
  } = await axios.get(
    `https://dev.to/api/users/by_username?url=${process.env.NEXT_PUBLIC_USERNAME}`
  );
  return {
    props: {
      postContent: body_markdown,
      title,
      url,
      summary,
      profile_image,
    },
    revalidate: 30,
  };
}

export default Post;
