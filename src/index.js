require("dotenv").config({ path: "./src/config/.env" });
const express = require("express");
const connect = require("./config/db");
const path = require("path");
const { log } = require("console");

const app = express();

app.use(express.json());

// This is alrady defined middleware for static files.
app.use(express.static(path.join(__dirname, "../static")));



// Register View engine 
app.set('view engine', 'ejs')
// setting path for views folder, 
// requried only when your views folder having different name
app.set('views', 'view')

// home page
const homeRoute = require('./routes/home.route')
app.use('/', homeRoute);

// 404 page
app.use((req, res) => {
    try {
        res.status(404).render('404')
    } catch (err) {
        
    }
})


app.listen(process.env.PORT, async () => {
    try {        
        await connect()
    } catch (error) {
        console.log(error.message);        
    }
    console.log(`Listning, http://localhost:${process.env.PORT}`);
});
