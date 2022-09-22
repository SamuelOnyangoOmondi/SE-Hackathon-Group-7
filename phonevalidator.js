function validateForm() {
    let x = document.forms["myForm"]["number"].value;
    let  phoneno = /^\+?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{3})[- ]?([0-9]{2})$/;

    if (x == "") {
      alert("Number must be filled out")
    
    } else if(x.match(phoneno)){
        alert("You've matched our number criteria")
    }else{
        alert("You need to enter a valid number")
    }
  }


