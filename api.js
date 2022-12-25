const mongoose = require("mongoose")
const Form = require("./db")
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express')
const app = express();

mongoose.connect("mongodb+srv://shahzama:Nothing2542@cluster0.0nkmlfk.mongodb.net/test").then(() => {
  console.log("database connected")
}).catch(() => {
  console.log("Database Error");
})
app.use(cors());
app.use(bodyParser.json())
const port = 3000 || process.port
app.post('/api/contact', async (req, res) => {
  console.log(req.body);
  const form = await Form(req.body)
  await form.save()
  res.send('Thank You !');
});
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
