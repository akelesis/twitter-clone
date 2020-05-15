const express = require('express');
const app = express();
const multer = require('multer')
const cors = require('cors');

app.use(cors())

app.use('/uploads', express.static('uploads'))

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  var upload = multer({ storage: storage })

app.post('/upload', upload.single('pic'), (req, res, next) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file)
    
  })
app.listen(5000, function() {
    console.log('App running on port 5000');
});