function validateForm() {

    // Validate phone number
    let x = document.forms["registration"]["number"].value;
    let  phoneno = /^\+?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{3})[- ]?([0-9]{2})$/;

    if (x.match(phoneno)) {
        message = "Your phone number " + x + " is valid";
        document.getElementById("phonenumbermessage").innerHTML = message;
        document.getElementById("phonenumbermessage").style.color = "green";
    }else{
        error = "Your phone number " + x + " is not valid";
        document.getElementById("phonenumbermessage").innerHTML = error;
        document.getElementById("phonenumbermessage").style.color = "red";
    }

    // Validate password
    let password = document.forms["registration"]["password"].value;
    let min = 8;
    let max = 8;
    let passwordregex = /^(?=.*\d)(?=.*[!#$%&? "])(?=.*[a-zA-Z]).{8,}$/
    if (password.length < min || password.length > max) {
        passworderror = "Your password " + password + " should be a maximum of 8";
        document.getElementById("passwordmessage").innerHTML = passworderror;
        document.getElementById("passwordmessage").style.color = "red";
    } 
    if (passwordregex.test(password)) {
        passwordmessage = "Password " + password + " is Valid";
                document.getElementById("passwordmessage").innerHTML = passwordmessage;
        document.getElementById("passwordmessage").style.color = "green";
    }
    else {
        passworderror = "Please enter a valid password";
        document.getElementById("passwordmessage").innerHTML = passworderror;
        document.getElementById("passwordmessage").style.color = "red";
    }

    // Validate Full name
    let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    let name = document.getElementById('full_name').value;
    if(!regName.test(name)){
        fullnameerror = "Please enter your full name (first, middle & last name).";
        document.getElementById("fullnamemessage").innerHTML = fullnameerror;
        document.getElementById("fullnamemessage").style.color = "red";
        // alert('Please enter your full name (first, middle & last name).');
    }else{
        fullnamemessage = 'Valid name given: ' + name;
        document.getElementById("fullnamemessage").innerHTML = fullnamemessage;
        document.getElementById("fullnamemessage").style.color = "green";
    }

    // Validate Date of Birth
    let DOB= document.forms["registration"]["date"].value;
    let  DOBregex= /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

    if (DOB.match(DOBregex)) {
      datemessage = "You've entered a valid DOB " + DOB;
      document.getElementById("datemessage").innerHTML = datemessage;
      document.getElementById("datemessage").style.color = "green";
  }
    
   
    else{
        dateerror = "You need to enter a valid Date of Birth";
        document.getElementById("datemessage").innerHTML = dateerror;
        document.getElementById("datemessage").style.color = "red";
    }

    // Validate User name

    let username = document.forms["registration"]["username"].value;

    let usernameRegex = /^([A-Z]\d*[a-z][A-Z]?)([a-z\d])[^A-Z]$/;

    if(usernameRegex.test(username)){
        usernamemessage = "Your username" + username + "is valid";
      document.getElementById("usernamemessage").innerHTML = usernamemessage;
      document.getElementById("usernamemessage").style.color = "green";

    }else{
        usernameerror = "Your username " + username + " is not valid";
        document.getElementById("usernamemessage").innerHTML = usernameerror;
        document.getElementById("usernamemessage").style.color = "red";
    }

  }


