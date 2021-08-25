const express = require("express")
const router = express.Router()


// Request comming form /dashboard
router.get("/", (req, res) => {
    try {
        const str = "This is Dashboard";
        res.status(200).send(str);
    } catch (err) {
        res.status(400).send(str);
    }
});

module.exports = router;