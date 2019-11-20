const Category = require("../models/Category");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.addCategory = (req, res, next) => {
  Category.findOne({ id: req.body.id }).then(category => {
    if (category) {
      return res
        .status(400)
        .json({ message: `Category with id "${category.id}" already exists` });
    } else {
      const newCategory = new Category(queryCreator(req.body));

      newCategory
      .populate("topCategory")
      .populate("genders.gender")
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
  Category.findOne({ id: req.params.id })
    .then(category => {
      if (!category) {
        return res.status(400).json({
          message: `Category with id "${req.params.id}" is not found.`
        });
      } else {
        const initialQuery = _.cloneDeep(req.body);
        const updatedCategory = queryCreator(initialQuery);

        Category.findOneAndUpdate(
          { id: req.params.id },
          { $set: updatedCategory },
          { new: true }
        )
        .populate("topCategory")
        .populate("genders.gender")
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
  Category.findOne({ id: req.params.id }).then(async category => {
    if (!category) {
      return res.status(400).json({
        message: `Category with id "${req.params.id}" is not found.`
      });
    } else {
      const categoryToDelete = await Category.findOne({ id: req.params.id });

      Category.deleteOne({ id: req.params.id })
        .then(deletedCount =>
          res.status(200).json({
            message: `Category witn id "${categoryToDelete.id}" is successfully deleted from DB.`,
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
    .then(category => res.send(category))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getCategory = (req, res, next) => {
  Category.findOne({ id: req.params.id })
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
