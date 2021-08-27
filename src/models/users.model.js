const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        user_email: { type: "string", require: true, unique: true },
        user_password: { type: "string", require: true },
    },
    {
        versionKey: false,
    }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
