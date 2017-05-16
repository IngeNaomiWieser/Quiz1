const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
});

// Getting the cookies,
router.post('/dashboard', (req, res) => {
const name = req.body.name;
let names = req.cookies.names || [];
const message = req.body.message;
let messages = req.cookies.messages || [];
names.push(name);
messages.push(message);
res.cookie('names', names)
res.cookie('messages', messages)
res.redirect('/dashboard');
});


// Display the cookies on the screen
router.get('/dashboard', (req, res) => {
  let names = req.cookies.names || [];
  let messages = req.cookies.messages || [];
  res.render('dashboard', {names: names, messages: messages});
});

module.exports = router
