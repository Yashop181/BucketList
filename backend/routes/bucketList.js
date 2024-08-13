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





module.exports = router;