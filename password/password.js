function password_validator(){
    let password = document.forms["password"]["pword"].value;
    let min = 8;
    let max = 8;
    let passwordregex = /^(?=.*\d)(?=.*[!#$%&? "])(?=.*[a-zA-Z]).{8,}$/
    if (password.length < min || password.length > max) {
        alert("Your password should be a maximum of 8")
    } 
    if (passwordregex.test(password)) {
        alert("Password is Valid")
    }
    else {
        alert("please enter a valid password")
    }
}

// /^            : Start
// (?=.{8,})        : Length
// (?=.*[a-zA-Z])   : Letters
// (?=.*\d)         : Digits
// (?=.*[!#$%&? "]) : Special characters
// $/              : End
// /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/