console.log("JS FILE LOADED");
//job-post form

//popup message after submition
const form = document.getElementById("Jobform");

form.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Job Posted Successfully!");

});

//Auto Uppercase
document.addEventListener("DOMContentLoaded", function(){

    const companyName =
    document.getElementById("company-name");

    if(companyName){

        companyName.addEventListener("input", function(){

            this.value = this.value.toUpperCase();

        });

    }

});