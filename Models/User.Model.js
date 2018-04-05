const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        trim: true
    },
    age: {
        type: Number
    }
});

module.exports = mongoose.model("User", userSchema);