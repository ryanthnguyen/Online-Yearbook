// TODO: make it so how everytime the page is closed or restart the user is sign out
//Bug: everytime the user close the browser it still sign them in
var username = document.getElementById('usernameBox');
var password = document.getElementById('passwordBox');
var signUpBtn = document.getElementById('signUpButton');
var firstName = document.getElementById('firstNameBox');
var lastName = document.getElementById('lastNameBox');
var email = document.getElementById('emailBox');
var grade = document.getElementById('gradeBox');
var phone = document.getElementById('phoneBox');
var firebaseRef = firebase.database().ref('Users');
signUpBtn.addEventListener('click', e => {
  var usernameValue = username.value;
  var passwordValue = password.value;
  var email = usernameValue + "@gmail.com";
  var auth = firebase.auth();
  var promise = auth.createUserWithEmailAndPassword(email,passwordValue);
  promise
    .then(user => console.log(user));
});

firebase.auth().onAuthStateChanged(function(user){
  if (user) {
    var currentuser = firebase.auth().currentUser;
    var firstnameValue = firstName.value;
    var lastnameValue = lastName.value;
    var emailValue = email.value;
    var gradeValue = grade.value;
    var phoneValue = phone.value;
    firebaseRef.child(currentuser.uid).set({
      'First Name': firstnameValue,
      'Last Name': lastnameValue,
      Email: email.value,
      Grade: gradeValue,
      Phone: phoneValue
    });
    console.log('User is' + user);
  } else {
    console.log('User is null');
  }
})
