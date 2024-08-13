const mongoose = require('mongoose');

const BucketListSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    visited:{
        type:Boolean,
        default:false
    }
});
module.exports = mongoose.model('BucketList', BucketListSchema);