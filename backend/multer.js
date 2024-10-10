const multer = require("multer");
const path = require("path");

//Storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/"); // Destination folder for storing uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    },
  });
  
  // File filter to accept only images
  const fileFilter = (req, file, cb) => {
    console.log("MIME type:", file.mimetype); // Log the MIME type
    if (file.mimetype.startsWith("image/")) {
      cb(null, true); // Accept the file
    } else {
      cb(new Error("Only images are allowed"), false); // Reject the file
    }
  };
//Initilize multer Instance
const upload = multer({ storage, fileFilter, limits:{fileSize:5 * 1024 * 1024}});

module.exports = upload;
