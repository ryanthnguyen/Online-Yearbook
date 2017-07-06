firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('User is signed in');
    $(document).ready(function(){
      $("#logoutButton").show();
  });

  $(document).ready(function(){
    $("#loginButton").hide();
});

$(document).ready(function(){
  $("#signUpButton").hide();
});
}else {
  $(document).ready(function(){
    $("#logoutButton").hide();
});
$(document).ready(function(){
  $("#loginButton").show();
});
$(document).ready(function(){
  $("#signUpButton").show();
});
  console.log('User is null');
}
})

function logoutClick() {
  firebase.auth().signOut().then(function(){
    window.location = 'homepage.html';
    console.log('User has successfully logged out');
  }).catch(function(error){
    console.log('User is still logged in');
  });
}
