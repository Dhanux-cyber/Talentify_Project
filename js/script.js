document.querySelectorAll(".nav-link").forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});
document.addEventListener('DOMContentLoaded', function() {
    
    // This finds every button that lives inside a "job-card" div
    const applyButtons = document.querySelectorAll('.job-card button');

    // This loops through all the buttons it found and adds the click event
    applyButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Stops the page from jumping or refreshing
            alert('Jobs coming soon!');
        });
    });

});


// submitButton

document.addEventListener('DOMContentLoaded', function() {
    
    // Find the subscribe input box and the button
    const emailInput = document.querySelector('.subscribe-box input');
    const subscribeBtn = document.querySelector('.subscribe-box button');

    if (subscribeBtn && emailInput) {
        subscribeBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Stops the page from refreshing

            const emailValue = emailInput.value.trim(); // Gets the text the user typed

            // Simple validation: Check if empty, or if it is missing an '@' or '.'
            if (emailValue === "") {
                alert("Please enter your email address.");
            } else if (!emailValue.includes("@") || !emailValue.includes(".")) {
                alert("Please enter a valid email address.");
            } else {
                // If it passes the simple checks
                alert("Thank you for subscribing to our newsletter!");
                emailInput.value = ""; // Clears the box after success
            }
        });
    }

});