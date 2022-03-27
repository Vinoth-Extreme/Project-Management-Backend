// 1. Title = title of the project
// 2. Description = optional
// 3. Author = student user id
// 4. Thesis_url = document uploaded for this project
// 5. uploaded_at = timestamp when the document is uploaded by the user
// 6. Mentor = mentor user id
// 7. Keywords = [String]
// 8. Status = pending (default) || submitted || verified || Backlog
// 9. due_date = timestamp

const mongoose = require("mongoose");
const User = require("./User");

const ProjectsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: false,
    },

    Author: {
        type: mongoose.Types.ObjectId,
        ref: 'Users'
    },

    thesis_url: {
        type: String,
        required: false,
    },

    uploaded_at: {
        type: Date,
        required: false,
    },

    mentor: {
        type: mongoose.Types.ObjectId,
        ref: 'Users'
    },

    keyowrds: [String],

    status: {
        type: String,
        enum: ["pending", "submitted", "verified", "backlog"],
        default: "pending",
        required: true,
    },

    due_date: {
        type: Date
    }
})

module.exports = mongoose.model('Projects', ProjectsSchema);