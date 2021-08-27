const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        user_email: { type: "string", require: true, unique: true },
        user_password: { type: "string", require: true, unique: true},
        
    },
    {
        versionKey: false,
    }
);

const User = mongoose.model("stocks", userSchema);
module.exports = User;
