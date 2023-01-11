import multer from 'multer'
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '..public/img'))
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

export const uploader = multer({ storage })