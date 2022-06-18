//import User from "../model/User.js";

export const users = [];

const userSignUp = (req, res) => {
    
    const user = {
        username: req.body.username,
        avatar: req.body.avatar
    };
    console.log(user);
    users.push(user);
    res.send("OK");
};

export default userSignUp;

