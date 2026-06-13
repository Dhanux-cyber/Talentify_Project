document.addEventListener("DOMContentLoaded", function () {
  // Get the contact form element
  const contactForm = document.querySelector(".contact-right");

  contactForm.addEventListener("submit", function (event) {
  
    // Get the phone number input value
    const phoneInput = contactForm.querySelector('input[name="phone"]');
    const phoneValue = phoneInput.value.trim();
     
    // Remove any existing error indication
    phoneInput.classList.remove("input-error");
    
    // Validate the phone number (must be 10 digits and contain only numbers)
    if (phoneValue.length !== 10 || isNaN(phoneValue)) {
    
      // Prevent form submission 
      event.preventDefault(); 
     
      // Add error indication to the phone input field
      phoneInput.classList.add("input-error"); 
    
      // Show an alert message to the user 
      alert("Please enter a valid 10-digit phone number (numbers only).");
      
      return;
    }
  });
});