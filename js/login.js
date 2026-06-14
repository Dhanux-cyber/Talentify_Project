
// loging page 
function switchForm(formType) {
            const wrapper = document.getElementById('formWrapper');
            const loginSec = document.getElementById('loginSection');
            const regSec = document.getElementById('registerSection');
            const loginTab = document.getElementById('loginTab');
            const regTab = document.getElementById('registerTab');

            if (formType === 'register') {
                wrapper.classList.add('register-mode');
                loginSec.style.display = 'none';
                regSec.style.display = 'block';
                regTab.classList.add('active');
                loginTab.classList.remove('active');
            } else {
                wrapper.classList.remove('register-mode');
                loginSec.style.display = 'block';
                regSec.style.display = 'none';
                loginTab.classList.add('active');
                regTab.classList.remove('active');
            }
        }

 function togglePass(inputId, icon) {
            const inputField = document.getElementById(inputId);
            if (inputField.type === "password") {
                inputField.type = "text";
                icon.classList.replace('fa-eye-slash', 'fa-eye');
            } else {
                inputField.type = "password";
                icon.classList.replace('fa-eye', 'fa-eye-slash');
            }
        }