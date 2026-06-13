

// Fade-in Effect
window.addEventListener("load", function () {
    document.querySelector(".post").classList.add("show");
});

// Typing Effect
const text = "Employers! Make Recruiting Your Competitive Advantage";

let index = 0;

function typeWriter() {

    if(index < text.length){

        document.getElementById("typing-title").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 50);
    }

}

window.onload = typeWriter;

