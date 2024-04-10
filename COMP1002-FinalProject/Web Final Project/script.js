document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault(); 
        //getting values from forms
        var name = document.getElementById("name").value;
        var Lastname = document.getElementById("lastname").value;
        var email = document.getElementById("email").value;
        var ReasonVisit = document.getElementById("visitReason").value;
       
        // Array to save the message we will display when user doesnt fill the form
        var error = [];
        //verifying the user enter the data and not only empty space.
        if (!name.trim()) error.push("You must enter your name");
        if (!Lastname.trim()) error.push("You must enter your Lastname");

        if (!validateEmail(email)) error.push("Invalid email");
        if (!ReasonVisit.trim()) error.push("You must enter your the reason of your visit");
           
        //verifyinh if we have errors
        if (error.length > 0) {
            //display message if we have errors
            alert("Errors:\n" + error.join("\n"));
        } else {
           //if we dont send the data
            alert("Form sent");
        }
    });
});

//check if the emal have the right format
function validateEmail(email) {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}
