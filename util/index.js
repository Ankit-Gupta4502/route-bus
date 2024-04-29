const multer = require("multer");
const bcrypt = require("bcrypt");
const { normalize } = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, normalize("public/uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =   Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname);
  },
});

const uploadMulter = (cb, limits) =>
  multer({ storage: storage, fileFilter: cb, limits });


const hashPassword =  (password) => {
  return bcrypt.hash(password, 10)
};
module.exports = {hashPassword,uploadMulter}
