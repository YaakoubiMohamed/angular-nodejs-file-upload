// server/server.js

const express = require('express');
const multer = require('multer');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fileupload'
});

// Allow cross-origin requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post('/upload', upload.array('files', 10), (req, res) => {
  const files = req.files;
  if (req.files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
  
      connection.query('INSERT INTO files SET ?', { filename: file.filename }, (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).send('Error saving file to database');
        } else {
          console.log('File saved to database');
        }
      });
    }
  } else {
    res.json({ success: false, message: 'Failed to upload files.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
