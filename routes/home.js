const express = require('express');
const router = express.Router();
const firebase = require('firebase');
const fs = require('fs');

/* Get a reference to the storage service, 
which is used to create references in your storage bucket*/
//var storage = firebase.storage();

// Create a storage reference from our storage service
//var storageRef = storage.ref();//points to root reference

router.get('/', function(req, res){
    res.render('home');
});

router.post('/view3D', function(req, res){
    console.log(req.body);
    var file = req.body.myFile;
    var contents = fs.readFileSync(file);
    console.log('contents', contents);
    res.send('Hey');
});

module.exports = router;