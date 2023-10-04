import mongoose from "mongoose";

const { Schema } = mongoose;

const studentsSchema = new Schema({
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
    isVerified: {
        type: Boolean,
        default: false
    },
    userDiscordId:{
        type: String,
        default: "",
    },
    userDiscordName :{
        type: String,
        default : ""
    }
});

const Student = mongoose.model("Student", studentsSchema);

export default Student;
