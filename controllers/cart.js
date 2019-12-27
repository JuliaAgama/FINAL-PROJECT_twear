const Cart = require("../models/Cart");
const Product = require("../models/Product");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");


exports.getCart = (req, res, next) => {
  // console.log(req.user._id);
  Cart.findOne({ customer: req.user._id })
    .populate("products.product")
    .populate("products.color")
    .populate("products.size")
    .populate("customer")
    .then(cart => res.json(cart))
    // .then(cart => {console.log(cart); return res.json(cart)})
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.createCart = (req, res, next) => {
  
  Cart.findOne({ customer: req.body.customer }).then(cart => {
    if (cart) {
      return res
        .status(400)
        .json({ message: `Cart for this customer already exists` });
    } else {
      const initialQuery = _.cloneDeep(req.body);
      initialQuery.customer = req.body.customer;

      const newCart = new Cart(queryCreator(initialQuery));
      newCart
        .populate("products.product")
        .populate("products.color")
        .populate("products.size")
        .populate("customer")
        .execPopulate();
      newCart
        .save()
        .then(cart => res.json(cart))
        .catch(err =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          })
        );
    }
  });
};

exports.updateCart = (req, res, next) => {
  Cart.findOne({ customer: req.user._id })
    .then(cart => {
      if (!cart) {
        const initialQuery = _.cloneDeep(req.body);
        initialQuery.customer = req.user._id;

        const newCart = new Cart(queryCreator(initialQuery));
        newCart
          .populate("products.product")
          .populate("products.color")
          .populate("products.size")
          .populate("customer")
          .execPopulate();
        newCart
          .save()
          .then(cart => res.json(cart))
          .catch(err =>
            res.status(400).json({
              message: `Error happened on server: "${err}" `
            })
          );
      } else {
        const initialQuery = _.cloneDeep(req.body);
        const updatedCart = queryCreator(initialQuery);

        Cart.findOneAndUpdate(
          { customer: req.user._id },
          { $set: updatedCart },
          { new: true }
        )
          .populate("products.product")
          .populate("products.color")
          .populate("products.size")
          .populate("customer")
          .then(cart => res.json(cart))
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

exports.deleteCart = (req, res, next) => {
  Cart.findOne({ customer: req.user._id }).then(async cart => {
    if (!cart) {
      return res
        .status(400)
        .json({ message: `Cart for this customer is not found.` });
    } else {
      const cartToDelete = await Cart.findOne({ customer: req._user.id });

      Cart.deleteOne({ customer: req.user._id })
        .then(deletedCount =>
          res.status(200).json({
            message: `Cart witn id "${cartToDelete._id}" is successfully deleted from DB `
          })
        )
        .catch(err =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          })
        );
    }
  });
};


exports.addProductToCart = async (req, res, next) => {
  // we expect req.params.productSku as: /productId&colorId&sizeId
  let productId = req.params.productSku.split('&')[0];
  let colorId = req.params.productSku.split('&')[1];
  let sizeId = req.params.productSku.split('&')[2];
  let productToAdd, colorToAdd, sizeToAdd;

  try {
    productToAdd = await Product.findOne({ _id: productId});
    colorToAdd = await Color.findOne({ _id: colorId });
    sizeToAdd = await Size.findOne({ _id: sizeId });
  } catch (err) {
    res.status(400).json({
      message: `Error happened on server: "${err}" `
    });
  }

  if (!productToAdd) {
    res.status(400).json({
      message: `Product with _id (ObjectId) "${productId}" does not exist`
    });
  } else if (!colorToAdd) {
    res.status(400).json({
      message: `Color with _id (ObjectId) "${colorId}" does not exist`
    });
  } else if (!sizeToAdd) {
    res.status(400).json({
      message: `Size with _id (ObjectId) "${sizeId}" does not exist`
    });

  } else {
    Cart.findOne({ customer: req.user._id })
      .then(cart => {
        if (!cart) {
          const cartData = {};
          cartData.customer = req.user._id;
          cartData.products = [].concat({
            product: productId,
            color: colorId,
            size: sizeId,
            cartQuantity: 1
          });
          const newCart = new Cart(queryCreator(cartData));
          newCart
            .populate("products.product")
            .populate("products.color")
            .populate("products.size")
            .populate("customer")
            .execPopulate();
          newCart
            .save()
            .then(cart => res.json(cart))
            .catch(err =>
              res.status(400).json({
                message: `Error happened on server: "${err}" `
              })
            );
        } else {
          const cartData = {};
          const productExistsInCart = cart.products.some(item =>
            item.product.toString() === productId &&
            item.color.toString() === colorId &&
            item.size.toString() === sizeId
          );
          if (productExistsInCart) {
            cartData.products = cart.products.map(item => {
              if (item.product.toString() === productId && item.color.toString() === colorId && item.size.toString() === sizeId) {
                item.cartQuantity += 1;
              }
              return item;
            });
          } else {
            cartData.products = cart.products.concat({
              product: productId,
              color: colorId,
              size: sizeId,
              cartQuantity: 1
            });
          }
          const updatedCart = queryCreator(cartData);
          Cart.findOneAndUpdate(
            { customer: req.user._id },
            { $set: updatedCart },
            { new: true }
          )
            .populate("products.product")
            .populate("products.color")
            .populate("products.size")
            .populate("customer")
            .then(cart => res.json(cart))
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
  }
};

exports.decreaseCartProductQuantity = async (req, res, next) => {
  // we expect req.params.productSku as: /productId&colorId&sizeId
  let productId = req.params.productSku.split('&')[0];
  let colorId = req.params.productSku.split('&')[1];
  let sizeId = req.params.productSku.split('&')[2];

  Cart.findOne({ customer: req.user._id })
    .then(cart => {
      if (!cart) {
        res.status(400).json({ message: "Cart does not exist" });
      } else {
        const cartData = {};
        const productExistsInCart = cart.products.some(item =>
          item.product.toString() === productId &&
          item.color.toString() === colorId &&
          item.size.toString() === sizeId
        );
        if (productExistsInCart) {
          cartData.products = cart.products.map(item => {
            if (item.product.toString() === productId && item.color.toString() === colorId && item.size.toString() === sizeId) {
              item.cartQuantity -= 1;
            }
            return item;
          });
          cartData.products = cart.products.filter(
            item => item.cartQuantity > 0
          );
        } else {
          res.status(400).json({
            message: `Product "${productId}" of color "${colorId}" in "${sizeId}" size does not exist in cart to decrease quantity`
          });
        }
        Cart.findOneAndUpdate(
          { customer: req.user._id },
          { $set: cartData },
          { new: true }
        )
          .populate("products.product")
          .populate("products.color")
          .populate("products.size")
          .populate("customer")
          .then(cart => res.json(cart))
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

exports.deleteProductFromCart = async (req, res, next) => {
  // we expect req.params.productSku as: /productId&colorId&sizeId
  let productId = req.params.productSku.split('&')[0];
  let colorId = req.params.productSku.split('&')[1];
  let sizeId = req.params.productSku.split('&')[2];

  Cart.findOne({ customer: req.user._id })
    .then(cart => {
      if (!cart) {
        res.status(400).json({ message: `Cart does not exist` });
      } else {
        if (!cart.products.some(item =>
          item.product.toString() === productId &&
          item.color.toString() === colorId &&
          item.size.toString() === sizeId)
        ) {
          res.status(400).json({
            message: `Product with _id "${productId}" of color "${colorId}" in "${sizeId}" size is absent in cart.`
          });
          return;
        }
        const cartData = {};
        cartData.products = cart.products.filter(item =>
          item.product.toString() !== productId &&
          item.color.toString() !== colorId &&
          item.size.toString() !== sizeId);

        const updatedCart = queryCreator(cartData);

        Cart.findOneAndUpdate(
          { customer: req.user._id },
          { $set: updatedCart },
          { new: true }
        )
          .populate("products.product")
          .populate("customer")
          .then(cart => res.json(cart))
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
