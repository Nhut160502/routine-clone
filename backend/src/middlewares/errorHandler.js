const errorHandler = (error, req, res, next) => {
  let errMsg;
  if (error.code == 11000) {
    errMsg = Object.keys(error.keyValue)[0] + " already exists.";
    return res.status(500).json({
      statusText: "Bad Request",
      success: false,
      message: errMsg,
    });
  }
  if (error?.name == "ValidationError") {
    errMsg = Object.keys(error.errors)[0] + " is required.";
    return res.status(500).json({
      statusText: "Bad Request",
      success: false,
      message: errMsg,
    });
  }
  return res.status(400).json({
    success: false,
    statusText: "Bad Request",
    message: error.message,
  });
};

export default errorHandler;
