const multer = require('multer');
const config = require('../config');

// File validation middleware
const validateFile = (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({
      error: 'No file uploaded',
      message: 'Please select a file to upload'
    });
  }

  // Check file size
  if (req.file.size > config.upload.maxFileSize) {
    return res.status(400).json({
      error: 'File too large',
      message: `File size must be less than ${config.upload.maxFileSize / (1024 * 1024)}MB`
    });
  }



  next();
};

// Error handling middleware for multer
const handleMulterError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        error: 'File too large',
        message: `File size must be less than ${config.upload.maxFileSize / (1024 * 1024)}MB`
      });
    }
    if (err.code === 'LIMIT_FILE_COUNT') {
      return res.status(400).json({
        error: 'Too many files',
        message: 'You can only upload one file at a time'
      });
    }
    if (err.code === 'LIMIT_UNEXPECTED_FILE') {
      return res.status(400).json({
        error: 'Unexpected file field',
        message: 'File upload field name must be "file"'
      });
    }
  }
  
  next(err);
};

module.exports = {
  validateFile,
  handleMulterError
}; 