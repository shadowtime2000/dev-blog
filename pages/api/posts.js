import axios from "axios";

export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  axios
    .get("https://dev.to/api/articles/me/published", {
      headers: { "api-key": process.env.API_KEY },
    })
    .then((resp) => resp.data)
    .then((resp) => res.end(JSON.stringify(resp)));
}
