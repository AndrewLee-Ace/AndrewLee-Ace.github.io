const fruit = 
    '[{"name":"Strawberry", "quantity":15, "color": "red"}, {"name":"Peach", "quantity":10, "color": "orange"}, {"name":"Banana", "quantity":25, "color": "yellow"}, {"name":"Pear", "quantity":10, "color": "green"}, {"name":"Grape", "quantity":20, "color": "purple"}]';
    
const myJSON = JSON.parse(fruit);

function drawCanvas(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = myJSON[0].color;
    context.fillText(myJSON[0].name, 10, 420);
    
    for (var i = 0; i < myJSON[0].quantity; i++) {
        context.fillRect(20, 300 - i, 15,100);
    }

    context.fillStyle = myJSON[1].color;
    context.fillText(myJSON[1].name, 100, 420);
    
    for (var i = 0; i < myJSON[1].quantity; i++) {
        context.fillRect(100, 300 - i, 15,100);
    }

    context.fillStyle = myJSON[2].color;
    context.fillText(myJSON[2].name, 190, 420);
    
    for (var i = 0; i < myJSON[2].quantity; i++) {
        context.fillRect(190, 300 - i, 15,100);
    }

    context.fillStyle = myJSON[3].color;
    context.fillText(myJSON[3].name, 280, 420);
    
    for (var i = 0; i < myJSON[3].quantity; i++) {
        context.fillRect(280, 300 - i, 15,100);
    }

    context.fillStyle = myJSON[4].color;
    context.fillText(myJSON[4].name, 370, 420);
    
    for (var i = 0; i < myJSON[2].quantity; i++) {
        context.fillRect(370, 300 - i, 15,100);
    }
}

document.addEventListener("DOMContentLoaded", drawCanvas);