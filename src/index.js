require("dotenv").config({ path: "./src/config/.env" });
const express = require("express");
const connect = require("./config/db");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

// This is alrady defined middleware for static files.
app.use(express.static(path.join(__dirname, "../static")));

// Register View engine
app.set("view engine", "ejs");
// setting path for views folder,
// requried only when your views folder having different name
app.set("views", "dynamic/views");

// To use req.body in the post method we use pass this variable as a 2nd argument in router.post()
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// home page Route
const homeRoute = require("./routes/home.route");
app.use("/", homeRoute);

// dashboard page Route
const dashboardRoute = require("./routes/dashboard.route");
app.use("/dashboard", dashboardRoute);

// Investments Route
const investmentsRoute = require("./routes/investments.route")
app.use("/investments", investmentsRoute);

// Profile Route
const profileRoute = require("./routes/profile.route")
app.use("/profile", profileRoute);

// Wallet Route
const walletRoute = require("./routes/wallet.route")
app.use("/wallet", walletRoute);
// 404 page
app.use((req, res) => {
    try {
        res.status(404).render("404");
    } catch (err) {}
});

app.listen(process.env.PORT, async () => {
    try {
        await connect();
    } catch (error) {
        console.log(error.message);
    }
    console.log(`Listning, http://localhost:${process.env.PORT}`);
});
