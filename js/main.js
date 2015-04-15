var Utils = require('./utils.js');

var ref = new Firebase(Utils.urls.root);
var phrasesRef = new Firebase(Utils.urls.phrases);
var recognitionsRef = new Firebase(Utils.urls.recognitions);


//----------------//
//      AUTH      //
//----------------//

var authenticateWithGoogle = function() {
  ref.authWithOAuthPopup("google", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  });
};

// EDIT:  Create a callback which logs the current auth state
function authDataCallback(authData) {
  if (authData) {
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
  } else {
    console.log("User is logged out");
  }
}


//----------------//
//     EVENTS     //
//----------------//

// Run when document ready

$(function(){

  // LOGIN button event handler

  $('#loginButton').on('click', function(e) {
    e.preventDefault();
    authenticateWithGoogle();
  });

  // LOGOUT button event handler

  $('#logoutButton').on('click', function(e) {
    e.preventDefault();
    ref.unauth();
  });

  ref.onAuth(authDataCallback);

  // ADD PHRASE BUTTON event handler

  $('#addPhrase').on('click', function(e) {
    e.preventDefault();

    var phrase = $('#phraseText').val();
    createNewPhrase(phrase);
  });

  // SEARCH PHRASE BUTTON event handler

  $('#searchPhrase').on('click', function(e) {
    e.preventDefault();

    var phrase = $('#phraseText').val();
    searchForPhrase(phrase);
  });

});

//----------------//
//    PHRASES     //
//----------------//

var currentPhrase;

// NEW PHRASE event handler

phrasesRef.on("child_added", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

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
    var searchResult = phrasesRef.child(string);

    searchResult.once("value", function(snapshot) {
      console.log(snapshot.val());
    });
};
