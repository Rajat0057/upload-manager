module.exports = {
  // Server configuration
  port: process.env.PORT || 5000,
  
  // File upload configuration
  upload: {
    maxFileSize: 100 * 1024 * 1024, // 100MB
    allowedFileTypes: [
      // Images
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/bmp',
      'image/svg+xml',
      'image/webp',
      
      // Documents
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'text/plain',
      'text/csv',
      
      // Archives
      'application/zip',
      'application/x-rar-compressed',
      'application/x-7z-compressed',
      'application/x-tar',
      'application/gzip',
      
      // Media
      'video/mp4',
      'video/avi',
      'video/mov',
      'video/wmv',
      'video/flv',
      'audio/mpeg',
      'audio/wav',
      'audio/flac',
      'audio/aac',
      
      // Code files
      'text/javascript',
      'application/json',
      'text/xml',
      'text/html',
      'text/css',
      'application/x-python',
      'text/x-java-source',
      'text/x-c++src',
      'text/x-csrc'
    ]
  },
  
  // Security configuration
  security: {
    cors: {
      origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
      credentials: true
    }
  },
  
  // Storage configuration
  storage: {
    uploadsDir: process.env.UPLOADS_DIR || 'uploads',
    maxFiles: process.env.MAX_FILES || 1000
  }
}; 