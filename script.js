
function showMessage() {
  document.getElementById("loveMessage").style.display = "block";
}

function playMusic() {
  document.getElementById("bgMusic").play();
}

// show pop-up after 5 seconds
setTimeout(function() {
  document.getElementById("popupLove").style.display = "block";
}, 5000);

// Slideshow
let photos = [
  "images/photo1.jpg.jpg",
  "images/photo2.jpg.jpg",
  "images/photo3.jpg.jpg",
  "images/photo4.jpg.jpg"
];
let index = 0;
setInterval(function() {
  index = (index + 1) % photos.length;
  document.getElementById("slideshow").src = photos[index];
}, 3000); // changes every 3 seconds

// Hidden heart click
document.getElementById("secretHeart").onclick = function() {
  let msg = document.getElementById("secretMessage");
  if(msg.style.display === "none") {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
};
function typeLoveMessage() {
  const message = "I love uuuu more than words can say 💕, My Forever, My Dayam, My Bangaram💕💕💕💕. You are my all in one BFF, GF, Dayam, Wifey, Baby,Teacher, My World. Love you with every inch of my heart💖";
  const loveElem = document.getElementById("loveMessage");
  loveElem.style.display = "block";
  loveElem.textContent = "";
  let i = 0;
  let interval = setInterval(() => {
    loveElem.textContent += message[i];
    i++;
    if(i >= message.length) clearInterval(interval);
  }, 50); // 50ms per letter
}

// Replace showMessage function
function showMessage() {
  typeLoveMessage();
}

// Hidden heart click
document.getElementById("secretHeart").onclick = function() {
  let msg = document.getElementById("secretMessage");
  if(msg.style.display === "none") {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
};