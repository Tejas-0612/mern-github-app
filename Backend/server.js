import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import userRoute from "./routes/user.route.js";
import exploreRoute from "./routes/explore.route.js";

const PORT = 5000;

dotenv.config();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use("/api/users", userRoute);
app.use("/api/explore", exploreRoute);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
