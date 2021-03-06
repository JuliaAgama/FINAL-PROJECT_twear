const Cart = require("../models/Cart");
const Order = require("../models/Order");
const Product = require("../models/Product");
const sendMail = require("../commonHelpers/mailSender");
const validateOrderForm = require("../validation/validationHelper");
const queryCreator = require("../commonHelpers/queryCreator");
const productAvailibilityChecker = require("../commonHelpers/productAvailibilityChecker");
const subtractProductsFromCart = require("../commonHelpers/subtractProductsFromCart");
const _ = require("lodash");

const uniqueRandom = require("unique-random");
const rand = uniqueRandom(1000000, 9999999);

exports.placeOrder = async (req, res, next) => {
  // console.log('req.body: ', req.body)
  try {
    const order = _.cloneDeep(req.body);
    order.orderNo = String(rand());
    // let cartProducts = [];

    // if (req.body.deliveryInfo) {
    //   order.deliveryInfo = JSON.parse(req.body.deliveryInfo);
    // }

    // if (req.body.shipping) {
    //   order.shipping = JSON.parse(req.body.shipping);
    // }

    // if (req.body.paymentInfo) {
    //   order.paymentInfo = JSON.parse(req.body.paymentInfo);
    // }

    if (req.body.customer) {
      order.customer = req.body.customer;

      // cartProducts = await subtractProductsFromCart(order.customer);
    }

    // if (!req.body.products && cartProducts.length < 1) {
    //   res
    //     .status(400)
    //     .json({ message: "The list of products is required, but absent!" });
    // }

    // if (cartProducts.length > 0) {
    //   order.products = _.cloneDeep(cartProducts);
    // } else {
    //   order.products = JSON.parse(req.body.products);
    // }

    // order.totalSum = order.products.reduce(
    //   (sum, cartItem) =>
    //     sum + cartItem.product.currentPrice * cartItem.cartQuantity,
    //   0
    // );

    // const productAvailibilityInfo = await productAvailibilityChecker(
    //   order.products
    // );

    // if (!productAvailibilityInfo.productsAvailibilityStatus) {
    //   res.json({
    //     message: "Some of your products are unavailable for now",
    //     productAvailibilityInfo
    //   });
    // } else {
    //   const subscriberMail = req.body.email;
    //   const letterSubject = req.body.letterSubject;
    //   const letterHtml = req.body.letterHtml;

    //   const { errors, isValid } = validateOrderForm(req.body);

      // // Check Validation
      // if (!isValid) {
      //   return res.status(400).json(errors);
      // }

      // if (!letterSubject) {
      //   return res.status(400).json({
      //     message:
      //       "This operation involves sending a letter to the client. Please provide field 'letterSubject' for the letter."
      //   });
      // }

      // if (!letterHtml) {
      //   return res.status(400).json({
      //     message:
      //       "This operation involves sending a letter to the client. Please provide field 'letterHtml' for the letter."
      //   });
      // }

      const newOrder = new Order(order);

      if (order.customer) {
        newOrder.populate("customer").execPopulate();
      }

      newOrder
        .save()
        .then(async order => {
          // const mailResult = await sendMail(
          //   subscriberMail,
          //   letterSubject,
          //   letterHtml,
          //   res
          // );

          // res.json({ order, mailResult });
          res.json(order);
        })
        .catch(err =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          })
        );
    // }
  } catch (err) {
    res.status(400).json({
      message: `Error happened on server: "${err}" `
    });
  }
};

exports.updateOrder = (req, res, next) => {
  Order.findOne({ _id: req.params.id }).then(async currentOrder => {
    if (!currentOrder) {
      return res
        .status(400)
        .json({ message: `Order with id ${req.params.id} is not found` });
    } else {
      const order = _.cloneDeep(req.body);

      if (req.body.deliveryInfo) {
        order.deliveryInfo = JSON.parse(req.body.deliveryInfo);
      }

      if (req.body.shipping) {
        order.shipping = JSON.parse(req.body.shipping);
      }

      if (req.body.paymentInfo) {
        order.paymentInfo = JSON.parse(req.body.paymentInfo);
      }

      if (req.body.customer) {
        order.customer = req.body.customer;
      }

      if (req.body.products) {
        order.products = JSON.parse(req.body.products);

        // order.totalSum = order.products.reduce(
        //   (sum, cartItem) =>
        //     sum + cartItem.product.currentPrice * cartItem.cartQuantity,
        //   0
        // );

        const productAvailibilityInfo = await productAvailibilityChecker(
          order.products
        );

        if (!productAvailibilityInfo.productsAvailibilityStatus) {
          res.json({
            message: "Some of your products are unavailable for now",
            productAvailibilityInfo
          });
        }
      }

      const subscriberMail = req.body.email;
      const letterSubject = req.body.letterSubject;
      const letterHtml = req.body.letterHtml;

      const { errors, isValid } = validateOrderForm(req.body);

      // Check Validation
      if (!isValid) {
        return res.status(400).json(errors);
      }

      if (!letterSubject) {
        return res.status(400).json({
          message:
            "This operation involves sending a letter to the client. Please provide field 'letterSubject' for the letter."
        });
      }

      if (!letterHtml) {
        return res.status(400).json({
          message:
            "This operation involves sending a letter to the client. Please provide field 'letterHtml' for the letter."
        });
      }

      Order.findOneAndUpdate(
        { _id: req.params.id },
        { $set: order },
        { new: true }
      )
        .populate("customer")
        .then(async order => {
          const mailResult = await sendMail(
            subscriberMail,
            letterSubject,
            letterHtml,
            res
          );

          res.json({ order, mailResult });
        })
        .catch(err =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          })
        );
    }
  });
};

exports.cancelOrder = (req, res, next) => {
  Order.findOne({ _id: req.params.id }).then(async currentOrder => {
    if (!currentOrder) {
      return res
        .status(400)
        .json({ message: `Order with id ${req.params.id} is not found` });
    } else {
      const subscriberMail = req.body.email;
      const letterSubject = req.body.letterSubject;
      const letterHtml = req.body.letterHtml;

      const { errors, isValid } = validateOrderForm(req.body);

      // Check Validation
      if (!isValid) {
        return res.status(400).json(errors);
      }

      if (!letterSubject) {
        return res.status(400).json({
          message:
            "This operation involves sending a letter to the client. Please provide field 'letterSubject' for the letter."
        });
      }

      if (!letterHtml) {
        return res.status(400).json({
          message:
            "This operation involves sending a letter to the client. Please provide field 'letterHtml' for the letter."
        });
      }

      Order.findOneAndUpdate(
        { _id: req.params.id },
        { canceled: true },
        { new: true }
      )
        .populate("customer")
        .then(async order => {
          const mailResult = await sendMail(
            subscriberMail,
            letterSubject,
            letterHtml,
            res
          );

          res.json({ order, mailResult });
        })
        .catch(err =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          })
        );
    }
  });
};
exports.deleteOrder = (req, res, next) => {
  Order.findOne({ _id: req.params.id }).then(async order => {
    if (!order) {
      return res
        .status(400)
        .json({ message: `Order with id ${req.params.id} is not found.` });
    } else {
      const orderToDelete = await Order.findOne({ _id: req.params.id });

      Order.deleteOne({ _id: req.params.id })
        .then(deletedCount =>
          res.status(200).json({
            message: `Order witn id "${orderToDelete._id}" is successfully deletes from DB. Order Details: ${orderToDelete}`
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

exports.getOrders = (req, res, next) => {
  // console.log('req.user: ', req.user);
  Order.find({ customer: req.user.id })
    .populate("customer")
    .then(orders => res.json(orders))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getOrder = (req, res, next) => {
  Order.findOne({ _id: req.params.id })
    .populate("customer")
    .then(order => res.json(order))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getOrderbyOrderNo = (req, res, next) => {
  Order.findOne({ orderNo: req.params.orderNo })
    .populate("customer")
    .then(order => res.json(order))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};
