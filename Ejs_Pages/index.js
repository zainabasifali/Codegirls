// index.js
const e = require("express");
const app = e();
app.set("view engine","ejs");
app.use(e.static('public/Images'))

app.get('/', function(req, res) {
  res.render('pages/home');
})
app.get('/about', function(req, res) {
    res.render('pages/about');
  })

app.get('/contact', function(req, res) {
    res.render('pages/contact');
  })

app.get('/gallery', function(req, res) {
    res.render('pages/gallery');
  })

app.listen(3000)