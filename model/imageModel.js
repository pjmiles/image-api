const mongoose = require('mongoose')

const ImageSchema = mongoose.Schema({
    title :{
        type: String,
        required: true
    },
    image:{
        data: Buffer,
        contentType: String
    }
})

module.exports = mongoose.model('ImageModel', ImageSchema)