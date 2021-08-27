const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const send = require("send");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const User = require("../models/users.model")

// Request comming form /
router.get("/", (req, res) => {
    try {
        res.status(200).render("index.ejs");
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/signin", (req, res) => {
    try {
        let msg = "";
        res.status(200).render("signin.ejs", { msg });
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.post("/signin", urlencodedParser, async (req, res) => {
    try {
        const user = req.body
        const userArray = await User.find({ user_email: user.user_email }).lean().exec()
        if (userArray.length == 0) {
            let msg = "Invalid Email or Password";
            return res.status(200).render("signin.ejs", { msg });
        }
        if (user.user_email == userArray[0].user_email && user.user_password == userArray[0].user_password) {
            //return res.status(200).redirect("/dashboard/stocks")
            return res.redirect("/dashboard")
        } else if (
            user.user_email == userArray[0].user_email &&
            user.user_password != userArray[0].user_password
        ) {
            let msg = "Wrong password"
            return res.status(200).render("signin.ejs", {msg})
        } else {
            let msg = "Invalid Email or Password";
            return res.status(200).render("signin.ejs", { msg });
        }
        
        
            
        
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

module.exports = router;
