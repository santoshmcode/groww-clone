const express = require("express");
const router = express.Router();

const CurrentUser = require("../models/currentUser.model");
const User = require("../models/users.model");

router.get("/basic-details", async (req, res) => {
    const currentUser = await CurrentUser.find().lean().exec();
    const user = await User.findById(currentUser[0].userID);
    console.log(user);
    return res.status(200).render("profile/basic-details", {user})
});

module.exports = router;
