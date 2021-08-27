const express = require("express");
const router = express.Router();

const Stock = require("../models/stocks.model");

router.get("/", async (req, res) => {
    try {
        const stocks = await Stock.find().lean().exec();
        // return res.status(200).send(stocks);
        res.status(200).render("investments.ejs", { stocks });
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

module.exports = router;
