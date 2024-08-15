const express = require('express');
const router = express.Router();
const BucketList = require('../models/BucketList');

//Get all list

router.get('/', async (req,res)=>{
    try {
        const items = await BucketList();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
})

router.post('/',async (req,res)=>{
    const bucketList = new BucketList({
        name: req.body.name,
    });
    try {
        const newItem = await bucketList.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
})

//update a list item

router.patch('/:id', async(req,res)=>{
    try {
        const item = await BucketList.findById(req.params.id);
        if(req.body.name) item.name  = req.body.name;
        if(req.body.visited !== undefined) item.visited = req.body.visited;
        const updatedItem  = await item.save();
        res.json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
});

//delete a list item

router.delete('/:id', async(req,res)=>{
    try {
        await BucketList.findByIdAndDelete(req.params.id);
        res.json({ message: 'Item deleted'})
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
});
module.exports = router;