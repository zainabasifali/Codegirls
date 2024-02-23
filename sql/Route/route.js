import express from 'express';
import { create,list,update_view,update,remove} from '../Controller/controller.js';
export const router = express.Router();

//create
router.get('/create', function(req,res){
    res.render('../views/pages/create.ejs')
});
router.post('/create',create);

//read
router.get('/read',list)

//update
router.get('/update/:id',update_view)
router.post('/update/:id',update)

//delete
router.get('/delete/:id',function(req,res){
    const user_id = req.params.id.slice(1);
    res.render('../views/pages/deleteuser',{user_id})
})
router.post('/delete/confirmed/:id',remove)