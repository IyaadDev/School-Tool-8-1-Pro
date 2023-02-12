    var pass = "mypassword";
console.log( "pass = " + pass );

var date = new Date(); // Now
date.setDate(date.getDate() + 30); // Set now + 30 days as the new date
console.log(date);


var loginCookie = document.cookie; // this
console.log("login cookie = " + loginCookie);

while (true) {

  if ( loginCookie != "" ) {
    console.log("already logged in");
    break;
  }

  var input = prompt( "Please enter your access key, you won't be required to enter this again" );


  if ( input == pass ) {
    console.log( "right password!" );
    loginCookie = document.cookie = "login=true path=/; expires=" + date + ";" ;
    break;
  }
}