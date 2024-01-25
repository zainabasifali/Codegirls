const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended:true }))


app.get('/login', function(req, res) {
  res.render('pages/login');

});


app.post('/home', function(req, res) {
const fname = req.body.fname;
const email = req.body.email;
const psw = req.body.psw;

  if (fname === "Zainab" && psw === "123") {
      res.render('pages/home',{fname,psw});
  } else {
    const error = "Incorrect username or password";
    res.render('pages/error', { error });
  }
});

app.listen(3000);
console.log('Server is listening on port 3000');
