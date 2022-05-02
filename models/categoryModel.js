import mongoose from "mongoose";
import shortid from "shortid";

const category = mongoose.Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    name: {
        type: 'string',
        required: true,
    },
}, { timestamps: true })
export const categoryModel = mongoose.model('category', category)