var recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.interimResults = true;
recognition.onresult = function(event){
    console.log(event)
}
recognition.start;

function voiceSpeech(){
    if ( document.getElementById("speech").innerHTML == "Speak"){
        document.getElementById("speech").innerHTML = "Stop";
    }
    else{
        document.getElementById("speech").innerHTML = "Speak";
    }
}

// function drawCanvas(){
//     var canvas = document.getElementById("sandbox");
//     var context = canvas.getContext("2d");

//     function Circle(x,y,r,c){
//         this.x = x;
//         this.y = y;
//         this.r = r;
//         this.c = c;

//         this.dx ;
       
//         this.dy ;
       
//         this.draw = function() {
//             context.beginPath();
//             context.fillStyle = this.c;
//             context.arc(this.x, this.y, this.r,  0, Math.PI * 2);
//             context.fill();
//         }
//     }

//     let c = new Circle(300, 300, 25, 'black');
//     c.draw();
//     let w = new Circle(100, 300, 25, 'red');
//     w.draw();
// }



// document.addEventListener("DOMContentLoaded", drawCanvas);
