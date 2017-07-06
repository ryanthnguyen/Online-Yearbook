var email = document.getElementById('usernameBox');
var password = document.getElementById('passwordBox');
var loginBtn = document.getElementById('loginButton');
var currentUser = firebase.auth().currentUser;

loginBtn.addEventListener('click', e => {
  var emailValue = email.value + "@gmail.com";
  var passwordValue = password.value;
  var auth = firebase.auth();
  var promise = auth.signInWithEmailAndPassword(emailValue,passwordValue);
  promise.catch(e => console.log(e.message));
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(currentUser + 'is logged in');
    window.location = 'homepage.html';
  } else {
    console.log('User is null');
  }
})
