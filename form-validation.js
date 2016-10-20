
function register() {
  window.alert(userEntered + passEntered)
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
}
function validateUsername() {
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  if ( userEntered.length < 6 || userEntered.includes(" ") ) {
    document.getElementById("usernameError").innerHTML="Bad username.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
  }
  else{
    document.getElementById("usernameGroup").classList.remove("has-error");
    document.getElementById("usernameGroup").classList.add("has-success");
  }
}
function validatePassword() {
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  if (passEntered.length < 6 || passEntered.length > 20) {
    document.getElementById("passwordError").innerHTML="Must be between 6-20 characters";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");
  }
  else{
    if ( passEntered.toLowerCase() == "password" || passEntered == userEntered) {
      document.getElementById("passwordError").innerHTML="Bad password.";
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
      document.getElementById("passwordGroup").classList.add("has-error");
      document.getElementById("passwordGroup").classList.remove("has-success");
    }
    else {
      document.getElementById("passwordGroup").classList.remove("has-error");
      document.getElementById("passwordGroup").classList.add("has-success");
    }
}
}
