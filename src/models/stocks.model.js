const mongoose = require("mongoose");

const stockSchema = mongoose.Schema(
    {
        company_name: { type: "string", require: true, unique: true },
        current_stock_price: { type: "number", require: true },
        logo: { type: String, require: true },
        is_growing: { type: Boolean, require: true },
        grow_value: { type: Number, require: true },
    },
    {
        versionKey: false,
    }
);

const Stock = mongoose.model("stocks", stockSchema);
module.exports = Stock;
