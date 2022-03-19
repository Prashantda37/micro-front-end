require('dotenv').config();
const express = require("express");
const cors = require('cors')
const app = express();

// DB connection
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('DB connected'))

// Configuration of CORS
var allowlist = ['http://localhost:3000', 'http://example2.com']
function corsOptionsDelegate(req, callback) {
  let corsOptions;
  if(allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

// Middleware
app.use(cors(corsOptionsDelegate));
app.use(express.json());

// Routers defined
const auth = require('./routes/auth');
const users = require('./routes/user');

app.use('/v1/', auth);
app.use('/v1/', users);

app.listen(3737, () => {
  console.log("server is runing")
})
