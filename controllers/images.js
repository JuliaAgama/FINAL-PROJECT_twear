const IncomingForm = require("formidable").IncomingForm;
const cloudinary = require("cloudinary").v2;

exports.uploadImageCloud = (req, res, next) => {
  const form = new IncomingForm();
  form.uploadDir = __dirname + "/../public/uploads";

  form.on("file", function(name, file) {
    cloudinary.uploader
      .upload(file.path)
      .then(result => {
        let cloudObj = {};
        cloudObj.public_id = result.public_id;
        cloudObj.url = result.url;
        res.json(cloudObj);
      })
      .catch(err => {
        console.error("Cloudinary error", err);
      });
  });
  form.parse(req);
};

exports.deleteImageCloud = (req, res, next) => {
  console.log("hello");
};

exports.getImagesLinksCloud = (req, res, next) => {
  console.log("hello");
};

exports.getImageLinkCloud = (req, res, next) => {
  console.log("hello");
};
