var canvasDiv = document.getElementById('circle');
var canvasDiv2 = document.getElementById('original');
var ctx;            //stored context of canvas that show genom's pictures
var context2;       //stored context of canvas that show original photo
var width;          //picture height
var height;         //picture width
var canvas;         //canvas that drawing genom on it
var canvas2;
var genom;
var i=0;
var genomLenght = 100;
var numbergenom =10;
var base_image;
var original;

function PageLoad(){
    base_image = new Image();
    base_image.src = 'happy.jpg';
    width = base_image.width;
    height = base_image.height;
    canvas = document.createElement('canvas');
    canvas.setAttribute('width',parseInt(width));
    canvas.setAttribute('height',parseInt(height));
    canvas.setAttribute('id', 'canvas');
    canvas.style.background = "black";
    canvasDiv.appendChild(canvas);
    ctx = canvas.getContext("2d");

    canvas2 = document.createElement('canvas');
    canvas2.setAttribute('width',parseInt(width));
    canvas2.setAttribute('height',parseInt(height));
    canvas2.setAttribute('id', 'canvas');
    canvasDiv2.appendChild(canvas2);

    context2 = canvas2.getContext("2d");
    context2.drawImage(base_image, 0, 0);

    original = context2.getImageData(0,0,width,height).data;

    for(i=0;i<20;i++){
        for (j=0;j<20;j++){
            console.log(original[(i+1)*j])
        }
    }
}

function draw() {

    setInterval(function () {
        if (!genom || i >= numbergenom) {
            genom = genarateGenom(10, 100);
            i = 0;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (j = 0; j < genomLenght; j++) {
            ctx.beginPath()
            ctx.arc(genom[i][j][0], genom[i][j][1], genom[i][j][2], 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(' + genom[i][j][3] + ',' + genom[i][j][4] + ',' + genom[i][j][5] + ',' + genom[i][j][6] + ')';
            ctx.fill();
        }
        i++;
    }, 500);
}
function Fitness(Original,GeneratedImages) {
    var fitt = [];
    for(var k=0;k<numbergenom;k++) {
        total = 0;
        for (var y = 0; y < (height*width); y++) {
                total += Math.abs(Original[y]-GeneratedImages[0][y])
        }
        fitt.push(total/(height*width*4));
    }

}
function Selection(fitt,GeneratedImages) {

}
function Mutation() {

}

function Crossover() {


}

function genarateGenom(number_genom,lenght_genom) {
    var i,r,g,b,a,x,y,R;
    var genom = [];
    for (i=0;i<number_genom;i++){
        var gen = [];
        for(j=0;j<lenght_genom;j++){
            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);
            a = Math.random();
            R = Math.floor(Math.random()*(width/10));
            x = Math.floor(Math.random()*width);
            y = Math.floor(Math.random()*height);
            gen.push([x,y,R,r,g,b,a]);
        }
        genom.push(gen);
    }
    return genom;
}