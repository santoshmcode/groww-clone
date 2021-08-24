require("dotenv").config({ path: "./src/config/.env" });

const express = require("express");
const app = express();

app.use(express.json());

const connect = require("./config/db");

app.listen(process.env.PORT, async () => {
    try {        
        await connect()
    } catch (error) {
        console.log(error.message);        
    }
    console.log(`Listning, http://localhost:${process.env.PORT}`);
});
