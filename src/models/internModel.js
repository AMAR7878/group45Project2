const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const InternSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    collegeId: {
        type: ObjectId,
        ref: "collegeDB",

        isDeleted: { type: Boolean, default: false }
    }
}

    , { timestamps: true });



module.exports = mongoose.model('internDB', InternSchema)   