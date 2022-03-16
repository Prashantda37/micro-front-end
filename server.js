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

// cors
app.use(cors())
app.use(express.json());

// Routers defined
const auth = require('./routes/auth');
const users = require('./routes/user');

app.use('/v1/', auth);
app.use('/v1/', users);

app.listen(3737, () => {
  console.log("server is runing")
})
