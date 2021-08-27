const express = require("express");
const router = express.Router();

const CurrentUser = require("../models/currentUser.model");
const User = require("../models/users.model");

router.get("/basic-details", async (req, res) => {
    try {
        const currentUser = await CurrentUser.find().lean().exec();
        const user = await User.findById(currentUser[0].userID);
        return res.status(200).render("profile/basic-details", {user})
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/holding-stocks", async (req, res) => {
    try {
        const currentUser = await CurrentUser.find().lean().exec();
        const user = await User.findById(currentUser[0].userID);
        return res.status(200).render("profile/holding-stocks", { user });
    } catch (err) {
        return res.status(400).send(err.message);
    }
})


module.exports = router;
