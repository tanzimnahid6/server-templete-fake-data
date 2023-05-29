const express = require("express");
const app = express();

const cors = require("cors");

const port = process.env.PORT || 5000;
const data = require('./sample.json');
// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get('/sample',(req,res)=>{
    res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
