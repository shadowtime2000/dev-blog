import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";

import BlogPost from "../components/BlogPost";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

//TODO: Support pagination

function Home({ posts, summary, profile_image, website_url }) {
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
        {process.env.NEXT_PUBLIC_PAYMENT_POINTER ? (
          <meta
            name="monetization"
            content ={process.env.NEXT_PUBLIC_PAYMENT_POINTER}
          />
        ) : undefined}
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
            coverImage={post.cover_image}
            views={post.page_views_count === 0 ? "<25" : post.page_views_count}
            id={post.id}
          />
        ))}
      </main>
      <Profile
        summary={summary}
        avatarURL={profile_image}
        websiteURL={website_url}
      />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const { data: posts } = await axios.get(
    "https://dev.to/api/articles/me/published",
    {
      headers: { "api-key": process.env.API_KEY },
    }
  );
  const {
    data: { summary, profile_image },
  } = await axios.get(
    `https://dev.to/api/users/by_username?url=${process.env.NEXT_PUBLIC_USERNAME}`
  );
  return {
    props: {
      summary,
      profile_image,
      website_url: `https://dev.to/${process.env.NEXT_PUBLIC_USERNAME}`,
      posts,
    },
    revalidate: 30,
  };
}

export default Home;
