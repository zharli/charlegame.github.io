const canvas = document.getElementById("gameArea");
const pauseBtn = document.querySelector("#pauseButton");
const playBtn = document.querySelector("#playButton");
const restartBtn = document.querySelector("#restartBtn");
const ctx = canvas.getContext("2d");

let x = 50;
let y = 300;
let radius = 30;

let xa = 700;
let ya = 375;
let xb = 900;
let yb = 275;
let xc = 1100;
let yc = 475;
let xd = 1300;
let yd = 550;
let xe = 1500;
let ye = 500;

let xf = 700;
let yf = 0;
let xg = 900;
let yg = 0;
let xh = 1100;
let yh = 0;
let xi = 1300;
let yi = 0;  
let xj = 1500;
let yj = 0;                //here


pauseBtn.disabled = true;
restartBtn.disabled = true;

let leftArrow = false;
let rightArrow = false;
let upArrow = false;
let downArrow = false;
let space = false;

let objectA = true;
let objectB = true;
let objectC = true;
let objectD = true;
let objectE = true;
let objectF = true;
let objectG = true;
let objectH = true;
let objectI = true;
let objectJ = true;

let score = 1;

let speed = 1;
let speedY = 10;

function drawGame() {
    requestAnimationFrame(drawGame);
    clearScreen();
    inputs();
    drawBlob();
    drawSquares();
    collision();
    spaceFunc();
    drawScore();
}

function inputs(){
    if (rightArrow == true){
        x = x + speed;
    }
    if (leftArrow == true){
        x = x - speed;
    }
    if (upArrow == true){
        y = y - speedY;
    }
    if (downArrow == true){
        y = y + speedY;
    }
    
    if (objectA == true){
        xa = xa - speed;
    }
    if (objectB == true){
        xb = xb - speed;
    }
    if (objectC == true){
        xc = xc - speed;
    }
    if (objectD == true){
        xd = xd - speed;
    }
    if (objectE == true){
        xe = xe - speed;
    }
    if (objectF == true){
        xf = xf - speed;
    }
    if (objectG == true){
        xg = xg - speed;
    }
    if (objectH == true){
        xh = xh - speed;
    }
    if (objectI == true){
        xi = xi - speed;
    }
    if (objectI == true){
        xj = xj - speed;
    }
}

setInterval(function collide(){
    if (
        x < xa + 100 &&
        x + 35 > xa &&
        y < ya + 225 &&
        y + 35 > ya 
    )    {
        speed = 0;
        speedY = 0;
    }
    if (
        x < xb + 100 &&
        x + 35 > xb &&
        y < yb + 325 &&
        y + 35 > yb 
    )    {
        speed = 0;
        speedY = 0;
    }
    if (
        x < xc + 100 &&
        x + 35 > xc &&
        y < yc + 125 &&
        y + 35 > yc 
    )    {
        speed = 0;
        speedY = 0;
    }
    if (
        x < xd + 100 &&
        x + 35 > xd &&
        y < yd + 50 &&
        y + 35 > yd 
    )    {
        speed = 0;
        speedY = 0;
    }
    if (
        x < xe + 100 &&
        x + 35 > xe &&
        y < ye + 100 &&
        y + 35 > ye 
    )    {
        speed = 0;
        speedY = 0;
    }


    if (
        x < xf + 100 &&
        x + 35 > xf &&
        y < yf + 225 &&
        y + 35 > yf 
    )    {
        speed = 0;
        speedY = 0;
    }
    if (
        x < xg + 100 &&
        x + 35 > xg &&
        y < yg + 125 &&
        y + 35 > yg 
    )    {
        speed = 0;
        speedY = 0;
    }
    if (
        x < xh + 10 &&
        x + 35 > xh &&
        y < yh + 325 &&
        y + 35 > yh 
    )    {
        speed = 0;
        speedY = 0;
    }
    if (
        x < xi + 10 &&
        x + 35 > xi &&              
        y < yi + 400 &&
        y + 35 > yi 
    )    {
        speed = 0;
        speedY = 0;
    }
    if (
        x < xi + 10 &&
        x + 35 > xi &&                   
        y < yi + 350 &&
        y + 35 > yi 
    )    {
        speed = 0;
        speedY = 0;
    }
})

setInterval(function endIf(){
    if (speed == 0 && speedY == 0){
        playBtn.disabled = false;
    pauseBtn.disabled = true;
    x = 50;
    y = 300;
    xa = 700;
    ya = 375;
    xb = 900;
    yb = 275;
    xc = 1100;
    yc = 475;
    xd = 1300;
    yd = 550;
    xe = 1500;
    ye = 500;
    xf = 700;
    yf = 0;
    xg = 900;
    yg = 0;
    xh = 1100;
    yh = 0;
    xi = 1300;
    yi = 0;  
    xj = 1500;
    yj = 0; 
    
    score = 1;
    }
})

setInterval(function loop(){
    if (xa <= -100){
        xa = 900;
        xf = 900;
    }
    if (xb <= -100){
        xb = 900;
        xg = 900;
    }
    if (xc <= -100){
        xc = 900;
        xh = 900;
    }
    if (xd <= -100){
        xd = 900;
        xi = 900;
    }
    if (xe <= -100){
        xe = 900;
        xj = 900;
    }
})

setInterval(function drawScore(){
        if (x > xa + 50 && x < xa + 60){
            score += 1;
        }
        if (x > xb + 50 && x < xb + 60){
            score += 1;
        }
        if (x > xc + 50 && x < xc + 60){
            score += 1;
        }
        if (x > xd + 50 && x < xd + 60){
            score += 1;
        }
        if (x > xe + 50 && x < xe + 60){
            score += 1;
        }
    })

document.body.addEventListener('keydown', keyDown);
document.body.addEventListener('keyup', keyUp);

function keyDown(event){
     if (event.keyCode == 37){
        leftArrow = true;
     }
      if (event.keyCode == 39){
        rightArrow = true;
     }
     if (event.keyCode == 38){
        upArrow = true;
     }
     if (event.keyCode == 40){
        downArrow = true;
     }

}
function keyUp(event){
     if (event.keyCode == 37){
        leftArrow = false;
     }
      if (event.keyCode == 39){
        rightArrow = false;
     }
     if (event.keyCode == 38){
        upArrow = false;
     }
     if (event.keyCode == 40){
        downArrow = false;
     }
}   

function drawBlob() {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

function drawSquares() {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.roundRect(xa, ya, 100, 225, 10);
    ctx.fill();

    ctx.beginPath();
    ctx.roundRect(xb, yb, 100, 325, 10);
    ctx.fill();

    ctx.beginPath();
    ctx.roundRect(xc, yc, 100, 125, 10);
    ctx.fill();

    ctx.beginPath();
    ctx.roundRect(xd, yd, 100, 50, 10);
    ctx.fill();

    ctx.beginPath();
    ctx.roundRect(xe, ye, 100, 100, 10);
    ctx.fill();


    ctx.beginPath();
    ctx.roundRect(xf, yf, 100, 225 ,10);
    ctx.fill();

    ctx.beginPath();
    ctx.roundRect(xg, yg, 100, 125, 10);
    ctx.fill();

    ctx.beginPath();
    ctx.roundRect(xh, yh, 100, 325, 10);
    ctx.fill();

    ctx.beginPath();
    ctx.roundRect(xi, yi, 100, 400, 10);
    ctx.fill();

    ctx.beginPath();
    ctx.roundRect(xj, yj, 100, 350, 10);
    ctx.fill();

    ctx.beginPath();
        ctx.fillStyle = "grey";
        ctx.font = "bold 45px -apple-system";
        ctx.fillText(score, 400, 50);
}

function clearScreen() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

setInterval(function collision(){
    if (y >= 570){
        y = 570;
        grounded = true;
    }
    if (y <= 30){
        y = 30;
        grounded = true;
    }
})

setInterval(function bugs(){
    if(speed >= 3){
        speed = 2;
    }
})

document.addEventListener('mousemove', (event) => {
    mousePos = { x: event.clientX, y: event.clientY };
    if (mousePos.x >= 300){
        x = x + speed; 
    }
    if (mousePos.y <= 250){
        y = y - speedY; 
    }
    if (mousePos.x <= 300){
        x = x - speed; 
    }
    if (mousePos.y >= 550){
        y = y + speedY; 
    }
  });

playBtn.addEventListener('click', () => {
    pauseBtn.disabled = false;
    playBtn.disabled = true;
    restartBtn.disabled = false;
    speed = 2;
    speedY = 10;
    drawGame();
  });
  
  pauseBtn.addEventListener('click', () => {
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    speed = 0;
    speedY = 0;
  });

  restartBtn.addEventListener('click', () => {
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    speed = 0;
    x = 50;
    y = 300;
    xa = 700;
    ya = 375;
    xb = 900;
    yb = 275;
    xc = 1100;
    yc = 475;
    xd = 1300;
    yd = 550;
    xe = 1500;
    ye = 500;
    xf = 700;
    yf = 0;
    xg = 900;
    yg = 0;
    xh = 1100;
    yh = 0;
    xi = 1300;
    yi = 0;  
    xj = 1500;
    yj = 0; 
    
    score = 1;
  });

