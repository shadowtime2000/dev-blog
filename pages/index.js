import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";

import BlogPost from "../components/BlogPost";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

//TODO: Support pagination

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://dev.to/api/articles?username=${process.env.NEXT_PUBLIC_USERNAME}`
      )
      .then((res) => res.data)
      .then((res) => setPosts(res))
      .catch((err) => console.log);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_USERNAME}'s DEV Blog</title>
      </Head>
      <main>
        <Header />
        {posts.map((post, index) => (
          <BlogPost
            commentsCount={post.comments_count}
            reactionCount={post.public_reactions_count}
            publishedDate={post.readable_publish_date}
            postTitle={post.title}
            key={index}
            tags={post.tag_list}
            postLink={post.url}
            coverImage={post.cover_image}
          />
        ))}
      </main>
      <Profile />
      <Footer />
    </div>
  );
}
