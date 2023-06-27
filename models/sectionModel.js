const mongoose = require ('mongoose')

const SectionSchema = new mongoose.Schema({
    userId:{
        type:String,
    },
   subject:{
        type:String,
        required:[true,'subject is required']
    },
    authorName:{
        type:Object,
        required:[true,'Author Name is required']
    },
    bookName:{
        type:String,
        required:[true,'Book Name is required']
    },
    website:{
        type:String,
    },
});

const sectionModel = mongoose.model('section',SectionSchema)
module.exports = sectionModel