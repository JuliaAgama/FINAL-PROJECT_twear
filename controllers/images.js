const IncomingForm = require('formidable').IncomingForm;

exports.uploadImageCloud = (req, res, next) => {

  const form = new IncomingForm();

  form.on('file', (field, file) => {
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
    // The uploaded files are stored in a temporary directory somewhere on your machine. To do something with them, you can copy them from there using the node.js file-system API.
  });

  form.on('end', () => { //This callback is called when the form is completely parsed. In this case, we want to send back a success status code
    res.json()
  });

  form.parse(req); // trigger the parsing of the form

};

exports.deleteImageCloud = (req, res, next) => {
  console.log('hello');
};

exports.getImagesLinksCloud = (req, res, next) => {
  console.log('hello');
};

exports.getImageLinkCloud = (req, res, next) => {
  console.log('hello');
};
