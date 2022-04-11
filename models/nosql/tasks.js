const mongoose = require("mongoose")
const TasksSchema = new mongoose.Schema(
    {
        task: {
            type: String,
            required: true,
        },
        completed: {
            type: Boolean,
            default: false,
        },
        userId:{
            type: String,
        },
        folderId: {
            type: String,
        }


    },
    {
        timestamps:true,  //in the upper fields it automatically creates time stamps //TODO createdAt, updateAt
        versionKey: false,
    }
)

module.exports = mongoose.model("tasks", TasksSchema)