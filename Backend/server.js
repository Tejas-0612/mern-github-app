import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import path from "path";

import "./passport/github.auth.js";
import userRoute from "./routes/user.route.js";
import exploreRoute from "./routes/explore.route.js";
import authRoute from "./routes/auth.route.js";
import connectDB from "./db/index.js";

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
dotenv.config();

const app = express();

// no need to add cors as frontend & backend both are on same domain
// app.use(cors(corsOptions));

app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/explore", exploreRoute);

app.use(express.static(path.join(__dirname, "/Frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
  connectDB();
});
