function validation(){
  var firstname = document.getElementById('firstname').value;
  // var lastname = document.getElementById('lastname').value;
  // var phno = document.getElementById('phno').value;
  var email = document.getElementById('email').value;
  var pw1 = document.getElementById('pw1').value;
  var pw2 = document.getElementById('pw2').value;
  var y = email.indexOf('@');
  var z = email.lastIndexOf(".");

  if (firstname.length==0){
    alert("Enter Username");
  }

  if (age.length==0){
    alert("Enter Age");
  }
  if (email.length==0){
    window.alert('Enter email (yourname@gmail.com) ');
  }
  if (pw1.length==0 || p2.length==0){
    window.alert('Enter Password: ');
  } 
  if (pw1.length!=0){
    if (pw1!=pw2){
        window.alert("Password doesn't match");
    }
  }
  if (email.length!=0){
    if (y<1 || z<y+2 || z+2 >= email.length){
        window.alert("Invalid email address format. Please enter yourname@gmail.com");
    }
  }


}