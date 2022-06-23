const router = require('express').Router()

const { uploadImage } = require('../controller/imageUpload')


router.post('/', uploadImage);


module.exports = router;