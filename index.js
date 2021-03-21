const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8000;

const corsOption = {
  origin: "*",
};

app.use(cors());
app.use(bodyParser.json());

const shoppingRouter = require('./routes/shoppingRouteJar86')

app.use('/cartJar86', shoppingRouter)
app.use('/', shoppingRouter)

app.listen(port, () => {
  console.log(`Web service is listening on ${port}`);
});