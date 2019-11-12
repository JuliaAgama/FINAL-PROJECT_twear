const Gender = require("../models/Gender");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.addGender = (req, res, next) => {
  Gender.findOne({ name: req.body.name }).then(gender => {
    if (gender) {
      return res
        .status(400)
        .json({ message: `Gender with name "${gender.name}" already exists` });
    } else {
      const initialQuery = _.cloneDeep(req.body);
      const newGender = new Gender(queryCreator(initialQuery));

      newGender
        .save()
        .then(gender => res.json(gender))
        .catch(err =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          })
        );
    }
  });
};

exports.updateGender = (req, res, next) => {
  Gender.findOne({ _id: req.params.id })
    .then(gender => {
      if (!gender) {
        return res
          .status(400)
          .json({ message: `Gender with _id "${req.params.id}" is not found.` });
      } else {
        const initialQuery = _.cloneDeep(req.body);
        const updatedGender = queryCreator(initialQuery);

        Gender.findOneAndUpdate(
          { _id: req.params.id },
          { $set: updatedGender },
          { new: true }
        )
          .then(gender => res.json(gender))
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

exports.deleteGender = (req, res, next) => {
  Gender.findOne({ _id: req.params.id }).then(async gender => {
    if (!gender) {
      return res
        .status(400)
        .json({ message: `Gender with _id "${req.params.id}" is not found.` });
    } else {
      const genderToDelete = await Gender.findOne({ _id: req.params.id });

      Gender.deleteOne({ _id: req.params.id })
        .then(deletedGender =>
          res.status(200).json({
            message: `Gender witn name "${genderToDelete.name}" is successfully deletes from DB `
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

exports.getGenders = (req, res, next) => {
  Gender.find()
    .then(genders => res.json(genders))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getGender = (req, res, next) => {
  Gender.findOne({ id: req.params.id })
    .then(gender => {
      if (!gender) {
        return res.status(400).json({
          message: `Gender with id "${req.params.id}" is not found.`
        });
      } else {
        res.status(200).json(gender);
      }
    })
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};
