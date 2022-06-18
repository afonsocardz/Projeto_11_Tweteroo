import { users } from "../controllers/user-controller.js";

const MAX_TWEETS = 10;
const tweets = [];

export const getTweets = (req, res) => {
    console.log(tweets);
    const newTweets = tweets.map(tweet => {
        console.log(tweet);
        const user = users.find(user => user.username == tweet.username);
        console.log(user);
        return { ...tweet, avatar: user.avatar };
    });
    res.send(newTweets);
}

export const postTweet = (req, res) => {
    const tweet = {
        username: req.body.username,
        tweet: req.body.tweet
    };

    if (tweets.length === MAX_TWEETS) {
        tweets.pop();
    }
    tweets.unshift(tweet);

    res.send("OK")
}