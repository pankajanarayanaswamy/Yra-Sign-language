// https://teachablemachine.withgoogle.com/models/l1yH9QR7U///
 
prediction1=""
prediction2=""

Webcam.set({
width:350,
height:300,
image_format:"png",
png_quality:90

});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function takesnap(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"' > ";

});

}

console.log ("ml5version=", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/l1yH9QR7U/model.json",modelLoaded)

function modelLoaded(){
console.log ("modelLoaded")

}

function speak(){
var snyth=window.speechSynthesis;
speak1="The first prediction is" + prediction1;
speak2="The second prediction is" + prediction2;
var utter=new SpeechSynthesisUtterance(speak1 + speak2);
snyth.speak(utter);

}