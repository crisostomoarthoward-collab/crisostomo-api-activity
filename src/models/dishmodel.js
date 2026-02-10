const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    price: {
        type: Number,
        required: true,
        min: [0, 'Price cannot be negative'],
        max: [1000, 'Price cannot exceed 1000']
    },

    category: {
        type: String,
        enum: {
            values: ['Starters', 'Main', 'Dessert', 'Drinks'],
            message: '{VALUE} is not a valid category'
        },
        required: true
    },

    isVegetarian: {
        type: Boolean,
        default: false
    },

    // EMBEDDED reviews
    reviews: [
        {
            user: String,
            rating: {
                type: Number,
                min: 1,
                max: 5
            },
            comment: String
        }
    ],

    // REFERENCE to Chef
    chef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chef'
    }
});

module.exports = mongoose.model('Dish', dishSchema);
