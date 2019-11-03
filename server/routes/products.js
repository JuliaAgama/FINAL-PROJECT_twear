// const router = require('express').Router();
// const Product = require('../models/product');

// router.route('/')
//     .get(async function (req, res) {
//         try {
//             if (req.query.categoryId) {
//                 const data = await Product.find({category: req.query.categoryId});
//                 await res.json(data);
//             } else {
//                 const products = await Product.find({});
//                 await res.json(products);
//             }
//         } catch (err) {
//             return res.status(500).send(err);
//         }
//     })
//     .post(async function (req, res) {
//         try {
//             const newData = new Product({
//                 title: req.body.title,
//                 description: req.body.description,
//                 img: req.body.img,
//                 price: req.body.price,
//                 category: req.body.category,
//                 created_at: new Date(),
//                 updated_at: new Date()
//             });

//             await newData.save();
//             await res.json(newData);
//         } catch (err) {
//             return res.status(500).send(err);
//         }
//     });

// router.route('/:productId')
//     .get(async function (req, res) {
//         try {
//             const product = await Product.find({_id: req.params.productId});
//             await res.json(product);
//         } catch (err) {
//             return res.status(500).send(err);
//         }
//     })
//     .put(function (req, res) {
//         //    TODO-- post
//     })
//     .delete(async function (req, res) {
//         try {
//             const delData = await Product.findByIdAndRemove(req.params.productId);
//             await res.json(delData);
//         } catch (err) {
//             return res.status(500).send(err);
//         }
//     });

// module.exports = router;
