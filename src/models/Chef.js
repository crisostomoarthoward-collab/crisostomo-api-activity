const mongoose = require('mongoose');

const chefSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    experience: {
        type: Number,
        min: 0,
        max: 50
    }
});

module.exports = mongoose.model('Chef', chefSchema);
