const uploadedImage = require("../model/imageModel");

const deleteImage = async (req, res) => {
  const deleted = await uploadedImage.findByIdAndDelete(req.params.id);
  res.json(`Deleted! ${deleted}`);
};

module.exports = {
  deleteImage,
};
