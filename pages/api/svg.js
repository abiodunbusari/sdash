import axios from "axios";
export default async function handler(req, res) {
  const { url } = req.query;
  try {
    const response = await axios.get(url, { responseType: "arraybuffer" });
    const svgBuffer = Buffer.from(response.data, "binary");
    res.setHeader("Content-Type", "image/svg+xml");
    res.end(svgBuffer);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}
