document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("heading").textContent = "It only takes 2minutes to sign up!";
});

document.getElementById("toggleElementBtn").addEventListener("click", function() {
    let paragraph = document.getElementById("paragraph");
    paragraph.classList.toggle("hidden");
});

document.getElementById("toggleElementBtn").addEventListener("dblclick", function() {
    alert("Secret action activated!");
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    emailError.textContent = "";
    passwordError.textContent = "";

    // Required field check
    if (!email) {
        emailError.textContent = "Email is required!";
        return;
    }
    if (!password) {
        passwordError.textContent = "Password is required!";
        return;
    }

    // Email format validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!email.match(emailPattern)) {
        emailError.textContent = "Enter a valid email address!";
        return;
    }

    // Password rules
    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters!";
        return;
    }

    alert("Form submitted successfully! ✅");
});

document.getElementById(submit).addEventListener("keydown", function(event) {
    if (event.key === "Sign Up") {
        alert("You pressed the Sign Up key!");
    }
});