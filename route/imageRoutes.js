const router = require('express').Router()

const { uploadImage } = require('../controller/uploadImage')
const { getUploadedImage } = require('../controller/getImage')
const { deleteImage } = require('../controller/deleteImage')

router.post('/', uploadImage);
router.get('/', getUploadedImage);
router.delete('/:id', deleteImage);

module.exports = router;