const express = require("express")
const router = express.Router()


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




module.exports = router;