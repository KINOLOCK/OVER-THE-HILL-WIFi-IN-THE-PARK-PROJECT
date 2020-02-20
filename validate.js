function valid() {
  var email;
  email = document.getElementById("my-email").value;
  if (email === "") {
    alert("Hello");
    return false;
  }


}

function styledefault() {


  let emstyle = document.getElementById("email");
  emstyle.style.backgroundColor = "white";
  //emstyle.style.border = "white";


  let phstyle = document.getElementById("phone");
  phstyle.style.backgroundColor = "white";







}


function validateForm() {

  var y = document.getElementById("email").value;

  let phonevalue = document.getElementById("phone").value;


  let phoneNumStyle = document.getElementById("phone");


  if (y == "" || !y.includes("@") || !y.includes(".com")) {
   // alert("Email address must be added " + y);

    let vx = document.getElementById("email");
    let emailMessage = document.getElementById("alert-message").innerHTML = "<small>Please enter a valid email address </small> " + "<span style='color: #808080;'>" + y.trim(); +"</span>" + "<br>"+"<br>";
    /*  var er = x.classList.add(" is-invalid"); */
    //vx.style.borderColor = "#F8ACAC";
    vx.style.backgroundColor = "#F8ACAC";
    emailMessage.innerHTML;


  }






  if (phonevalue.length >= 8 || phonevalue.length<=6) {
    //alert("Please enter  your seven digit phone number ");
    phoneNumStyle.style.backgroundColor = "#F8ACAC";

    let phoneMessage = document.getElementById("alert-message2").innerHTML = "<small>Please enter  your seven digit phone number </small> " + "<span style='color: #808080;'>"+phonevalue.trim();+"</span>" + "<br>";
    
   
  }
  return true;












}