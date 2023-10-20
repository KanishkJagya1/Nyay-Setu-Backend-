const express = require('express');
const bodyParser = require('body-parser');
const auth = require('./auth');
const db = require("../config/database");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
 const { username, password } = req.body;

 // Connect to the database
 db.connect()
   .then(() => {
     // Register the user
     auth.register(username, password)
       .then(user => {
         // Save the user to the database
         db.saveUser(user)
           .then(() => {
             res.status(201).json(user);
           })
           .catch(err => {
             res.status(500).json({ error: err.message });
           });
       })
       .catch(err => {
         res.status(500).json({ error: err.message });
       });
   })
   .catch(err => {
     res.status(500).json({ error: err.message });
   });
});

app.post('/login', (req, res) => {
 const { username, password } = req.body;

 // Connect to the database
 db.connect()
   .then(() => {
     // Login the user
     auth.login(username, password)
       .then(user => {
         // Save the user to the database
         db.saveUser(user)
           .then(() => {
             res.status(200).json(user);
           })
           .catch(err => {
             res.status(500).json({ error: err.message });
           });
       })
       .catch(err => {
         res.status(401).json({ error: err.message });
       });
   })
   .catch(err => {
     res.status(500).json({ error: err.message });
   });
});

app.get("/users",(req,res) => {
    db.connect().then(() => {

    })
})