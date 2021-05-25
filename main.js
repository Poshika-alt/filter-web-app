function preload(){

}

function setup(){
canvas=createCanvas(400,500);
canvas.center();
video=createCapture(VIDEO);
video.size(400,500);
video.hide();
}

function draw(){
    image(video,0,0,300,300);
    }

    function take_snapshot(){
        save('myImage');
    }