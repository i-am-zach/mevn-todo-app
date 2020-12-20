const express = require('express')
const mongoose = require('mongoose');
require("dotenv").config();
const bodyParser = require("body-parser");
const todoRouter = require("./routes/todo.js");

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use('/todo', todoRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const password = process.env.MONGO_PASS;
const dbName = process.env.MONGO_DBNAME;
const connectionString = `mongodb+srv://mongoUser:${password}@cluster0.ega4m.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
  console.log("We've connected to MongoDB!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})