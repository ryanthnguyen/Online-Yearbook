var email = document.getElementById('usernameBox');
var password = document.getElementById('passwordBox');
var loginBtn = document.getElementById('loginButton');


loginBtn.addEventListener('click', e => {
  var emailValue = email.value + "@gmail.com";
  var passwordValue = password.value;
  var auth = firebase.auth();
  var promise = auth.signInWithEmailAndPassword(emailValue,passwordValue);
  promise.catch(e => console.log(e.message));
});
