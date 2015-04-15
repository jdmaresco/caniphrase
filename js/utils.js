// FIREBASE ROOT URL
var ref = new Firebase("https://caniphrase.firebaseio.com/");

// HELPER UTILITIES

var utils = {
  urls: {
    root: root,
    phrases: root + 'phrases/',
    recognitions: root + 'recognitions/'
  }
};

// EXPORT
module.exports = utils;
