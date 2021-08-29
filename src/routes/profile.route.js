const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const CurrentUser = require("../models/currentUser.model");
const User = require("../models/users.model");
const Stock = require("../models/stocks.model");

router.get("/basic-details", async (req, res) => {
    try {
        const currentUser = await CurrentUser.find().lean().exec();
        const user = await User.findById(currentUser[0].userID);
        return res.status(200).render("profile/basic-details", { user });
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/holding-stocks", async (req, res) => {
    try {
        const currentUser = await CurrentUser.find().lean().exec();
        const user = await User.findById(currentUser[0].userID);
        console.log('user:', user)
        sum = 0;
        for (let i = 0; i < user.holding_stocks_no.length - 1; i++) {
            sum += user.holding_stocks_no[i];
        }
        console.log('sum:', sum)
        return res.status(200).render("profile/holding-stocks", { user, sum });
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/change-password", async (req, res) => {
    try {
        const currentUser = await CurrentUser.find().lean().exec();
        const user = await User.findById(currentUser[0].userID);
        return res.status(200).render("profile/change-password", { user });
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/logout", async (req, res) => {
    try {
        const currentUser = await CurrentUser.find().lean().exec();
        await CurrentUser.findByIdAndDelete(currentUser[0]._id);
        return res.status(200).redirect("/");
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.post("/buy-stocks", urlencodedParser, async (req, res) => {
    try {
        const data = req.body;
        console.log("data:", data);
        const stock = await Stock.find({ company_name: data.company_name });
        console.log("stock:", stock[0]);

        const currentUser = await CurrentUser.find().lean().exec();
        const user = await User.findById(currentUser[0].userID);
        console.log("user:", user);

        if (
            stock[0].current_stock_price * (data.number_of_stocks / 1) >
            user.current_balance
        ) {
            res.status(200).render("unsuccessful.ejs");
        } else {
            let remeningBalance =
                user.current_balance -
                stock[0].current_stock_price * (data.number_of_stocks / 1);
            await User.findByIdAndUpdate(user._id, {
                current_balance: remeningBalance.toFixed(2),
            });
            // Currently Holding Stocks are remining
            user.holding_company.push(stock[0].company_name);
            user.holding_stocks_no.push(data.number_of_stocks / 1);
            await User.findByIdAndUpdate(currentUser[0].userID, {
                holding_company: user.holding_company,
                holding_stocks_no: user.holding_stocks_no,
            });
            res.status(200).render("successful.ejs");
        }
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

module.exports = router;
