const mongoose = require('mongoose');
const {User} = require('../Model/user')
const {Book} = require('../Model/books')

//Fuctions for user crud
exports.createView = (req,res)=>{
  Book.find().
  then(books => {
      res.render('../views/pages/register_user', { books })
  });
}

exports.create = (req, res) => {
     const name = req.body.name;
     const psw = req.body.psw;
     const email = req.body.email;
     const books = req.body.books;
     const user1 = new User({name,psw,email,books})
     user1.save(user1).then(data => {
     res.redirect('/')
    });
}

exports.updateView = async (req, res) => {
       const userData = await User.findOne({
           _id: new mongoose.Types.ObjectId(req.params.id
           )
       });
       res.render('../views/pages/update_user', { userData })
   }
   
exports.update = (req,res)=>{
       const id = req.params.id;
       User.findByIdAndUpdate(id, req.body).
           then(userData => {
               if(userData){
                     res.redirect('/')
               }
           });
}

exports.remove = async (req,res) => {
       try {
         const id = req.params.id;
        await User.findByIdAndDelete(id);
        res.redirect('/')
       } catch (err) {
         res.status(500).send('Something went wrong');
       }
     }

exports.home = async(req,res)=>{
  const users = await User.find()
  .populate('books'); 

res.render('../views/pages/userlist', { users });
}

//Fuctions for book crud
exports.booklist = (req,res)=>{
     Book.find().then(book_data=>{
      res.render('../views/pages/booklist',{book_data})
     })
}

exports.createBook = (req,res)=>{
  const book = new Book({
    name: req.body.name,
    author: req.body.author,
    category: req.body.category
})
book.save(book).then(data => {
    res.redirect('/books');
});
}

exports.deleteBook = async (req,res) => {
  try {
    const id = req.params.id;
   await Book.findByIdAndDelete(id);
   res.redirect('/books')
  } catch (err) {
    console.error(err)
  }
}

exports.updateView_book = async (req, res) => {
  const bookData = await Book.findOne({
      _id: new mongoose.Types.ObjectId(req.params.id
      )
  });
  res.render('../views/pages/update_book', { bookData })
}

exports.update_book = (req,res)=>{
  const id = req.params.id;
  Book.findByIdAndUpdate(id, req.body).
      then(bookData => {
          if(bookData){
                res.redirect('/books')
          }
      });
}