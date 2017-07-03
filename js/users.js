var email = document.getElementById('usernameBox');
var password = document.getElementById('passwordBox');
var signUpBtn = document.getElementById('signUpButton');


signUpBtn.addEventListener('click', e => {
  var emailValue = email.value + "@gmail.com";
  var passwordValue = password.value;
  var auth = firebase.auth();
  var promise = auth.createUserWithEmailAndPassword(emailValue,passwordValue);
  promise.catch(e => console.log(e.message));
});
