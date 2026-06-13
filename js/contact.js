document.addEventListener("DOMContentLoaded", function () {
  
  const contactForm = document.querySelector(".contact-right");

  contactForm.addEventListener("submit", function (event) {
   
    const phoneInput = contactForm.querySelector('input[name="phone"]');
    const phoneValue = phoneInput.value.trim();

    phoneInput.classList.remove("input-error");
    
    if (phoneValue.length !== 10 || isNaN(phoneValue)) {
      
      event.preventDefault(); 
      
      phoneInput.classList.add("input-error"); 
      
      alert("Please enter a valid 10-digit phone number (numbers only).");
      return;
    }
  });
});