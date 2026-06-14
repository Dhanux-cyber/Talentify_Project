document.addEventListener("DOMContentLoaded", function () {
  
  const contactForm = document.querySelector(".contact-right");

  contactForm.addEventListener("submit", function (event) {
  
    // Get the phone number input value
    const phoneInput = contactForm.querySelector('input[name="phone"]');
    const phoneValue = phoneInput.value.trim();
     
    // Remove any existing error indication
    phoneInput.classList.remove("input-error");
    
    
    if (phoneValue.length !== 10 || isNaN(phoneValue)) {
    
      // Prevent form submission 
      event.preventDefault(); 
     
      
      phoneInput.classList.add("input-error"); 
    
      // Show an alert message to the user 
      alert("Please enter a valid 10-digit phone number (numbers only).");
      
      return;
    }
  });
});