const Product = require("../models/Product");

const uniqueRandom = require("unique-random");
const rand = uniqueRandom(0, 999999);

const queryCreator = require("../commonHelpers/queryCreator");
const filterParser = require("../commonHelpers/filterParser");
const _ = require("lodash");

exports.addImages = (req, res, next) => {
  if (req.files.length > 0) {
    res.json({
      message: "Photos are received"
    });
  } else {
    res.json({
      message:
        "Something wrong with receiving photos at server. Please, check the path folder"
    });
  }
};

exports.addProduct = (req, res, next) => {
  const productFields = _.cloneDeep(req.body);

  // productFields.itemNo = rand();

  try {
    productFields.name = productFields.name
      .toLowerCase()
      .trim()
      .replace(/\s\s+/g, " ");

    // const imageUrls = req.body.previewImages.map(img => {
    //   return `/img/products/${productFields.itemNo}/${img.name}`;
    // });

    // productFields.imageUrls = _.cloneDeep(imageUrls);
  } catch (err) {
    res.status(400).json({
      message: `Error happened on server: "${err}" `
    });
  }

  const updatedProduct = queryCreator(productFields);

  const newProduct = new Product(updatedProduct);

  newProduct
    .populate("categories.category")
    .populate("categories.category.topCategory")
    .populate("gender")
    .populate("sizeType")
    .populate("colors.color")
    .populate("colors.sizes.size")
    .populate("colors.sizes.size.sizeType")
    .execPopulate();

  newProduct
    .save()
    .then(product => res.json(product))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.updateProduct = (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .then(product => {
      if (!product) {
        return res.status(400).json({
          message: `Product with id "${req.params.id}" is not found.`
        });
      } else {
        const productFields = _.cloneDeep(req.body);

        try {
          productFields.name = productFields.name
            .toLowerCase()
            .trim()
            .replace(/\s\s+/g, " ");
        } catch (err) {
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          });
        }

        const updatedProduct = queryCreator(productFields);

        Product.findOneAndUpdate(
          { _id: req.params.id },
          { $set: updatedProduct },
          { new: true }
        )
          .populate("categories.category")
          .populate("categories.category.topCategory")
          .populate("gender")
          .populate("sizeType")
          .populate("colors.color")
          .populate("colors.sizes.size")
          .populate("colors.sizes.size.sizeType")
          .then(product => res.json(product))
          .catch(err =>
            res.status(400).json({
              message: `Error happened on server: "${err}" `
            })
          );
      }
    })
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getProducts = (req, res, next) => {
  const perPage = Number(req.query.perPage);
  const startPage = Number(req.query.startPage);
  const sort = req.query.sort;

  Product.find()
    .populate("categories.category")
    .populate("categories.category.topCategory")
    .populate("gender")
    .populate("sizeType")
    .populate("colors.color")
    .populate("colors.sizes.size")
    .populate("colors.sizes.size.sizeType")
    .sort(sort)
    .skip(startPage * perPage - perPage)
    .limit(perPage)
    .then(products => res.send(products))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getProduct = (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .populate("categories.category")
    .populate("categories.category.topCategory")
    .populate("gender")
    .populate("sizeType")
    .populate("colors.color")
    .populate("colors.sizes.size")
    .populate("colors.sizes.size.sizeType")
    .then(product => {
      if (!product) {
        res.status(400).json({
          message: `Product with id ${req.params.id} is not found`
        });
      } else {
        res.json(product);
      }
    })
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getProductByItemNo = (req, res, next) => {
  Product.findOne({ itemNo: req.params.itemNo })
    .populate("categories.category")
    .populate("categories.category.topCategory")
    .populate("gender")
    .populate("sizeType")
    .populate("colors.color")
    .populate("colors.sizes.size")
    .populate("colors.sizes.size.sizeType")
    .then(product => {
      if (!product) {
        res.status(400).json({
          message: `Product with itemNo ${req.params.itemNo} is not found`
        });
      } else {
        res.json(product);
      }
    })
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getProductsFilterParams = async (req, res, next) => {
  const mongooseQuery = filterParser(req.query);
  const perPage = Number(req.query.perPage);
  const startPage = Number(req.query.startPage);
  const sort = req.query.sort;

  try {
    const products = await Product.find(mongooseQuery)
      .populate("categories.category")
      .populate("categories.category.topCategory")
      .populate("gender")
      .populate("sizeType")
      .populate("colors.color")
      .populate("colors.sizes.size")
      .populate("colors.sizes.size.sizeType")
      .sort(sort)
      .skip(startPage * perPage - perPage)
      .limit(perPage);

    const productsQuantity = await Product.find(mongooseQuery);

    res.json({ products, productsQuantity: productsQuantity.length });
  } catch (err) {
    res.status(400).json({
      message: `Error happened on server: "${err}" `
    });
  }
};

exports.searchProducts = async (req, res, next) => {
  if (!req.body.query) {
    res.status(400).json({ message: "Query string is empty" });
  }

  //Taking the entered value from client in lower-case and trimed
  let query = req.body.query
  .toLowerCase()
    .trim()
    .replace(/\s\s+/g, " ");

    // Creating the array of key-words from taken string
  let queryArr = query.split(" ");

  // Finding ALL products, that have at least one match
  let matchedProducts = await Product.find({$text: { $search: query }})
    .populate("categories.category")
    .populate("categories.category.topCategory")
    .populate("gender")
    .populate("sizeType")
    .populate("colors.color")
    .populate("colors.sizes.size")
    .populate("colors.sizes.size.sizeType")

  res.send(matchedProducts);
};

  exports.matchProductsByObject = async (req, res, next) => {
    try {
      const productsMatch = await Product.find(req.body)
        .populate("categories.category")
        .populate("categories.category.topCategory")
        .populate("gender")
        .populate("sizeType")
        .populate("colors.color")
        .populate("colors.sizes.size")
        .populate("colors.sizes.size.sizeType");

      const productsMatchCategory = await Product.find({categories: {$elemMatch: req.body}})
        .populate("categories.category")
        .populate("categories.category.topCategory")
        .populate("gender")
        .populate("sizeType")
        .populate("colors.color")
        .populate("colors.sizes.size")
        .populate("colors.sizes.size.sizeType");

      const productsMatchColor = await Product.find({colors: {$elemMatch: req.body}})
        .populate("categories.category")
        .populate("categories.category.topCategory")
        .populate("gender")
        .populate("sizeType")
        .populate("colors.color")
        .populate("colors.sizes.size")
        .populate("colors.sizes.size.sizeType");

      const productsMatchSize = await Product.find({'colors.sizes.size': req.body.size})
        .populate("categories.category")
        .populate("categories.category.topCategory")
        .populate("gender")
        .populate("sizeType")
        .populate("colors.color")
        .populate("colors.sizes.size")
        .populate("colors.sizes.size.sizeType");

      const products = [...productsMatch, ...productsMatchCategory, ...productsMatchColor, ...productsMatchSize];
      res.json(products);

    } catch (err) {
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      });
    }
  };
