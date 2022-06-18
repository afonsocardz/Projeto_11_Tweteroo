import User from "../model/User.js";

export const users = [];

const userSignUp = (req, res) => {
    const user = new User({
        username: req.body.username,
        avatar: req.body.avatar
    })
    users.push(user);
    res.send("OK");
};

export default userSignUp;

