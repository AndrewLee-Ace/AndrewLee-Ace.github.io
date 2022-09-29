var fruit = [
    {name:"Strawberry", quantity:15, color: "red"},
    {name:"Peach", quantity:10, color: "orange"},
    {name:"Banana", quantity:25, color: "yellow"},
    {name:"Pear", quantity:10, color: "green"},
    {name:"Grape", quantity:20, color: "purple"}
];

const myJSON = JSON.parse(fruit);

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#00ccaa";
ctx.fillRect(0, 0, canvas.width, canvas.height);