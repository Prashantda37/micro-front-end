const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/user');
const Designation = require('../../models/designation');


router.get('/users', async (req, res) => {
  try {
    // const usrs = await Designation
    //   .find({"title": "Software Engineer 22"})
    //   .populate('user');
    const users = await User.find();
      
    res.status(200).send(users)
  } catch(err){
    res.status(500).send('Something went wrong!');
  }
});

router.post('/users', async (req, res) => {
  
  const {name, username, password, age, address} = req.body;
  const user = new User({
    name, 
    username,
    password,
    age, 
    address
  });

  try {
    const newUser = await user.save();
    // wrote into 
    // const designation = new Designation({
    //   title: 'Software Engineer 22',
    //   user: newUser._id
    // });

    // console.log("======",mongoose.Types.ObjectId(newUser._id))

    // const newDesgination = await designation.save();
    //res.status(201).send({...newUser, ...newDesgination});
    res.status(201).send(newUser);
  } catch(err){
    res.status(500).send('Something went wrong!');
  }
});

module.exports = router;