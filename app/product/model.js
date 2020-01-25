const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema(
    {
   
        name: {
            type: String,
            required: true
        },

        model: {
            type: String,
            required: true
        },

        price: {
            type: Number,
            required: true,
            min: 1
        }

    }, 
    {
        timestamps: true
    }
)

const Product = mongoose.model("Product", ProductSchema)


module.exports = Product