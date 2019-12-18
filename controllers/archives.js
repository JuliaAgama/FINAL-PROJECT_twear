const Archive = require("../models/Archive");

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

exports.addArchive = (req, res, next) => {
  const archiveFields = _.cloneDeep(req.body);

  // archiveFields.itemNo = rand();

  try {
    archiveFields.name = archiveFields.name
      .toLowerCase()
      .trim()
      .replace(/\s\s+/g, " ");

    // const imageUrls = req.body.previewImages.map(img => {
    //   return `/img/archives/${archiveFields.itemNo}/${img.name}`;
    // });

    // archiveFields.imageUrls = _.cloneDeep(imageUrls);
  } catch (err) {
    res.status(400).json({
      message: `Error happened on server: "${err}" `
    });
  }

  const updatedArchive = queryCreator(archiveFields);

  const newArchive = new Archive(updatedArchive);

  newArchive
    .populate("categories.category")
    .populate("categories.category.topCategory")
    .populate("gender")
    .populate("sizeType")
    .populate("colors.color")
    .populate("colors.sizes.size")
    .populate("colors.sizes.size.sizeType")
    .execPopulate();

  newArchive
    .save()
    .then(archive => res.json(archive))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.updateArchive = (req, res, next) => {
  Archive.findOne({ _id: req.params.id })
    .then(archive => {
      if (!archive) {
        return res.status(400).json({
          message: `Product with id "${req.params.id}" is not found in Archive.`
        });
      } else {
        const archiveFields = _.cloneDeep(req.body);

        try {
          archiveFields.name = archiveFields.name
            .toLowerCase()
            .trim()
            .replace(/\s\s+/g, " ");
        } catch (err) {
          res.status(400).json({
            message: `Error happened on server: "${err}" `
          });
        }

        const updatedArchive = queryCreator(archiveFields);

        Archive.findOneAndUpdate(
          { _id: req.params.id },
          { $set: updatedArchive },
          { new: true }
        )
          .populate("categories.category")
          .populate("categories.category.topCategory")
          .populate("gender")
          .populate("sizeType")
          .populate("colors.color")
          .populate("colors.sizes.size")
          .populate("colors.sizes.size.sizeType")
          .then(archive => res.json(archive))
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
exports.deleteArchive = (req, res, next) => {
  Archive.findOne({_id: req.params.id }).then(async archive => {
    if (!archive) {
      return res
      .status(400)
      .json({
        message: `Product with id "${req.params.id}" is not found in archive.`
      });
    } else {
      const archiveToDelete = await Archive.findOne({_id: req.params.id });

      Archive.deleteOne({_id: req.params.id })
        .then(deletedCount =>
          res.status(200).json({
            message: `Product "${archiveToDelete.name.toUpperCase()}" witn id "${archiveToDelete.id}" is successfully deleted from Archive in DB.`,
            deletedArchiveInfo: archiveToDelete
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


exports.getArchives = (req, res, next) => {
  const perPage = Number(req.query.perPage);
  const startPage = Number(req.query.startPage);
  const sort = req.query.sort;

  Archive.find()
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
    .then(archives => res.send(archives))
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getArchive = (req, res, next) => {
  Archive.findOne({ _id: req.params.id })
    .populate("categories.category")
    .populate("categories.category.topCategory")
    .populate("gender")
    .populate("sizeType")
    .populate("colors.color")
    .populate("colors.sizes.size")
    .populate("colors.sizes.size.sizeType")
    .then(archive => {
      if (!archive) {
        res.status(400).json({
          message: `Product with id ${req.params.id} is not found in archive`
        });
      } else {
        res.json(archive);
      }
    })
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getArchiveByItemNo = (req, res, next) => {
  Archive.findOne({ itemNo: req.params.itemNo })
    .populate("categories.category")
    .populate("categories.category.topCategory")
    .populate("gender")
    .populate("sizeType")
    .populate("colors.color")
    .populate("colors.sizes.size")
    .populate("colors.sizes.size.sizeType")
    .then(archive => {
      if (!archive) {
        res.status(400).json({
          message: `Product with itemNo ${req.params.itemNo} is not found in archive`
        });
      } else {
        res.json(archive);
      }
    })
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getArchivesFilterParams = async (req, res, next) => {
  const mongooseQuery = filterParser(req.query);
  const perPage = Number(req.query.perPage);
  const startPage = Number(req.query.startPage);
  const sort = req.query.sort;

  try {
    const archives = await Archive.find(mongooseQuery)
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

    const archivesQuantity = await Archive.find(mongooseQuery);

    res.json({ archives, archivesQuantity: archivesQuantity.length });
  } catch (err) {
    res.status(400).json({
      message: `Error happened on server: "${err}" `
    });
  }
};

exports.searchArchives = async (req, res, next) => {
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

  // Finding ALL archives, that have at least one match
  let matchedArchives = await Archive.find({$text: { $search: query }})
    .populate("categories.category")
    .populate("categories.category.topCategory")
    .populate("gender")
    .populate("sizeType")
    .populate("colors.color")
    .populate("colors.sizes.size")
    .populate("colors.sizes.size.sizeType")

  res.send(matchedArchives);
};

  exports.matchArchivesByObject = async (req, res, next) => {
    try {
      const archivesMatch = await Archive.find(req.body)
        .populate("categories.category")
        .populate("categories.category.topCategory")
        .populate("gender")
        .populate("sizeType")
        .populate("colors.color")
        .populate("colors.sizes.size")
        .populate("colors.sizes.size.sizeType");

      const archivesMatchCategory = await Archive.find({categories: {$elemMatch: req.body}})
        .populate("categories.category")
        .populate("categories.category.topCategory")
        .populate("gender")
        .populate("sizeType")
        .populate("colors.color")
        .populate("colors.sizes.size")
        .populate("colors.sizes.size.sizeType");

      const archivesMatchColor = await Archive.find({colors: {$elemMatch: req.body}})
        .populate("categories.category")
        .populate("categories.category.topCategory")
        .populate("gender")
        .populate("sizeType")
        .populate("colors.color")
        .populate("colors.sizes.size")
        .populate("colors.sizes.size.sizeType");

      const archivesMatchSize = await Archive.find({'colors.sizes.size': req.body.size})
        .populate("categories.category")
        .populate("categories.category.topCategory")
        .populate("gender")
        .populate("sizeType")
        .populate("colors.color")
        .populate("colors.sizes.size")
        .populate("colors.sizes.size.sizeType");

      const archives = [...archivesMatch, ...archivesMatchCategory, ...archivesMatchColor, ...archivesMatchSize];
      res.json(archives);

    } catch (err) {
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      });
    }
  };
