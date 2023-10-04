import mongoose from "mongoose";
const { Schema } = mongoose;

const students = new Schema({
    name: {
        type: String,
    },
    batch: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    inCommunity: {
        type: Boolean,
        default: false,
    },
    verified: {
        type: Boolean,
        default: false
    }
});
const studentSchema = mongoose.model("students", students);
export default studentSchema
