const express = require('express');
const addRouter = express.Router();
const AddData = require('../models/Contentdata')

addRouter.post('/',async (req,res)=>{
    const Addcontent = new  AddData
    (
        {
            content: req.body.content,
        }
    );
    try{
        const savedContent = await Addcontent.save();
        res.json(savedContent);  
    }catch(err){
        console.log(err);
        res.json({'error':err});
    }
});

addRouter.get('/:id',async (req,res)=>{
    try {
        const content =await AddData.findById(req.params.id);
        res.json(content);      
    } catch (error) {
        res.json({msg:error});
    }
});
module.exports = addRouter;