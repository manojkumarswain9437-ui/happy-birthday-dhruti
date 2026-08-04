// Photos
const photos = [
    "images/panda1.png",
    "images/panda2.png",
    "images/panda3.png",
    "images/panda4.png",
    "images/panda5.png",
    "images/panda6.png",
    "images/panda7.png",
    "images/panda8.png"
];

// Captions
const captions = [
    "🌸 Every smile of yours brightens the world",
    "🥰 You're the cutest person ever",
    "💖 Keep smiling forever",
    "✨ Stay happy always",
    "🌈 May all your dreams come true",
    "🎂 Happy Birthday Beautiful",
    "🎉 Wishing you endless happiness",
    "❤️ You'll always be special"
];

let current = 0;

const photo = document.getElementById("photo");
const caption = document.getElementById("caption");
const counter = document.getElementById("counter");

// Update Gallery
function updateGallery(){

    photo.style.opacity = 0;
    photo.style.transform = "scale(.95)";

    setTimeout(()=>{

        photo.src = photos[current];
        caption.innerHTML = captions[current];
        counter.innerHTML = `${current+1} / ${photos.length} ❤️`;

        photo.style.opacity = 1;
        photo.style.transform = "scale(1)";

    },300);

}
// Next Button
document.getElementById("next").onclick = () => {

    if(current < photos.length - 1){

        current++;

        updateGallery();

    }else{

       alert("🎉 Happy Birthday Dhruti ❤️");
window.location.href = "final.html";

    }

};

// Previous Button
document.getElementById("prev").onclick = () => {

    if(current > 0){

        current--;

        updateGallery();

    }

};
// ===============================
// Floating Hearts
// ===============================

for(let i=0;i<25;i++){

    let heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="💖";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(15+Math.random()*18)+"px";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    heart.style.animationDelay=Math.random()*5+"s";

    document.body.appendChild(heart);

}
// ===============================
// Falling Flowers
// ===============================

for(let i=0;i<20;i++){

    let flower=document.createElement("div");

    flower.classList.add("flower");

    flower.innerHTML="🌸";

    flower.style.left=Math.random()*100+"vw";

    flower.style.fontSize=(18+Math.random()*15)+"px";

    flower.style.animationDuration=(6+Math.random()*5)+"s";

    flower.style.animationDelay=Math.random()*5+"s";

    flower.style.animation="float "+(6+Math.random()*5)+"s linear infinite";

    document.body.appendChild(flower);

}
// ===============================
// Balloons
// ===============================

for(let i=0;i<8;i++){

    let balloon=document.createElement("div");

    balloon.classList.add("balloon");

    balloon.innerHTML="🎈";

    balloon.style.left=Math.random()*100+"vw";

    balloon.style.fontSize="40px";

    balloon.style.animation="float "+(8+Math.random()*4)+"s linear infinite";

    balloon.style.animationDelay=Math.random()*5+"s";

    document.body.appendChild(balloon);

}
// ===============================
// Background Music
// ===============================

const music=document.getElementById("bgMusic");

music.volume=0.5;

music.play().catch(()=>{
    console.log("Waiting for user interaction...");
});