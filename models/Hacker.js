const mongoose = require('mongoose');

const hackerSchema = new mongoose.Schema({
    name: String,
    email: String,
    school: String,
    major: String,
    age: Number,
    id: Number
}, {collection: 'Hackers'});

module.exports = mongoose.model("Hacker", hackerSchema);