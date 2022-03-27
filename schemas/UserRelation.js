const mongoose = require("mongoose");
const User = require("./User")

const UserRelationSchema = mongoose.Schema({
    mentor_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Users' //mentioned in User.js last line.
    },

    students_ids: [{
        type: mongoose.Types.ObjectId,
        ref: 'Users' //mentioned in User.js last line.
    }]
})

module.exports = mongoose.model('UserRelation', UserRelationSchema);