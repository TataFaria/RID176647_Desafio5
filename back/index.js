const express = require('express')
const mongoose = require('mongoose')
const app = express()
const livroModel = require('./src/model/livro.js')
const cors = require('cors')
require("dotenv").config();


app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3001;

app.get('/livros', async (req, res) => {
  const livros = await livroModel.find({})
  return res.status(200).json(livros)
})

app.post('/livros/cadastro', async (req, res) => {
  console.log(req.body);
  const response = await livroModel.create({
    id: req.body.id,
    titulo: req.body.titulo,
    num_paginas: req.body.num_paginas,
    isbn: req.body.isbn,
    editora: req.body.editora
  })
  return res.status(200).json({
    data: response
  })
})

app.get('/livros/edicao/:id', async (req, res) => {
  const livro = await livroModel.findOne({ id: Number (req.params.id)})
  return res.status(200).json(livro)
})

app.put('/livros/edicao/:id', async (req, res) => {
  const livro = await livroModel.updateOne({ id:Number (req.params.id) }, req.body)
  return res.status(200).json(livro)
})

app.delete('/livros/:id', async (req, res) => {
  const livro = await livroModel.deleteOne({ id:Number (req.params.id)})
  return res.status(200).json(livro)
})

app.listen(3001, () => {
    console.log('Servidor operacional!')
})

