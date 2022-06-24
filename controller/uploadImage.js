const ImageModel = require("../model/imageModel");
const multer = require("multer");

// to upload image
const uploadImage = async (req, res, next) => {
  const ImageStorage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
      cb(null, file.originalname + '-' + Date.now());
    },
  });

  const upload = multer({
    storage: ImageStorage,
  }).single("image");

  upload(req, res, (err) => {
    if (err) {
      console.log (err);
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

// search uploaded image
const searchUploadedImage = async (req, res, next) => {
  const result = await ImageModel.find({
    $or: [{ title: { $regex: req.params.id } }],
  });
  res.json({ result });
};

module.exports = {
  uploadImage,
  searchUploadedImage
};
