var ref = new Firebase("https://caniphrase.firebaseio.com/");

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

// TODO: Move this out of this file eventually

$(function(){
  $('#loginButton').on('click', function(e) {
    e.preventDefault();
    authenticateWithGoogle();
  });

  $('#logoutButton').on('click', function(e) {
    e.preventDefault();
    ref.unauth();
  });

  ref.on("child_added", function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  ref.onAuth(authDataCallback);

});
