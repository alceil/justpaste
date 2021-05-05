const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentSchema = Schema
(
    {
        content:String
    }
);


module.exports = mongoose.model("Content",ContentSchema);