const mongoose = require('mongoose');

const studentModel = mongoose.model('Students',{
    sname:String,
    rollNo:Number,
    admno:Number,
    college:String
});

module.exports = {studentModel};