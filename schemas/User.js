const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    usernsme: {
        required: true,
        type: String,
        unique: true
    },

    password: {
        required: true,
        type: String
    },

    email: {
        required: true,
        type: String,
        unique: true
    },

    role: {
        required: true,
        type: String,
        enum: ["admin", "mentor", "student"],
        default: "student"
    },
})

module.exports = mongoose.model('Users', UserSchema);