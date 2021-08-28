const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    try {
        return res.status(200).render("wallet.ejs")
    } catch (ree) {
        return res.status(400).send(err.message)
    }
})


module.exports = router;