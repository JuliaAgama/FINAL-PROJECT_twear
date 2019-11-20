const TopCat = require("../models/TopCat");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.addTopCat = (req, res, next) => {
  TopCat.findOne({ name: req.body.name }).then(topCat => {
    if (topCat) {
      return res
        .status(400)
        .json({ message: `TopCat with name "${topCat.name}" already exists` });
    } else {
      const initialQuery = _.cloneDeep(req.body);
      const newTopCat = new TopCat(queryCreator(initialQuery));

      newTopCat
        .save()
        .then(topCat => res.json(topCat))
        .catch(err =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          })
        );
    }
  });
};

exports.updateTopCat = (req, res, next) => {
  TopCat.findOne({ _id: req.params.id })
    .then(topCat => {
      if (!topCat) {
        return res
          .status(400)
          .json({ message: `TopCat with _id "${req.params.id}" is not found.` });
      } else {
        const initialQuery = _.cloneDeep(req.body);
        const updatedTopCat = queryCreator(initialQuery);

        TopCat.findOneAndUpdate(
          { _id: req.params.id },
          { $set: updatedTopCat },
          { new: true }
        )
          .then(topCat => res.json(topCat))
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

exports.deleteTopCat = (req, res, next) => {
  TopCat.findOne({ _id: req.params.id }).then(async topCat => {
    if (!topCat) {
      return res
        .status(400)
        .json({ message: `TopCat with _id "${req.params.id}" is not found.` });
    } else {
      const topCatToDelete = await TopCat.findOne({ _id: req.params.id });

      TopCat.deleteOne({ _id: req.params.id })
        .then(deletedTopCat =>
          res.status(200).json({
            message: `TopCat witn name "${topCatToDelete.name}" is successfully deletes from DB `
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

exports.getTopCats = (req, res, next) => {
  TopCat.find()
    .then(topCats => res.json(topCats))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};
