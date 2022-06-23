const ImageModel = require("../model/imageModel");
const multer = require("multer");


// to upload image
const uploadImage = (req, res) => {
  const ImageStorage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

  const upload = multer({
    storage: ImageStorage,
  }).single("image");

    upload(req, res, (err) => {
      if (err) {
        console.log(err);
      } else {
        const newImage = new ImageModel({
          title: req.body.title,
          image: {
            data: req.file.filename,
            contentType: "image/png",
          },
        });
        newImage
          .save()
          .then(() => res.send("Uploaded successfully"))
          .catch((err) => console.log(err));
      }
    });

};


module.exports = {
    uploadImage
}