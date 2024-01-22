const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended:true }))


app.get('/login', function(req, res) {
  res.render('pages/login');

});


app.post('/index', function(req, res) {
  console.log(req.body);
  res.render('pages/index');
});

app.listen(3000);
console.log('Server is listening on port 3000');
