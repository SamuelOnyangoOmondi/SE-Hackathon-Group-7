function validateEmail() {
	    let email = document.forms["Email"]["email"].value;
	    let emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

	    if (emailregex.test(email)) {
		            alert("Your email is valid")

		        } else {
				        alert("Your username is invalid")
				    }

}

