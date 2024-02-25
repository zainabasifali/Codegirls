import express from 'express';
import { createUser,list,update_view,createView,createBook, update_view_book, update_book, remove_book, update_User, remove_User} from '../Controller/controller.js';
export const router = express.Router();

//create User
router.get('/create', createView);
router.post('/create',createUser);

//create Book
router.get('/createbook',function(req,res){
    res.render('../views/pages/create_book.ejs')
})
router.post('/createbook',createBook)

//read
router.get('/read',list)

//update user
router.get('/update/:id',update_view)
router.post('/update/:id',update_User)

//update book
router.get('/updatebook/:id',update_view_book)
router.post('/updatebook/:id',update_book)

//delete user
router.get('/delete/:id',function(req,res){
    const user_id = req.params.id.slice(1);
    res.render('../views/pages/deleteuser',{user_id})
})
router.post('/delete/confirmed/:id',remove_User)

//delete book
router.get('/deletebook/:id',function(req,res){
    const book_id = req.params.id.slice(1);
    res.render('../views/pages/deletebook',{book_id})
})
router.post('/deletebook/confirmed/:id',remove_book)