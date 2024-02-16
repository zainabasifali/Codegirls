const express = require("express");
const { create, updateView,update,remove, booklist, createView, createBook, deleteBook,updateView_book, update_book,admin,checkAllow} = require('../Controller/controller');
const router = express.Router();

// Getting

//Home page of users
router.get('/', function(req,res){
    res.render('../views/pages/admin.ejs')
});

//Add a user
router.get('/add',checkAllow,createView);

//Update a user
router.get('/update/:id',checkAllow,updateView);

//Delete a user
router.get('/delete/:id',checkAllow,function(req,res){
    const user_id = req.params.id;
    res.render('../views/pages/delete_user',{user_id})
})
router.get('/delete/confirmed/:id',remove)

// Book page
router.get('/books',checkAllow,booklist)

// Add a book
router.get('/addbook',checkAllow,function(req,res){
    res.render('../views/pages/add_book')
})

//Delete a book
router.get('/deletebook/:id',checkAllow,function(req,res){
    const book_id = req.params.id
    res.render('../views/pages/delete_book',{book_id})
})
router.get('/deletebook/confirmed/:id',checkAllow,deleteBook)

//Update a book
router.get('/updatebook/:id', checkAllow, updateView_book);

// Postings
router.post('/',admin)
//Add a user
router.post('/add',create)
//Upadate a user
router.post('/update/:id', update);
//Add a book
router.post('/addbook',createBook)
//Update a book
router.post('/updatebook/:id',update_book)


module.exports = router;