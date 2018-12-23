let time = 0;
let wave = [];

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    translate(200, 200);

    let x = 0;
    let y = 0;

    for(let i=0; i < 5; i++) {
        let prevx = x;
        let prevy = y;
        let n = i * 2 + 1;
        let radius = 50 * (4 / (n * PI));
        x += radius * cos(n * time);
        y += radius * sin(n * time);
        wave.unshift(y); 

        stroke(255, 100);
        noFill();
        ellipse(prevx, prevy, radius*2);

        stroke(255);
        line(prevx, prevy, x, y);
    }

    translate(200, 0);
    line(x-200, y, 0, wave[0]);
    beginShape();
    noFill();
    for(let i = 0; i < wave.length; i++) {
        vertex(i, wave[i]); 
    }
    endShape();

    time += 0.025;

    if (wave.length > 250) {
        wave.pop();
    }
}