document.getElementById('contactForm').addEventListener('submit', function (event) {
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Invalid email format';
        event.preventDefault(); // Prevent form submission
    } else {
        emailError.textContent = ''; // Clear the error message
    }
});