const Product = require('../models/Product')
const router = require('express').Router()
const { verifyToken, verifyTokenAndAdmin } = require('./verifyToken')

//CREATE
router.post('/', verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body)
    try {
        const savedProduct = await newProduct.save()
        res.status(201).json(savedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
})

//UPDATE
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
   try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, 
        {
        $set: req.body
        }, 
        {new: true});
        res.status(200).json(updatedProduct)
   } catch (error) {
         res.status(500).json(error)
   }
});

//DELETE
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json('Product has been deleted...')
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET PRODUCT
router.get('/find/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
});

//GET ALL PRODUCTS
router.get('/', async (req, res) => {
    const qNew = req.query.new
    const qCategory = req.query.category
    try {
        // res.setHeader("Access-Control-Allow-Origin", "*")
        // res.setHeader("Access-Control-Allow-Credentials", "true");
        // res.setHeader("Access-Control-Max-Age", "1800");
        // res.setHeader("Access-Control-Allow-Headers", "content-type");
        // res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
        let products;
        if(qNew) {
            products = await Product.find().sort({createdAt: -1}).limit(5)
        } else if(qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory]
                }
            })
        }
        else {
            products = await Product.find()
        }
        res.status(200).json(products)
    }
    catch (error) {
        res.status(500).json(error)
    }
});

//GET PRODUCT STATS
router.get('/stats', async (req, res) => {

});

module.exports = router