// // server.js
// // import express from "express";
// // import fetch from "node-fetch";
// import express from "express";
// import cors from "cors";
// import fetch from "node-fetch";   // ✅ correct way in ESM
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// const REST_KEY = "your-rest-key";

// app.get("/route", async (req, res) => {
//   const { startLng, startLat, endLng, endLat } = req.query;
//   const url = `https://route.mappls.com/route/direction/route_adv/driving/${startLng},${startLat};${endLng},${endLat}?geometries=polyline&rtype=0&steps=false&region=IND&access_token=${REST_KEY}`;

//   const response = await fetch(url);
//   const data = await response.json();
//   res.json(data);
// });

// app.listen(3000, () => console.log("Proxy running on port 3000"));






// import express from "express";
// import cors from "cors";
// import fetch from "node-fetch";
// import path from "path";
// import { fileURLToPath } from "url";
// import dotenv from "dotenv";

// dotenv.config();
// const app = express();
// app.use(cors());

// // Fix dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Serve static files (like index1.html, js, css, etc.)
// app.use(express.static(__dirname));

// // Routing proxy
// app.get("/route", async (req, res) => {
//   try {
//     const { startLng, startLat, endLng, endLat } = req.query;
//     const resource = "route_adv";

//     const url = `https://route.mappls.com/route/direction/${resource}/driving/${startLng},${startLat};${endLng},${endLat}?geometries=polyline&rtype=0&steps=false&overview=full&region=IND&access_token=${process.env.MAPPLS_REST_KEY}`;

//     const response = await fetch(url);
//     const data = await response.json();
//     res.json(data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Route fetch failed" });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));











































import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const PORT = 3000;
const REST_KEY = process.env.REST_KEY; // ✅ stored in .env

// Proxy route
app.get("/route", async (req, res) => {
  const { startLng, startLat, endLng, endLat } = req.query;

  try {
    const resource = "route_adv"; // advanced routing
    const geopositions = `${startLng},${startLat};${endLng},${endLat}`;

    const url = `https://apis.mappls.com/advancedmaps/v1/${REST_KEY}/route_adv/driving/${geopositions}?geometries=polyline&rtype=0&steps=false&overview=full&region=IND`;

    console.log("➡ Fetching:", url); // ✅ debug log

    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
        console.log(data);

    res.json(data);
  } catch (err) {
    console.error("Route fetch failed", err);
    res.status(500).json({ error: "Failed to fetch route" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
