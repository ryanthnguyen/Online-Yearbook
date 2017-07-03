var username = document.getElementById('usernameBox');
var password = document.getElementById('passwordBox');
var signUpBtn = document.getElementById('signUpButton');
var firstName = document.getElementById('firstNameBox');
var lastName = document.getElementById('lastNameBox');
var actuallyEmail = document.getElementById('emailBox');
var grade = document.getElementById('gradeBox');
var phone = document.getElementById('phoneBox');


signUpBtn.addEventListener('click', e => {
  var email = user.value + "@gmail.com";
  var passwordValue = password.value;
  var auth = firebase.auth();
  var promise = auth.createUserWithEmailAndPassword(email,passwordValue);
  promise.catch(e => console.log(e.message));
});
