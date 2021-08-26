const express = require("express");
const router = express.Router();

// Request comming form /dashboard
router.get("/", (req, res) => {
    try {
        res.status(200).render("dashboard/stocks.ejs");
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/stocks", (req, res) => {
    try {
        res.status(200).render("dashboard/stocks.ejs");
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

router.get("/buy-stocks", (req, res) => {
    try {
        let company = {
            company_name: "HDFC Bank",
            current_stock_price: 2345,
            logo: "https://assets-netstorage.groww.in/stock-assets/logos/INE002A01018.png",
            is_growing: true,
            grow_value: 0.34,
        };
        res.status(200).render("buy-stocks.ejs", {company});
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

module.exports = router;
