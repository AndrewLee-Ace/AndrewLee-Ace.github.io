function drawCanvas(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.fillStyle = "lightgray";
    context.fillRect(0, 0, canvas.width, canvas.height);

    //Title Card
    context.fillStyle = "black";
    context.font = "50px verdana";
    context.textAlign = "center";
    context.strokeText("The Artistic Mind of Drewskii!", canvas.width/2, canvas.height/10);


    
    //Windows
    context.fillStyle="skyblue";
    context.fillRect(120,100, 85, 115);
    context.moveTo(163.5,99.5);
    context.lineTo(163.5, 214.5);
    context.moveTo(120,154.5);
    context.lineTo(205, 154.5);

    context.fillRect(320,100, 85, 115);
    context.moveTo(363.5,99.5);
    context.lineTo(363.5, 214.5);
    context.moveTo(320,154.5);
    context.lineTo(405, 154.5);

    context.fillRect(520,100, 85, 115);
    context.moveTo(560.5,99.5);
    context.lineTo(560.5, 214.5);
    context.moveTo(520,154.5);
    context.lineTo(605, 154.5);
    
    //Sun
    
     context.fillStyle="yellow";
     context.moveTo(150, 155);
     context.arc(150, 155, 30, 0 , 2 * Math.PI);
    context.fill();
    

    //Ground (Carpet)
    context.fillStyle = "red";
    context.fillRect(0, 300, canvas.width, canvas.height);

    for ( var y = 300.5; y <= canvas.height + .5; y+=20){
        
        for (var x = 0.5; x < canvas.width; x+=25) {   
            context.fillStyle= "green"
            context.moveTo(x, y + 20);
            context.lineTo(x + 12, y);
            context.lineTo(x + 24, y + 20);
            context.stroke();
        }
    }
    
    // //Play Area
    context.moveTo(130.5, 380.5);
    context.shadowBlur = 20;
    context.shadowOffset = 30;
    context.shadowColor = "black";
    context.fillStyle = "blue";
    context.fillRect(130.5, 381.5, 200, 140);
    
    //Child1
    context.beginPath();
    context.fillStyle = "black";
    context.shadowBlur = 0;
    context.shadowOffset = 0;
    context.moveTo(160, 385);
    context.arc(160, 385, 20, 0 , 2 * Math.PI);
    context.fill();
    context.moveTo(160.5, 405.5);
    context.lineTo(160.5, 430.5);
    //arms
    context.moveTo(160.5, 420.5);
    context.lineTo(150.5, 415.5);
    context.moveTo(160.5, 420.5);
    context.lineTo(170.5, 415.5);
    //legs
    context.moveTo(160.5, 430.5);
    context.lineTo(150.5, 445.5);
    context.moveTo(160.5, 430.5);
    context.lineTo(170.5, 445.5);
    context.stroke();

    //Child2
    context.moveTo(220, 385);
    context.arc(220, 385, 20, 0 , 2 * Math.PI);
    context.fill();
    context.moveTo(220.5, 405.5);
    context.lineTo(220.5, 430.5);
    //arms
    context.moveTo(220.5, 420.5);
    context.lineTo(210.5, 415.5);
    context.moveTo(220.5, 420.5);
    context.lineTo(230.5, 415.5);
    //legs
    context.moveTo(220.5, 430.5);
    context.lineTo(210.5, 445.5);
    context.moveTo(220.5, 430.5);
    context.lineTo(230.5, 445.5);
    context.stroke();

    //Child3
    context.moveTo(210, 500);
    context.arc(210, 500, 20, 0 , 2 * Math.PI);
    context.fill();
    context.moveTo(210.5, 500.5);
    context.lineTo(255.5, 500.5);
    //arms
    context.moveTo(238.5, 510.5);
    context.lineTo(249.5, 491.5);
    //legs
    context.moveTo(255.5, 500.5);
    context.lineTo(260.5, 495.5);
    context.lineTo(265.5, 500.5);
    context.moveTo(255.5, 500.5);
    context.lineTo(260.5, 505.5);
    context.lineTo(265.5, 500.5);
    context.stroke();


    
}



document.addEventListener("DOMContentLoaded", drawCanvas);