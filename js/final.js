// Background Music
const music = document.getElementById("bgMusic");

music.volume = 0.5;

music.play().catch(()=>{});

// Hearts
for(let i=0;i<30;i++){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.top=Math.random()*100+"vh";

heart.style.fontSize=(18+Math.random()*20)+"px";

document.body.appendChild(heart);

}

// Flowers
for(let i=0;i<20;i++){

let flower=document.createElement("div");

flower.className="flower";

flower.innerHTML="🌸";

flower.style.left=Math.random()*100+"vw";

flower.style.top=Math.random()*100+"vh";

flower.style.fontSize=(18+Math.random()*18)+"px";

document.body.appendChild(flower);

}

// Balloons
for(let i=0;i<10;i++){

let balloon=document.createElement("div");

balloon.className="balloon";

balloon.innerHTML="🎈";

balloon.style.left=Math.random()*100+"vw";

balloon.style.top=Math.random()*100+"vh";

balloon.style.fontSize="40px";

document.body.appendChild(balloon);

}
setInterval(() => {

    let firework = document.createElement("div");

    firework.innerHTML = "🎆";

    firework.style.position = "absolute";
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 80 + "vh";
    firework.style.fontSize = (30 + Math.random() * 30) + "px";

    document.body.appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 1000);

}, 500);