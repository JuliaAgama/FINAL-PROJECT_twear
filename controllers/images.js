const IncomingForm = require("formidable").IncomingForm;
const cloudinary = require("cloudinary").v2;
const fs = require("fs-extra");
const { URL } = require("url");

exports.uploadImageCloud = (req, res, next) => {
  const form = new IncomingForm();
  form.maxFieldsSize = 200 * 1024 * 1024;

  form.on("file", (field, file) => {
    let fileName = file.name.replace(/\s/gi, "_").split(".")[0];

    cloudinary.uploader
      .upload(file.path, { public_id: fileName, folder: req.header("path") })
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

  form.on("progress", (bytesReceived, bytesExpected) => {
    var percent = ((bytesReceived / bytesExpected) * 100) | 0;
    process.stdout.write("Uploading: %" + percent + "\r");

    // console.log('bytesReceived:', bytesReceived);
    // console.log('bytesExpected:', bytesExpected);
  });

  // form.on('end', () => { //This callback is called when the form is completely parsed. In this case, we want to send back a success status code
  //   res.json({
  //     message: "Photo is received by server",
  //   })
  // });

  form.on("error", function(err) {
    console.error("Server error", err);
  });

  form.parse(req); // trigger the parsing of the form
};

exports.deleteImageCloud = (req, res, next) => {
  //this endpoint expects the request to have a body like this:
  // {	"url": "http://res.cloudinary.com/twear/image/upload/v1576617213/test/folder/Time.png"}

  let cloudUrl = new URL(req.body.url);
  let cloudId = cloudUrl.pathname
    .split(".")
    .slice(0, -1)
    .join(".")
    .split("/")
    .slice(5)
    .join("/");

  cloudinary.api
    .resource(cloudId)
    .then(
      cloudinary.api
        .delete_resources(cloudId)
        .then(res.status(204).send("Image Deleted"))
        .catch(err => res.status(400).send(err))
    )
    .catch(err => {
      console.error("Error with Cloudinary:", err);
      res.status(404).send(err);
    });
};
