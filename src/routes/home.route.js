const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    try {
        res.status(200).render("index");
    } catch (err) {
        return res.status(400).send(err.message);
    }
})

module.exports = router;