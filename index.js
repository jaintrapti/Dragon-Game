score =0;
cross = true;
audio = new Audio('chiptune-grooving-142242.mp3');
audioGO = new Audio('mixkit-acade-retro-game-over-213.mp3');
document.getElementsByTagName('body')
audio.play()
// setTimeout(() => {
//     muted =true
//   audio.play()
// },1000);
document.onkeydown = function(e){
    console.log("Key code is: ", e.keyCode)
    if(e.keyCode==38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        },700); 
    }
    if(e.keyCode==39){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if(e.keyCode==37){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}
setInterval(() => {
   dino = document.querySelector('.dino');
   gameOver = document.querySelector('.gameOver');
   obstacle = document.querySelector('.obstacle');

   dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
   dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
   ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
   oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

   offsetX = Math.abs(dx-ox);
   offsetY = Math.abs(dy-oy);
   console.log(offsetX,offsetY);
   if(offsetX<80 && offsetY<54){
    console.log('hello ')
    gameOver.innerHTML = "Game Over - Reload to Play Again"
    obstacle.classList.remove('obstacleAni');
    audioGO.play();
    audio.pause();
    // setTimeout(() => {
    //   muted = true
    //   audioGO.pause();
    //   audio.pause();
    // },1000);
   }
   else if(offsetX<145 && cross){
    score+=10;
    updateScore(score);
    cross = false;
    setTimeout(() => {
       cross = true;
    },1000);
    setTimeout(() => {

        aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.1;
        obstacle.style.animationDuration = newDur + 's';
        console.log("New Animation Duration", newDur);
    },500);
   }
},10);

function updateScore(score){
    scorecount.innerHTML = "Your Score:" + score
}