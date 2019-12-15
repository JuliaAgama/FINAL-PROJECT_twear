const IncomingForm = require("formidable").IncomingForm;
const cloudinary = require("cloudinary").v2;

exports.uploadImageCloud = (req, res, next) => {
  const form = new IncomingForm();
  let cloudUrls = [];
  form.uploadDir = __dirname + "/../public/upload";

  form.parse(req, function(err, fields, files) {
    for (const file in files) {
      cloudUrls.push(cloudinary.uploader.upload(files[file]["path"]));
    }
    Promise.all(cloudUrls)
      .then(result => {
        const urls = result.map(el => {
          let obj = {};
          obj.public_id = el.public_id;
          obj.url = el.url;
          return obj;
        });
        res.json(urls);
      })
      .catch(err => {
        console.error("Cloudinary error", err);
      });
    if (err) {
      console.error(err);
    }
  });
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
