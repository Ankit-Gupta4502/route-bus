const multer = require("multer");
const bcrypt = require("bcrypt");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const uploadMulter = (cb, limits) =>
  multer({ storage: storage, fileFilter: cb, limits });
module.exports = uploadMulter;

const hashPassword =  (password) => {
  return bcrypt.hash(password, 10)
};

module.exports = { uploadMulter, hashPassword };