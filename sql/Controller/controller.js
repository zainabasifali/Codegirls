import { Sequelize, DataTypes } from 'sequelize';
import { User } from '../Model/user.js';

//create user
export const create = async(req, res) => {
    const name = req.body.name;
    const psw = req.body.psw;
    const email = req.body.email;
    const user1 = await User.create({username:name,email:email,password:psw });
    res.redirect('/read')
}

//read users
export const list = async(req,res)=>{
    const users = await User.findAll()
    res.render('../views/pages/userlist.ejs',{users});
}

//update user
export const update_view = async(req,res)=>{
    let id = req.params.id;
    id = id.slice(1);
    const user = await User.findOne({ where: { id} });
    console.log(id)
     res.render('../views/pages/userupdate.ejs',{user})
}

export const update = async(req,res)=>{
    let id = req.params.id;
    console.log(id)
    const user = await User.findByPk(id);
    if (!user) {
        return res.send('User not found');
    }
    const updatedUser = {
        username: req.body.name,
        email: req.body.email,
        password: req.body.psw
    };
    user.update(updatedUser)
    .then(updatedUser => {
        console.log(updatedUser); 
        res.redirect('/read'); 
    })
    .catch(error => {
        console.error(error);
    });
}

//delete user
export const remove = async(req,res)=>{
    const id = req.params.id
    await User.destroy({
        where: {
          id:id
        }
      });
      res.redirect('/read');
}