import axios from "axios";
import { SitemapStream, streamToPromise } from "sitemap";

export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
      cacheTime: 600000,
    });

    // List of posts
    const { data: posts } = await axios.get(
      "https://dev.to/api/articles/me/published",
      {
        headers: { "api-key": process.env.API_KEY },
      }
    );

    // Create each URL row
    posts.forEach((post) => {
      smStream.write({
        url: `/post/${post.id}`,
        changefreq: "weekly",
        priority: 0.65,
      });
    });

    smStream.write({
      url: "/",
      changefreq: "weekly",
      priority: 0.85,
    });

    // End sitemap stream
    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};
