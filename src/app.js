import express from "express";
import { getTweets, postTweet } from "./controllers/tweet-controller.js";
import userSignUp from "./controllers/user-controller.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/sign-up", userSignUp);

app.get("/tweets", getTweets);

app.post("/tweets", postTweet);

app.listen(5000);