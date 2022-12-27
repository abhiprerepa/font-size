difference = 0;
rightWristX = 0;
leftWristX = 0;
function preload() {
}

function setup() {
    canvas = createCanvas(450, 490);
    canvas.position(560, 150);

    video = createCapture(VIDEO);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initilized');
}

function draw() {
    image(video, 0, 0, 450, 450);
}

function gotPoses(results) 
{ 
    if(results.length > 0)
    { 
      console.log(results);
      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference = floor(leftWristX - rightWristX); 
      console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference); 
    }
} 

function draw() 
{ 
    background('#6C91C2');

    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
    
    textSize(difference);
    fill('#FFE787'); 
    text('Peter', 50, 400); 
}