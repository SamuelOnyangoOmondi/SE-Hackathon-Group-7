function validateUsername(){
    let username = document.forms["userform"]["username"].value;

    alert(username)
    let usernameRegex = /^([A-Z]\d*[a-z][A-Z]?)([a-z\d])[^A-Z]$/;

    if(usernameRegex.test(username)){
        alert("Your username is valid")

    }else{
        alert("Your username is not valid")
    }

}

// ^[A-Z]*
// [a-z]+$
// [^-\s]
// [A-Z]{2} 
// [a-zA-Z]*
