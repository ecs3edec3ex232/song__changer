let_it_go=""; 
INYLTFNTR =""; 

l_w_x ="";
l_w_y ="";
r_w_x ="";
r_w_y ="";

function preload(){
   let_it_go =loadSound('song_1.mp3');
   INYLTFNTR =loadSound('song_2.mp3');
    }

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video ,modelLoaded);
    posenet.on('Pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function modelLoaded(){
console.log('PoseNet is initialized');
}

function gotPoses(results){
    if(results.lenght > 0){

        console.log(results);

        l_w_x = results[0].pose.leftWrist.x;
        l_w_y = results[0].pose.leftWrist.y;
        console.log("left wrist x ="+l_w_x+"left wrist y ="+l_w_y);

        r_w_x = results[0].pose.rightWrist.x;
        r_w_y = results[0].pose.rightWrist.y;
        console.log("right wrist x ="+r_w_x+"right wrist y ="+r_w_y);
    }
}