const mongoose = require('mongoose');
const express = require("express");
require('dotenv').config()

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended:true }))

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.uri);
  
  app.get('/register',function(req,res){
     res.render('pages/register');
  })

  app.post('/',async(req,res)=>{
     const user_schema = new mongoose.Schema({
        name:String,
        psw:String,
        email:String
     })
     const name = req.body.name;
     const psw = req.body.psw;
     const email = req.body.email;
     const User = mongoose.model('User',user_schema)
     const user1 = new User({name,psw,email})
     console.log(user1.name)
     console.log(user1.psw)
     await user1.save()
     res.send("welcome you are added")
  })
  app.listen(8000);
}