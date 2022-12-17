function drawCanvas(){
    var canvas = document.getElementById("sandbox");
    var context = canvas.getContext("2d");
    // context.fillStyle = 'lightgray';
    // context.beginPath();
    // context.arc(400, 450, 50, 0, Math.PI * 2);
    // context.fill();


    function Circle(x,y,r,c){
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c;

        this.dx;
        this.dy;

        this.draw = function() {
            context.beginPath();
            context.fillStyle = this.c;
            context.arc(this.x, this.y, this.r,  0, Math.PI * 2);
            context.fill();
        }
    }

    const balls = [];

    for (let i = 0; i < 20; i++) {
        let r = Math.floor(Math.random() * 30) + 15 //random radius between 15 and 30
        let x = Math.random() * (canvas.width - r * 2) + r; //minus diamter so balls dont spawn in wall
        let y =  Math.random() * (canvas.height - r * 2) + r;
        let c = 'red';
        balls.push(new Circle(x, y, r, c))
    }

    function Update(){
        for (let i = 0; i <balls.length; i++){
            balls[i].draw();
        }
    }
    Update();
     
}

document.addEventListener("DOMContentLoaded", drawCanvas);