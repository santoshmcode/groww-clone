const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const CurrentUser = require("../models/currentUser.model");
const User = require("../models/users.model");

router.get("/", async (req, res) => {
    try {
        const currentUser = await CurrentUser.findOne().lean().exec();
        const userID = currentUser.userID;
        const user = await User.findById(userID).lean().exec();
        return res.status(200).render("wallet.ejs", { user });
    } catch (ree) {
        return res.status(400).send(err.message);
    }
});

router.post("/update_wallet", urlencodedParser, async (req, res) => {
    try {
        const data = req.body;

        const currentUser = await CurrentUser.findOne().lean().exec();
        const userID = currentUser.userID;
        const user = await User.findById(userID).lean().exec();
        let currentBalance = user.current_balance;
        let toAdd = data.add_balance;
        let total = currentBalance + toAdd/1;
        await User.findByIdAndUpdate(userID, { current_balance : total})
            .lean()
            .exec();
        return res.redirect("/wallet")
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

module.exports = router;
