function drawCanvas(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.fillStyle = "#00aaff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font="30px sans-serif";
    context.fillStyle= "black";
    context.fillText(myJSON.fruit[0]);
}

    document.addEventListener("DOMContentLoaded", drawCanvas);
    

var fruit = [
    {name:"Strawberry", quantity:15, color: "red"},
    {name:"Peach", quantity:10, color: "orange"},
    {name:"Banana", quantity:25, color: "yellow"},
    {name:"Pear", quantity:10, color: "green"},
    {name:"Grape", quantity:20, color: "purple"}
];

const myJSON = JSON.parse(fruit);



