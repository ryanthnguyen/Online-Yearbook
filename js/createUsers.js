var username = document.getElementById('usernameBox');
var password = document.getElementById('passwordBox');
var signUpBtn = document.getElementById('signUpButton');
var firstName = document.getElementById('firstNameBox');
var lastName = document.getElementById('lastNameBox');
var email = document.getElementById('emailBox');
var grade = document.getElementById('gradeBox');
var phone = document.getElementById('phoneBox');
var firebaseRef = firebase.database().ref();
signUpBtn.addEventListener('click', e => {
  console.log('Running fine');
  var email = username.value + "@gmail.com";
  var passwordValue = password.value;
  var usernameValue = username.value;
  var auth = firebase.auth();
  var promise = auth.createUserWithEmailAndPassword(email,passwordValue);
  promise.catch(e => console.log(e.message));
});


firebase.auth().onAuthStateChanged(function(user){
  if (user) {
    var currentUser = user.uid;
    var paswordValue = password.value;
    var firstNameValue = firstName.value;
    var lastNameValue = lastName.value;
    var emailValue = email.value;
    var gradeValue = grade.value;
    var phoneValue = phone.value;
      currentUser = {
      'Username': usernameValue,
      Password: paswordValue,
      'First Name': firstNameValue,
      'Last Name': lastNameValue,
      Email: emailValue,
      Grade: gradeValue,
      'Phone Number': phoneValue
    }
    firebaseRef.push({

    }
    }
  } else {
    console.log('unsuccessful');
  }
});
