const SizeType = require("../models/SizeType");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.addSizeType = (req, res, next) => {
  SizeType.findOne({ name: req.body.name }).then(sizeType => {
    if (sizeType) {
      return res
        .status(400)
        .json({ message: `SizeType with name "${sizeType.name}" already exists` });
    } else {
      const initialQuery = _.cloneDeep(req.body);
      const newSizeType = new SizeType(queryCreator(initialQuery));

      newSizeType
        .save()
        .then(sizeType => res.json(sizeType))
        .catch(err =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          })
        );
    }
  });
};

exports.updateSizeType = (req, res, next) => {
  SizeType.findOne({ _id: req.params.id })
    .then(sizeType => {
      if (!sizeType) {
        return res
          .status(400)
          .json({ message: `SizeType with _id "${req.params.id}" is not found.` });
      } else {
        const initialQuery = _.cloneDeep(req.body);
        const updatedSizeType = queryCreator(initialQuery);

        SizeType.findOneAndUpdate(
          { _id: req.params.id },
          { $set: updatedSizeType },
          { new: true }
        )
          .then(sizeType => res.json(sizeType))
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

exports.deleteSizeType = (req, res, next) => {
  SizeType.findOne({ _id: req.params.id }).then(async sizeType => {
    if (!sizeType) {
      return res
        .status(400)
        .json({ message: `SizeType with _id "${req.params.id}" is not found.` });
    } else {
      const sizeTypeToDelete = await SizeType.findOne({ _id: req.params.id });

      SizeType.deleteOne({ _id: req.params.id })
        .then(deletedCount =>
          res.status(200).json({
            message: `SizeType witn name "${sizeTypeToDelete.name}" is successfully deleted from DB `
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

exports.getSizeTypes = (req, res, next) => {
  SizeType.find()
    .then(sizeTypes => res.json(sizeTypes))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getSizeType = (req, res, next) => {
  SizeType.findOne({_id: req.params.id })
    .then(sizeType => {
      if (!sizeType) {
        return res.status(400)
        .json({message: `Size Type with id "${req.params.id}" is not found.`});
      } else {
        res.status(200).json(sizeType);
      }
    })
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

