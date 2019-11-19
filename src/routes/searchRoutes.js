const express = require('express');
const searchRouter = express.Router();
const {searchModel} = require('../models/searchModel');

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
            var search = new searchModel(req.body);
            search.save((error,data)=>{
                if(error){
                    res.json({"Status":"Error"});
                    throw error;
                }
                else{
                    res.json({"Status":"Success"});
                }
            });
        });

    return searchRouter;
}

module.exports = router;