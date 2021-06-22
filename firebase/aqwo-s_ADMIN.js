firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    var user = firebase.auth().currentUser; // User is signed in.

    document.getElementById("login_div").style.display = "none";
    //document.getElementById("PRE_chek").style.display = "block";

    KOJeOVOJ(user);
  } else {
    // No user is signed in.
    document.getElementById("login_div").style.display = "block";
    //document.getElementById("PRE_chek").style.display = "none";
  }
});

function login() {
  var userEmail = document.getElementById("email_field_1").value;
  var userPass = document.getElementById("password_field_1").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);

      // ...
    });
}
function logout() {
  document.getElementsByTagName("BODY")[0].remove();
  firebase.auth().signOut();
  location.reload();
}
