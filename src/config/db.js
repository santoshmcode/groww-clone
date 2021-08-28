require("dotenv").config({ path: "./src/config/.env" });

const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
        `mongodb+srv://${process.env.DB_MOD}:${process.env.DB_MOD_PASS}@cluster0.03tb2.mongodb.net/GrowDB?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }
    );
};

module.exports = connect;

