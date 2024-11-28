const mongoose = require ('mongoose')
const conn = require('../config/mongo.js')
const { Schema } = mongoose;
require("dotenv").config();

conn()

const livroSchema = new Schema({
    id: Number,
    titulo: String,
    num_paginas: Number,
    isbn: String,
    editora: String,
},
{
    timestamps: true
})

const livroModel = mongoose.model('livros', livroSchema)

module.exports = livroModel, livroSchema