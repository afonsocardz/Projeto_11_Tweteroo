//import Tweet from "../model/Tweet.js";
import users from "../controllers/user-controller.js";

const MAX_TWEETS = 10;

const tweets = [];

export const getTweets = (req, res) => {
    const newTweets = tweets.map( tweet => {
        const user = users.find(user => user.username === tweet.username);
        return {...tweet, avatar: user.avatar};
    });
    res.send(newTweets);
}

export const postTweet = (req, res)  => {
    const tweet = {
        username: req.body.tweet,
        tweet: req.body.tweet
    };

    if (tweets.length === MAX_TWEETS){
        tweets.shift();
        tweets.unshift(tweet);
    } else {
        tweets.push(tweet);
    }

    res.send("OK")
}