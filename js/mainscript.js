 var draw = {

    tool:'pen', // Инструмент

    size: '14',  // Толщина

    color: '#0044E2' // Цвет
}

draw.init = function(){ //Иницилизация канвас
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
};


draw.drawing = function(tool){
    var x1=(Math.PI/180)*0;
    var x2=(Math.PI/180)*360;

    if(this.startDraw){
        this.ctx.strokeStyle = this.color;
        this.ctx.fillStyle =  this.color;
        this.ctx.lineWidth = this.size * 2;
        this.ctx.lineCap = 'round';
            switch(tool) {
            case 'pen':
                this.ctx.lineTo(this.x, this.y);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.arc(this.x, this.y, this.size, x1, x2)
                this.ctx.fill();
                this.ctx.beginPath();
                this.ctx.moveTo(this.x, this.y);
                break;
            }
    }
}

draw.init();

draw.canvas.addEventListener('mousedown', function(e){
    draw.startDraw = true;
}, false);
draw.canvas.addEventListener('mousemove', function(e){
    draw.x = e.pageX - draw.canvas.offsetLeft; //Координата X
    draw.y = e.pageY - draw.canvas.offsetTop; //Координата Y
    draw.drawing('pen');

}, false);

draw.canvas.addEventListener('mouseup', function(){
    draw.startDraw = false;
    draw.ctx.beginPath();
}, false);

// outcontrol bug fix

draw.canvas.addEventListener('mouseout', function() {
    draw.startDraw = false;
    draw.ctx.beginPath();
})

// added

draw.clearCanvas = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

draw.savePic = function() {
    var imgInBase64;
    imgInBase64 = this.canvas.toDataURL("image/png");
    console.log(imgInBase64);
    localStorage.setItem('base64', imgInBase64);
}

draw.changeSize = function() {
    var range = document.getElementById('size').value;
    this.size = range;
}

draw.changeColor = function(tool) {
    var get = document.getElementById('color').value;
    console.log(get);
    this.color = get;
}