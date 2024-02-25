import { Sequelize, DataTypes } from 'sequelize';
import { User } from '../Model/user.js';
import { Book } from '../Model/books.js'

// User CRUD

//create user
export const createView = async(req,res)=>{
    const books = await Book.findAll()
    res.render('../views/pages/createuser.ejs',{books})
}

export const createUser = async (req, res) => {
    const name = req.body.name;
    const psw = req.body.psw;
    const email = req.body.email;
    const books = req.body.books; 
    const user1 = await User.create({ username: name, email, password: psw });
    for (const bookId of books) {
      const book = await Book.findByPk(bookId);
      if (book) {
        await user1.addBook(book); 
      } 
    }
    res.redirect('/read');
  };

//read user and books issued by user
export const list = async (req, res) => {
    const users = await User.findAll({
      include: [{
        model: Book, 
        attributes: ['id', 'bookname', 'author'], 
      }],
    });
    res.render('../views/pages/Read.ejs', { users });
  };
  
//update user
export const update_view = async(req,res)=>{
    let id = req.params.id;
    id = id.slice(1);
    const user = await User.findOne({ where: { id} });
    console.log(id)
     res.render('../views/pages/userupdate.ejs',{user})
}

export const update_User = async(req,res)=>{
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
export const remove_User = async(req,res)=>{
    const id = req.params.id
    await User.destroy({
        where: {
          id:id
        }
      });
      res.redirect('/read');
}

//Book CRUD

//create book
export const createBook = async(req, res) => {
  const name = req.body.name;
  const author = req.body.author;
  const category = req.body.category;
  const book1 = await Book.create({bookname:name,author:author,category:category });
  res.redirect('/read')
}

//update book
export const update_view_book = async(req,res)=>{
  let id = req.params.id;
  id = id.slice(1);
  const book = await Book.findOne({ where: { id} });
   res.render('../views/pages/bookupdate.ejs',{book})
}

export const update_book = async(req,res)=>{
  let id = req.params.id;
  const book = await Book.findByPk(id);
  if (!book) {
      return res.send('Book not found');
  }
  const updatedBook = {
      bookname: req.body.name,
      author: req.body.author,
      category: req.body.category
  };
  book.update(updatedBook)
  .then(updatedBook => {
      console.log(updatedBook); 
      res.redirect('/read'); 
  })
  .catch(error => {
      console.error(error);
  });
}

//delete book
export const remove_book = async(req,res)=>{
  const id = req.params.id
  await Book.destroy({
      where: {
        id:id
      }
    });
    res.redirect('/read');
}
