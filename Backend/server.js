import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import "./passport/github.auth.js";
import userRoute from "./routes/user.route.js";
import exploreRoute from "./routes/explore.route.js";
import authRoute from "./routes/auth.route.js";
import connectDB from "./db/index.js";
import passport from "passport";
import session from "express-session";

const PORT = 5000;
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, // This enables credentials in CORS
};
dotenv.config();

const app = express();
app.use(cors(corsOptions));
app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/explore", exploreRoute);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
  connectDB();
});
