function fullname_Checker() {
	  let fullname = document.forms["Full Name"]["fullname"].value;
	  let min = 30;
	  let max = 30;

	  let fullnameregex = /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{30,}$/
	  if (fullname.length < min || fullname.length > 30) {

		      alert(" Name has more than 30 characters")
		    }
	  if (fullname_Checker.test(fullname)) {
		      alert("Invalid Name")
		    }
	  else {
		      alert("Enter correct name again")
		    }
}
