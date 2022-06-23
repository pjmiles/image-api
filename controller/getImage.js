const uploadedImage = require('../model/imageModel')

// get images

const getUploadedImage = (async (req, res) => {
    const { page, perPage } = req.query
    const partition = {
        page: parseInt(page, 8) || 1,
        limit: parseInt(perPage, 3) || 4
    }
    const imagesUploaded = await uploadedImage.paginate({}, partition);
    res.json(imagesUploaded)
})

module.exports = {
    getUploadedImage
}