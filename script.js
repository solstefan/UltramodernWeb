document.addEventListener('DOMContentLoaded', function () {
    const waitlistForm = document.getElementById('waitlistForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    waitlistForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const emailInput = document.getElementById('email');
        const userEmail = emailInput.value;

        // Simulate sending the email to the server (replace this with your actual backend logic)
        // For demonstration purposes, just display a confirmation message
        confirmationMessage.textContent = `Thank you for joining the waitlist, ${userEmail}!`;
        emailInput.value = ''; // Clear the input field
    });
});
