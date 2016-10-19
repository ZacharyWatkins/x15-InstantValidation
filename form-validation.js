function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  if ( userEntered.length < 6 || userEntered.includes(" ") ) {
    document.getElementById("usernameError").innerHTML="Bad username.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else{
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  if (passEntered.length < 6 || passEntered.length > 20) {
    document.getElementById("passwordError").innerHTML="Must be between 6-20 characters";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else{
    if ( passEntered.toLowerCase() == "password" || passEntered == userEntered) {
      document.getElementById("passwordError").innerHTML="Bad password.";
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
      document.getElementById("passwordGroup").classList.add("has-error");
    }
    else {
      document.getElementById("passwordGroup").classList.add("has-success");
    }
  }
}
