const express = require("express");
const app  = express();
const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
    todoData : String,
    createAt : Date,
});

const todoModel = mongoose.model("todo",TodoSchema);

module.exports = todoModel;
