require('dotenv').config();
const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const { validateToken } = require('../../utility');

const EXPIRE_IN = '18s';

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  if ( !username || !password) {
    res.status(401).send('incorrect credential!')
  } else {
    try {
      const user = await User.findOne({username, password}).select('-password');
      if (user){
        const token = jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: EXPIRE_IN });
        const userInfo = {
          expire: EXPIRE_IN, // need to be update for front end
          id: user._id,
          name: user.name,
          access_token: token,
          username: user.username,
        }
        res.status(200).json(userInfo);
      } else {
        res.status(404).json('No User found.');
      } 
    } catch (err) {
      console.log('sss',err);
      res.status(500).send('something went wrong!')
    } 
  }
});

router.post('/token', validateToken ,async (req, res) => {
  jwt.verify(req.token, process.env.SECRET_KEY, function (err, data){
    if (err) {
      res.status(403).send(err);
    } else {
      res.status(200).json({
        ...data
      })
    }
  })
});



module.exports = router;


