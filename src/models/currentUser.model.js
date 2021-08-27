const mongoose = require("mongoose");

const currentUserSchema = mongoose.Schema(
    {
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            require: true,
        },
    },
    {
        versionKey: false,
    }
);

const CurrentUser = mongoose.model("currentUser", currentUserSchema);

module.exports = CurrentUser;
