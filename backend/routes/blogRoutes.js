const express = require('express');
const router= express.Router();
const db= require('../db');

// POST /api/blogs

router.post('/', (req, res) => {
const { name, title, message} = req.body;

const sql = "INSERT INTO blogs (name, title, message) VALUES (?,?,?)";
db.query(sql, [name, title, message], (err, result) => {

if (err) {

console.error('Error inserting data:', err);
return res.status(500).json({ error: 'Database error' });

}

res.status(201).json({ message: 'Blog saved successfully', id: result.insertId});
});
});
module.exports=router;