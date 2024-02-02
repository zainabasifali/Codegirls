const mongoose = require('mongoose');
const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended:true }))

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://Zainab:zainab.asif21@atlascluster.0lrzazc.mongodb.net/Library');
  
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
     res.send("User is added")
  })
  app.listen(8000);
}