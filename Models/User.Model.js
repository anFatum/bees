const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    login: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        trim: true
    },
    age: Number,
    passHash: {
        type: String,
        required: true
    },
    passSalt: {
        type: String,
        required: true
    },
    isConfirmed: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    // toObject: {
    //     transform: function (doc, ret) {
    //         delete ret._id;
    //     }
    // },
    toJSON: {
        transform: function (doc, ret) {
            delete ret.passHash;
            delete ret.passSalt;
        }
    }
});

module.exports = mongoose.model("User", userSchema);