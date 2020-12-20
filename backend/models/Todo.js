const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema({
    name: String,
    complete: Boolean,
    upload_date: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Todo', TodoSchema);