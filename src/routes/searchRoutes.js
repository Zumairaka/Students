const express = require('express');
const searchRouter = express.Router();
const {studentModel} = require('../models/studentModel');

function router(nav){
    searchRouter.route('/')
        .get((req,res)=>{
            res.render(
                'search',
                {
                    nav,
                    title:'Search Student'
                }
            );
        });

    searchRouter.route('/save')
        .post((req,res)=>{
            studentModel.find(req.body,(error,data)=>{
                if(error){
                    throw error;
                }
                else{
                    res.json(data);
                }
            });
        });

    return searchRouter;
}

module.exports = router;