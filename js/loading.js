const music = document.getElementById("bgMusic");

music.volume = 0.5;

music.play().catch(() => {});

// Floating Hearts
for(let i=0;i<35;i++){

    let heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="💖";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(15+Math.random()*20)+"px";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    heart.style.animationDelay=Math.random()*5+"s";

    document.body.appendChild(heart);

}

// Go to cake page after 3 seconds
setTimeout(()=>{

    window.location.href="cake.html";

},3000);