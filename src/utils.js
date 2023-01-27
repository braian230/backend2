
import { fileURLToPath } from 'url';
const {dirname} = require ('path')


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '..public/img'))
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});


export default __dirname;
export const uploader = multer({ storage })