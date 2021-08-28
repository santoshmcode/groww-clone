const express = require("express");
const router = express.Router();

const Stock = require("../models/stocks.model");

// Request comming form /dashboard
router.get("/", async (req, res) => {
    try {
        const stocks = await Stock.find().lean().exec();
        res.status(200).render("dashboard/stocks.ejs", { stocks });
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/stocks", async (req, res) => {
    try {
        const stocks = await Stock.find().lean().exec();
        res.status(200).render("dashboard/stocks.ejs", { stocks });
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/mutual-funds", (req, res) => {
    try {
        res.status(200).render("dashboard/mutual-funds.ejs");
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/fixed-deposit", (req, res) => {
    try {
        res.status(200).render("dashboard/fixed-deposit.ejs");
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/gold", (req, res) => {
    try {
        res.status(200).render("dashboard/gold.ejs");
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/us-stocks", (req, res) => {
    try {
        res.status(200).render("dashboard/us-stocks.ejs");
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

// Changes using DB

router.get("/buy-stocks/:id", async (req, res) => {
    try {
        let msg1 = ""
        let msg2 = ""
        const company = await Stock.findById(req.params.id).lean().exec();
        res.status(200).render("buy-stocks.ejs", { company, msg1, msg2 });
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

module.exports = router;
