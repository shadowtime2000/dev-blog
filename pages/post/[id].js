import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Post.module.css";
import axios from "axios";
import { NextSeo } from "next-seo";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import Profile from "../../components/Profile";
import Footer from "../../components/Footer";

function Post({ postContent, title, url, summary, profile_image, tags, published_at }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="title" content={title} />
        <meta name="author" content={process.env.NEXT_PUBLIC_USERNAME} />
        <meta name="description" content={`${title}`} />
        {tags ? <meta name="keywords" content={tags.join(", ")} /> : undefined}
        {process.env.NEXT_PUBLIC_BING_WEBMASTER ? (
          <meta
            name="msvalidate.01"
            content={process.env.NEXT_PUBLIC_BING_WEBMASTER}
          />
        ) : undefined}
        <NextSeo
          openGraph={{
            title,
            description: title,
            url,
            type: "article",
            article: {
              publishedTime: published_at,
              authors: [`https://dev.to/${process.env.NEXT_PUBLIC_USERNAME}`],
              tags,
            },
          }}
        />
        <title>
          {title} | {process.env.NEXT_PUBLIC_USERNAME}'s DEV Blog
        </title>
      </Head>
      <main>
        {tags
          ? tags.map((tag, i) => (
              <a
                key={i}
                href={`https://dev.to/t/${tag}`}
                target="_blank"
                className={styles.tag}
              >
                #{tag}{" "}
              </a>
            ))
          : undefined}
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
    data: { body_markdown, title, url, tags, published_at },
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
      tags,
      published_at
    },
    revalidate: 30,
  };
}

export default Post;
