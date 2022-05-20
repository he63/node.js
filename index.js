const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose
  .connect('mongodb+srv://he_63:a7764946@boiler-plate.kvsbn.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB'))
  .catch((e) => {
    console.error(e);
  });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})