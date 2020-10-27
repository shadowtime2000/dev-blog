import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";

import BlogPost from "../components/BlogPost";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

//TODO: Support pagination

function Home() {
  const [posts, setPosts] = useState([]);
  const [avatarURL, setAvatarURL] = useState("");
  const [websiteURL, setWebsiteURL] = useState(
    `https://dev.to/${process.env.NEXT_PUBLIC_USERNAME}`
  );
  const [summary, setSummary] = useState("Summary Here");

  useEffect(() => {
    axios
      .get(`/api/profile`)
      .then((res) => res.data)
      .then((res) => {
        setSummary(res.summary);
        return res;
      })
      .then((res) => {
        setAvatarURL(res.profile_image);
        return res;
      })
      .then((res) =>
        setWebsiteURL(
          res.website_url == undefined ? websiteURL : res.website_url
        )
      );
  }, []);

  useEffect(() => {
    axios
      .get(`/api/posts`)
      .then((res) => res.data)
      .then((res) => setPosts(res))
      .catch((err) => console.log);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="author"
          content={`${process.env.NEXT_PUBLIC_USERNAME}'s DEV Blog`}
        />
        <meta
          name="description"
          content={`${process.env.NEXT_PUBLIC_USERNAME}'s DEV Blog`}
        />
        <title>{process.env.NEXT_PUBLIC_USERNAME}'s DEV Blog</title>
      </Head>
      <main>
        <Header />
        {posts.map((post, index) => (
          <BlogPost
            commentsCount={post.comments_count}
            reactionCount={post.public_reactions_count}
            postTitle={post.title}
            key={index}
            tags={post.tag_list}
            postLink={post.url}
            coverImage={post.cover_image}
            views={post.page_views_count === 0 ? "<25" : post.page_views_count}
          />
        ))}
      </main>
      <Profile summary={summary} avatarURL={avatarURL} websiteURL={websiteURL} />
      <Footer />
    </div>
  );
}

export default Home;
