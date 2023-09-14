function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
	const surname = document.getElementById("surname").value;
	const idnumber = document.getElementById("idnumber").value;
    const email = document.getElementById("email").value;
	const cellphonenumber = document.getElementById("cellphonenumber").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
	
	const idnumber = document.getElementById("idnumber").value;

	

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Here, you can send the registration data to your server for processing.
    // You can use AJAX, Fetch API, or any other method to send the data to the server.

    alert("Registration successful!");
    // Optionally, you can redirect the user to a login page or perform other actions.
	function getLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const locationContainer = document.getElementById("locationContainer");
            locationContainer.innerHTML = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
        });
    } else {
        alert("Geolocation is not supported by your browser.");

    }
}

// Add event listener to a button or trigger this function as needed
function registerUser() {
    // Here, you can implement user registration logic and send data to the server.
}

function loginUser() {
    // Here, you can implement user login logic and send data to the server.
}
}
