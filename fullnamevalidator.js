< !DOCTYPE html >
    <html lang="en">

        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Form Validators</title>
            <link rel="stylesheet" href="style.css" />
        </head>

        <body>
            <h2>This validates the full name input </h2>
            <div>
                <form name="myForm" onsubmit="return validateForm()">
                    <label for="Full_Name">Full Name: </label>
                    <input type="text" id="fullname" name="fullname" />

                    <input type="submit" value="Submit" />
                </form>
            </div>

            <script src="./fullnamevalidator.js"></script>
        </body>

    </html>