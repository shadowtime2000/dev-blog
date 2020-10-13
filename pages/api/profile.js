import axios from "axios";

export default async function handler(req, res) {
  res.status(200);
  res.setHeader("Content-Type", "application/json");
  const { data } = await axios.get("https://dev.to/api/users/me", {
    headers: {
      "api-key": process.env.API_KEY,
    },
  });
  res.end(JSON.stringify(data));
}
