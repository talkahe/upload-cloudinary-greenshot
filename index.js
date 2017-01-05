var cloudinary = require('cloudinary');
var clipboard = require('copy-paste');
var config = require('./config');

const filename = process.argv[2];

cloudinary.uploader.upload(filename, function(result) {
    console.log(result);
    clipboard.copy(result.secure_url);
}, {
    folder: 'Greenshot/',
	use_filename: true,
	tags: ['screenshot']
});
