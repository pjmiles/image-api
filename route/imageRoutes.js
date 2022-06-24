const router = require('express').Router()

const { uploadImage, searchUploadedImage } = require('../controller/uploadImage')
const { getUploadedImage } = require('../controller/getImage')
const { deleteImage } = require('../controller/deleteImage')

router.post('/', uploadImage);
router.get('/', getUploadedImage);
router.delete('/:id', deleteImage);
router.get('/:id', searchUploadedImage)

module.exports = router;