import axios from "axios";

export default async function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const { data } = await axios.get("https://dev.to/api/articles/me/published", {
    headers: { "api-key": process.env.API_KEY },
  });
  res.end(JSON.stringify(data));
}
