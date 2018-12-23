let time = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    translate(200, 200);
    let radius = 100;

    stroke(255);
    noFill();
    ellipse(0, 0, radius*2);

    let x = radius * cos(time);
    let y = radius * sin(time);
    fill(255);
    ellipse(x, y, 8);

    time += 0.01;
}