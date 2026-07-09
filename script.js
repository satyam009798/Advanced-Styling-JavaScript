const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg"
];

let currentIndex = 0;

const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

function showImage(index) {

    sliderImage.src = images[index];

    dots.forEach(dot => dot.classList.remove("active"));

    dots[index].classList.add("active");

}

// Next Button

nextBtn.addEventListener("click", function () {

    currentIndex++;

    if (currentIndex >= images.length) {

        currentIndex = 0;

    }

    showImage(currentIndex);

});

// Previous Button

prevBtn.addEventListener("click", function () {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = images.length - 1;

    }

    showImage(currentIndex);

});

// Dot Click

dots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {

        currentIndex = index;

        showImage(currentIndex);

    });

});

// Auto Slider

setInterval(function () {

    currentIndex++;

    if (currentIndex >= images.length) {

        currentIndex = 0;

    }

    showImage(currentIndex);

}, 3000);


const jokeBtn = document.getElementById("jokeBtn");
const joke = document.getElementById("joke");

async function getJoke() {

    joke.innerHTML = "Loading Joke...";

    try {

        const response = await fetch("https://official-joke-api.appspot.com/random_joke");

        const data = await response.json();

        joke.innerHTML = `
            <strong>${data.setup}</strong>
            <br><br>
            ${data.punchline}
        `;

    }

    catch (error) {

        joke.innerHTML = "Failed to load joke.";

    }

}

jokeBtn.addEventListener("click", getJoke);


const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();

    const email = form.querySelector('input[type="email"]').value.trim();

    const message = form.querySelector("textarea").value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

    if (name === "" || email === "" || message === "") {

        alert("Please fill all fields.");

        return;

    }

    if (!emailPattern.test(email)) {

        alert("Enter a valid email.");

        return;

    }

    alert("Message Sent Successfully!");

    form.reset();

});

window.onload = function () {

    showImage(currentIndex);

    getJoke();

};