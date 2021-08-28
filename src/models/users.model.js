const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: { type: String, require: true, unique: false },
        user_email: { type: String, require: true, unique: true },
        user_password: { type: String, require: true },
        dob: { type: String, require: true, unique: false },
        mobile_no: { type: Number, require: true, unique: true },
        pan_no: { type: String, require: true, unique: true },
        gender: { type: String, require: true, unique: false },
        current_balance: { type: Number, default: 0, unique: false },
        holding_company: [],
        holding_stocks_no: [],
    },
    {
        versionKey: false,
    }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
