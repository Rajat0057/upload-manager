# File Upload System

A simple file upload and management system with React frontend and Node.js backend.

## Features

- **File Upload**: Drag & drop or click to upload files
- **File Management**: List, download, and delete files
- **Modern UI**: Material-UI components with smooth animations
- **RESTful API**: Clean backend API for file operations

## Project Structure

```
UploadFiles/
├── backend/          # Node.js/Express server
├── frontend/         # React application
└── README.md         # This file
```

## Quick Start

### Backend Setup

1. Navigate to backend directory:
```bash
cd UploadFiles/backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd UploadFiles/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the application:
```bash
npm start
```

Frontend will run on `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/upload` | Upload a file |
| GET | `/api/files` | Get list of all files |
| GET | `/api/download/:filename` | Download a file |
| DELETE | `/api/delete/:filename` | Delete a file |

## Usage

1. Open `http://localhost:3000` in your browser
2. Go to "Upload Files" tab to upload files
3. Go to "File List" tab to manage uploaded files
4. Use download and delete buttons to manage files

## Technologies Used

- **Backend**: Node.js, Express, Multer
- **Frontend**: React, Material-UI
- **Storage**: Local file system

## File Storage

Files are stored in the `backend/uploads/` directory on the server.

## Development

- Backend: `npm run dev` (uses nodemon for auto-restart)
- Frontend: `npm start` (development server with hot reload) 