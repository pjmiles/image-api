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
      const image = req.file.filename;
      const newImage = new ImageModel({
        title: req.body.title,
        image,
      });
      newImage.save();
      res.json(newImage);
    }
  });
};

module.exports = {
  uploadImage,
};
