const Category = require("../models/Category");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.addCategory = (req, res, next) => {
  Category.findOne({ _id: req.body.id }).then(category => {
    if (category) {
      return res
        .status(400)
        .json({ message: `Category with _id "${category._id}" already exists` });
    } else {
      const newCategory = new Category(queryCreator(req.body));

      newCategory
      .populate("topCategory")
      .populate("gender")
      .execPopulate();

      newCategory
        .save()
        .then(category => res.json(category))
        .catch(err =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          })
        );
    }
  });
};

exports.updateCategory = (req, res, next) => {
  Category.findOne({ _id: req.params.id })
    .then(category => {
      if (!category) {
        return res.status(400).json({
          message: `Category with _id "${req.params.id}" is not found.`
        });
      } else {
        const initialQuery = _.cloneDeep(req.body);
        const updatedCategory = queryCreator(initialQuery);

        Category.findOneAndUpdate(
          { _id: req.params.id },
          { $set: updatedCategory },
          { new: true }
        )
        .populate("topCategory")
        .populate("gender")
          .then(category => res.json(category))
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

exports.deleteCategory = (req, res, next) => {
  Category.findOne({_id: req.params.id }).then(async category => {
    if (!category) {
      return res
      .status(400)
      .json({
        message: `Category with id "${req.params.id}" is not found.`
      });
    } else {
      const categoryToDelete = await Category.findOne({_id: req.params.id });

      Category.deleteOne({_id: req.params.id })
        .then(deletedCount =>
          res.status(200).json({
            message: `Category "${categoryToDelete.name.toUpperCase()}" witn id "${categoryToDelete.id}" is successfully deleted from DB.`,
            deletedCategoryInfo: categoryToDelete
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

exports.getCategories = (req, res, next) => {
  Category.find()
  .populate("topCategory")
  .populate("gender")
    .then(category => res.send(category))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getCategory = (req, res, next) => {
  Category.findOne({_id: req.params.id })
  .populate("topCategory")
  .populate("gender")
    .then(category => {
      if (!category) {
        return res.status(400).json({
          message: `Category with id "${req.params.id}" is not found.`
        });
      } else {
        res.status(200).json(category);
      }
    })
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.searchCategories = async (req, res, next) => {
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

  // Finding ALL categories, that have at least one match
  let matchedCategories = await Category.find({
    $text: { $search: query }
  })
  .populate("topCategory")
  .populate("gender");

  res.send(matchedCategories);
};

exports.matchCategoriesByObject = async (req, res, next) => {
  try {
    const categoriesMatch = await Category.find(req.body)
    .populate("topCategory")
    .populate("gender");

    res.json(categoriesMatch);
  } catch (err) {
    res.status(400).json({
      message: `Error happened on server: "${err}" `
    });
  }
};
