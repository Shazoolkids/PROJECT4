Mp1= "";
Mp2="";
scoreLeftWrist = 0;
function preload()
{
  song = loadSound("music.mp3");
  song = loadSound("music2.mp3");

}

function draw()
{
  image(video, 0, 0, 650, 550);
  fill("#32a852");
  stroke("#5f32a8");
  if(scoreLeftWrist > 0.2)
  {
  circle(leftWristX, leftWristY, 20);
  InNumberleftWristY = Number(leftWristY);
  remove_decimals = floor(InNumberleftWristY);
  volume= remove_decimals/500;
  document.getElementById("volume").innerHTML = "Volume = " + volume;
  song.setVolume(volume);
  }
  if(song == "false")
  {
    song = loadSound("music.mp3");

  }
}

function setup()
{
  canvas = createCanvas(650,550);
  canvas.center()
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function play()
{
  song.play();
  song.setVolume(1);
  song.rate(1);
}

function modelLoaded()
{
  console.log("PoseNet is initialized");
}
function gotPoses() 
{
if (results.length > 0)
{
  console.log(results);
  leftWristX = results[0].pose.leftWrist.x;
  leftWristY = results[0].pose.leftWrist.y;
  console.log("leftWristX = " +leftWrist +"leftWristY = " + leftWristY);

  rightWristX = results[0].pose.leftWrist.x;
  rightWristY = results[0].pose.leftWrist.y;
  console.log("rightWristX = " +rightWrist +"rightWristY = " + rightWristY);

}
}