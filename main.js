let fireworks = []
let clicked = false
function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    rectMode(CENTER);
}

function getCountdownTime() {
    var now = new Date();
    var newYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);
    if (now.getMonth() == 0 && now.getDate() == 1) {
        newYear.setFullYear(newYear.getFullYear() + 1);
    }
    var diff = newYear - now;

    var hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    var minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);
    var seconds = Math.floor(diff / 1000);

    return [hours, minutes, seconds].map(unit => unit.toString().padStart(2, '0')).join(':');
}


function draw() {
    background(0,0,0,25)
    if (!clicked) {
        fill(255, 255, 255, 10)
        noStroke()
        textAlign(CENTER, CENTER);
        text("click for fireworks", window.innerWidth / 2, window.innerHeight / 2);
    }else {
        textSize(140);
        fill(255, 255, 255, 10)
        noStroke()
        textAlign(CENTER, CENTER);
        text(getCountdownTime(), window.innerWidth / 2, window.innerHeight / 2);
        textSize(10);
        noStroke()
        
        for (let f of fireworks) f.step()
    }
}

function mouseReleased() {
    clicked = true
    let target = {
        x: mouseX,
        y: mouseY
    }
    fireworks.push(new Firework(target))
}
