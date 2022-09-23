function email_validator(){
    let email = document.forms["email"]["eword"].value;
    let emailregex = /[a-z]\.[a-z]+@[a-z]+\.(email)/;
    if (emailregex.test(email)) {
        alert("email is Valid")
    }
    else {
        alert("invalid email")
    }
}
//Email
//In the format of <f>.<last>@<org_name>.email where <f> is the first letter of the first name.
//No numbers allowed
//No uppercase letters allowed
//No symbols allowed (except one @)
// /^w.w(a-z).email
// ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$
// ^[\w\.]+([\w]+@)+[\w]+\.)+[w]$
// ^[\w]+\.+[a-z]+@+[a-z]*+\.+[a-z]$