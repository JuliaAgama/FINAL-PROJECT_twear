const IncomingForm = require('formidable').IncomingForm;
const cloudinary = require('cloudinary').v2;
// const cloudinaryURI = require("../config/keys").cloudinaryURI;
const fs = require('fs-extra');

exports.uploadImageCloud = (req, res, next) => {

  const form = new IncomingForm();
  form.maxFieldsSize = 200 * 1024 * 1024;
  form.keepExtensions = true;

  // form.uploadDir = __dirname + "/../public/upload";

  // /* this is where the renaming happens */
  // form.on ('fileBegin', function(name, file){
  //   //rename the incoming file to the file's name
  //   file.path = form.uploadDir + "/" + file.name;
  // })

  form.on('file', (field, file) => {

    // //or here rename the incoming file to the file's name
    // fs.rename(file.path, form.uploadDir + "/" + file.name);

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

    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
    // The uploaded files are stored in a temporary directory somewhere on your machine. To do something with them, you can copy them from there using the node.js file-system API.
  });

  form.on('progress', (bytesReceived, bytesExpected) => {

    var percent = (bytesReceived / bytesExpected * 100) | 0;
    process.stdout.write('Uploading: %' + percent + '\r');

    console.log('bytesReceived:', bytesReceived);
    console.log('bytesExpected:', bytesExpected);
  });


  // form.on('end', () => { //This callback is called when the form is completely parsed. In this case, we want to send back a success status code
  //   res.json({
  //     message: "Photo is received by server",
  //   })
  // });

  form.on('error', function(err) {
    console.error("Server error", err);
  });

  // //you can get the original name from the formidable file object:
  // form.parse(req, function(err, fields, files) {
  //   const filename = files.upload.name;
  // });

  form.parse(req); // trigger the parsing of the form
};

exports.deleteImageCloud = (req, res, next) => {
  console.log('hello');
};
