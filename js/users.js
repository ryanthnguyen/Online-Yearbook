var email = document.getElementById('usernameBox');
var password = document.getElementById('passwordBox');
function submitClick() {
  console.log(email);
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  });
  console.log('success!');
}
