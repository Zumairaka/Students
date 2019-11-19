const mongoose = require('mongoose');
const searchSchema = new mongoose.Schema(
    {
        admno:Number
    }
);
const searchModel = mongoose.model('Search',searchSchema);
module.exports = {searchModel};