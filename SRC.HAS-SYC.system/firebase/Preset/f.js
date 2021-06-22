const firebaseConfig = {
  apiKey: "AIzaSyDWHUZx1mXQE8ua9mPEQc1IKNM7ChEAcfU",
  authDomain: "syc-has.firebaseapp.com",
  databaseURL: "https://syc-has-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "syc-has",
  storageBucket: "syc-has.appspot.com",
  messagingSenderId: "856351920258",
  appId: "1:856351920258:web:aa0f7f2cad2de1d247a49b",
};

firebase.initializeApp(firebaseConfig);
var SYC_0000 = firebase.database().ref(); /// ova ke bide HAS

function logout() {
  firebase.auth().signOut();
  location.reload();
}

function login() {
  var userEmail = document.getElementById("email_LogIn").value;
  var userPass = document.getElementById("password_LogIn").value;

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

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    var user = firebase.auth().currentUser; // User is signed in.

    document.getElementById("CLIENT").style.display = "contents";
    document.getElementById("CLIENT").style.width = 37 + "%";
    document.getElementById("login_div").style.display = "none";

    KOJeOVOJ(user);
  } /// logira star user
  else {
    // No user is signed in.
    document.getElementById("CLIENT").style.display = "none";
    document.getElementById("CLIENT").style.width = 73 + "%";
    document.getElementById("login_div").style.display = "block";
  }
});

function SingUP() {
  var email = document.getElementById("email_SingUp").value;
  var password = document.getElementById("password_SingUp").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (user) {
      var user = firebase.auth().currentUser;

      user
        .sendEmailVerification()
        .then(function () {
          // Email sent.
        })
        .catch(function (error) {
          // An error happened.
        });
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
}
