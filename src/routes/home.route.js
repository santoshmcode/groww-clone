const express = require("express")
const router = express.Router()


// Request comming form /
router.get('/', (req, res) => {
    try {
        res.status(200).render("index.ejs");
    } catch (err) {
        return res.status(400).send(err.message);
    }
})

module.exports = router;