const Product = require('../model/ProductsModel');

// Create Product
exports.CreateProduct = async (req,res) => {
    try{
        const reqBody = req.body;
        const data = await Product.create(reqBody);
        res.status(200).json({status:'success',data:data});
    }catch(err) {
        res.status(400).json({status:'fail',data:err});
    }
}
// Read Product
exports.ReadProduct = async (req,res) => {
    try{
        const data = await Product.find();
        res.status(200).json({status:'success',data:data});
    }catch (err) {
        res.status(400).json({status:'fail',data:err});
    }
}
// Read Product By Id
exports.ReadProductById = async (req,res) => {
    try{
        const query ={_id:req.params.id};
        const data = await Product.findById(query);
        res.status(200).json({status:'success',data:data});
    }catch (err) {
        res.status(400).json({status:'fail',data:err});
    }
}
// Update Product
exports.UpdateProduct = async (req,res) => {
    try{
        const id = req.params.id;
        const query = {_id:id};
        const reqBody = req.body;
        await Product.findByIdAndUpdate(query,reqBody);
        const data = await Product.find(query);
        res.status(200).json({status:'success',data:data});
    }catch (err) {
        res.status(400).json({status:'fail',data:err});
    }
}
// Delete Product
exports.DeleteProduct = async (req,res) => {
    try{
        const id = req.params.id;
        const query = {_id:id};
        const data = await Product.deleteOne(query);
        res.status(200).json({status:'success',data:data});
    }catch (err) {
        res.status(400).json({status:'fail',data:err});
    }
}
