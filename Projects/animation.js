// const boy = new Image();
    const girl = new Image();
    // const shark = new Image();

function init() {
    // boy.src="../boy.png";
    girl.src="../girl.png";
    //shark.src="../shark.png";
    
}

function drawCanvas(){
    var canvas = document.getElementById("sandbox");
    var context = canvas.getContext("2d");
   
    context.clearRect(0, 0, canvas.width, canvas.height);

    //boy.onload = () => context.drawImage(boy,250, 0);
    girl.onload = () => context.drawImage(girl,70,200);
   
    

    context.beginPath();
    context.fillStyle="black";
    context.rect(110,150, 100, 50);
    context.stroke();
    

    context.fillText("What a good day", 120, 170);
    context.fillText("at the beach!", 120, 180);

    
    // function Circle(x,y,r,c){
    //     this.x = x;
    //     this.y = y;
    //     this.r = r;
    //     this.c = c;

    //     this.dx = (Math.random() * 4) + 1;
    //     this.dx *= Math.floor(Math.random() * 2) == 1 ? 1 : -1
    //     this.dy = (Math.random() * 4) + 1;
    //     this.dy *= Math.floor(Math.random() * 2) == 1 ? 1 : -1

    //     this.draw = function() {
    //         context.beginPath();
    //         context.fillStyle = this.c;
    //         context.arc(this.x, this.y, this.r,  0, Math.PI * 2);
    //         context.fill();
    //     }

    //     this.animate = function () {
    //         this.x += this.dx;
    //         this.y += this.dy;

    //         if (this.x + this.r > canvas.width || this.x - this.r < 0){
    //             this.dx = -this.dx
    //         }

    //         if (this.y + this.r > canvas.height || this.y - this.r < 0){
    //             this.dy = -this.dy
    //         }

    //         this.draw();
    //     }

        
    // }

    // const balls = [];

    // for (let i = 0; i < 20; i++) {
    //     let r = Math.floor(Math.random() * 30) + 15 //random radius between 15 and 30
    //     let x = Math.random() * (canvas.width - r * 2) + r; //minus diamter so balls dont spawn in wall
    //     let y =  Math.random() * (canvas.height - r * 2) + r;
    //     let c = 'red';
    //     balls.push(new Circle(x, y, r, c))
    // }

    // function Update(){
    //     context.clearRect(0, 0, canvas.width, canvas.height);
    //     for (let i = 0; i <balls.length; i++){
    //         balls[i].animate();
    //     }

    //     requestAnimationFrame(Update);
    // }

    
    // Update();
     
}

init();
//document.addEventListener("DOMContentLoaded", drawCanvas);