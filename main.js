function preload(){
    idk = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png')
}

var x;
var y;

function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(530, 250);
    notimage = createCapture(VIDEO);
    notimage.size(300, 300);
    notimage.hide();
    poseNet = ml5.poseNet(notimage, modelIsNotLoaded);
    poseNet.on('pose', gotPoses)
}

function modelIsNotLoaded(){
    console.log('poseNet model is not loaded.')
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        x = results[0].pose.nose.x -20;
        y = results[0].pose.nose.y -20;
        console.log('Current Position of nose is ' + x + ', ' + y + '.');
        document.getElementById('pos').innerText = 'Current Position of nose is ' + x + ', ' + y + '.'
    } else {
        console.log('Current Position of nose is off the canvas.');
        document.getElementById('pos').innerText = 'Current Position of nose is off the canvas.'
    }
}

function draw(){
    image(notimage, 0, 0, 300, 300);
    image(idk, x, y, 40, 40);
}
