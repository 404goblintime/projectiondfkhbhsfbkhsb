NoseX = 0;
NoseY = 0;

function preload(){
clown_nose = loadImage('https://i.postimg.cc/tCkwNS5p/clownnose.png');
}
function setup(){
canvas = createCanvas(400,400);
canvas.center();
video = createCapture(VIDEO);
video.size(400,400);
video.hide()
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', GotPoses);
}
function modelLoaded(){
console.log('PoseNet is Initialized')
}
function GotPoses(results){
if(results.length > 0){
console.log(results);
NoseX = results[0].pose.nose.x;
NoseY = results[0].pose.nose.y;
console.log("Nose x =" + NoseX);
console.log("Nose y =" + NoseY);
}
}

function draw(){
image(video, 0, 0, 400, 400);
image(clown_nose, NoseX, NoseY, 30, 30);
}
function takesnapshot(){
save('selfiefilter.png');
}
