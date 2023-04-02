const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductController');

// Create
router.post('/CreateProduct', ProductController.CreateProduct);
// Read
router.get('/ReadProduct', ProductController.ReadProduct);
// Read BY Id
router.get('/ReadProductById/:id', ProductController.ReadProductById);
// Update
router.post('/UpdateProduct/:id', ProductController.UpdateProduct);
// Delete
router.get('/DeleteProduct/:id', ProductController.DeleteProduct);

module.exports=router;