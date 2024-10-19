const express = require("express"); 

const app = express(); 

const cors = require("cors"); 

const mongoose = require("mongoose");

require("dotenv").config();

const User = require('./models/user.model')

// const bcrypt = require("bcrypt");

const port = process.env.PORT || 5000;

// const Router = require('./Routes/Routes')
// const cookieParser = require('cookie-parser')

app.use(express.json());
// app.use(cookieParser())

app.use(
  cors({
    // origin: "http://localhost:5173",
    // credentials: true
  })
);




app.get('/test', (req, res) => {
    console.log('Test route Hit!!**')
    res.json({msg: 'Hey!!'})
}),


app.post('/create', (req, res) => {
    console.log('created route hit!!', req.body)
    User.create(req.body)
    .then(created => {
        console.log('created', created)
        res.json(created)
    })
}),

app.get('/getUsers', (req, res) => {
  console.log('getUsers:')
  User.find()
  .then(found => {
    console.log('foundGetUsers', found)
    res.json(found)
  })
 }),

 app.delete('/delete/:id', (req, res) => {
  console.log('req.p', req.params)
  User.findByIdAndDelete(req.params.id)
  .then((deleted) => {
    console.log('found deleted', deleted)
    // res.json(deleted)
  })
  .catch(err => console.log(err))
 }),

 app.put('/update/:id', (req, res) => {
  console.log('req.body**', req.body)
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(edited => {
     console.log('edited', edited)
     res.json(edited)
  })
  .catch(err => {
     console.log("error", err)
     res.status(400).json({msg: 'Error updating username', error: err})
  })
 })





// Router(app);

app.listen(port, () => {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("connected to Database");
  });

  console.log(`Server is running on port: ${port} `);
});