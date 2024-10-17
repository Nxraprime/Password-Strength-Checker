// Get references to the password input and the output div
const passwordInput = document.getElementById("password");
const strengthOutput = document.getElementById("strength-output");

// Function to check password strength
function checkPasswordStrength(password) {
    let strength = 0;

    // Check if password has lowercase letters
    if (/[a-z]/.test(password)) {
        strength++;
    }

    // Check if password has uppercase letters
    if (/[A-Z]/.test(password)) {
        strength++;
    }

    // Check if password has numbers
    if (/\d/.test(password)) {
        strength++;
    }

    // Check if password has special characters
    if (/[!$%^*=?@_'":;[\]{}\-&,()/\\~]/.test(password)) {
        strength++;
    }

    // Check if password is at least 8 characters long
    if (password.length >= 8) {
        strength++;
    }

    return strength;
}

// Event listener for password input
passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;
    const strength = checkPasswordStrength(password);

    // Display strength and color coding
    if (strength <= 2) {
        strengthOutput.textContent = "Weak";
        strengthOutput.className = "weak";
    } else if (strength <= 4) {
        strengthOutput.textContent = "Medium";
        strengthOutput.className = "medium";
    } else if (strength === 5) {
        strengthOutput.textContent = "Strong";
        strengthOutput.className = "strong";
    } else {
        strengthOutput.textContent = "Password strength will appear here";
        strengthOutput.className = "";
    }
});
