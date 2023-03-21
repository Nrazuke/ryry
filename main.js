function validatePassword(event) {
    event.preventDefault();
    var password = document.getElementById("password").value;
    if (password === "kokak") {
        window.location.href = "test.html";
    } else {
        alert("Incorrect password. Please try again.");
    }
}