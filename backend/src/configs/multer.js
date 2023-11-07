import multer from "multer";
import crypto from "crypto";

export const upload = (folderName) => {
  return multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, `./public/${folderName}`);
      },

      filename: function (req, file, cb) {
        const ext = file.mimetype.split("/")[1];
        cb(
          null,
          Date.now() + crypto.randomBytes(5).toString("hex") + `.${ext}`
        );
      },
    }),
    limits: { fileSize: 10000000 },
    fileFilter: function (req, file, cb) {
      if (
        !file.originalname.match(
          /\.(jpg|JPG|webp|jpeg|JPEG|png|PNG|gif|GIF|jfif|JFIF)$/
        )
      ) {
        req.fileValidationError = "Only image files are allowed!";
        return cb(null, false);
      }
      cb(null, true);
    },
  });
};
