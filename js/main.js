
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

  // NEW PHRASE event handler

  ref.on("child_added", function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  ref.onAuth(authDataCallback);

  // Add phrase button event handler

  $('#addPhrase').on('click', function(e) {
    e.preventDefault();

    var phrase = $('#phraseText').val();
    createNewPhrase(phrase);
  });

});