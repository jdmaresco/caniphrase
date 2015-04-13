var ref = new Firebase("https://caniphrase.firebaseio.com/phrases");

// GET a random phrase
var getRandomPhrase = function() {
  // TODO: get 20 phrases with most votes? (sum of children's values?)
  // TODO: use Math.random to pick one of the 20?
};

// CREATE a new phrase
var createNewPhrase = function(phrase) {

  console.log("creating new phrase with " + phrase);

  // TODO: sanitize the string
  var searchResult = searchForPhrase(phrase);

  if (!searchResult) {
    // TODO: write to firebase
  } else {
    // TODO: do something with searchResult
  }

};

var getSomePhrases = function(i, j) {
  // TODO: get phrases from i to j
  return [/* array of phrases */];
};

var searchForPhrase = function(string) {
  return false; // TODO: Search firebase, return object or false
};
