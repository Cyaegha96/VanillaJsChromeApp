const images = ["01.jpg", "02.jpg", "03.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.id = "bg";

document.body.appendChild(bgImage);
