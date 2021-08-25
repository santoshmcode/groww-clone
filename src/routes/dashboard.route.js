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



module.exports = router;