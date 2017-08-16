/**
 * Created by Vlad on 11-Jan-17.
 */
var layout = 0;
var setBackground = 0;
var imgPos = 1;
var layoutPos1 = 1;
var layoutPos2 = 1;
var layoutPos3 = 1;
//incarcarea fisierelor audio folosite in proiect
var loadSound = new Audio();
loadSound.src = "media/notify.wav";
var deleteSound = new Audio();
deleteSound.src = "media/recycle.wav";
var tadaSound = new Audio();
tadaSound.src = "media/tada.wav";

// functie pt incarcarea sablonului nr 1
function loadLayout1(){
    layout = 1;
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    context.beginPath();
    if(setBackground == 0) {
        context.clearRect(0, 0, 500, 500);
        layoutPos1 = 1;
    }
    context.rect(50, 5, 50, 135);
    context.rect(110, 5, 50, 135);
    context.stroke();
}
// functie pt incarcarea sablonului nr 2
function loadLayout2(){
    layout = 2;
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    context.beginPath();
    if(setBackground == 0) {
        context.clearRect(0, 0, 500, 500);
        layoutPos2 = 1;
    }
    context.rect(20, 6, 55, 55);
    context.rect(84, 6, 100, 55);
    context.rect(20, 70, 100, 55);
    context.rect(129, 70, 55, 55);
    context.stroke();
}

// functie pt incarcarea sablonului nr 3
function loadLayout3(){
    layout = 3;
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    context.beginPath();
    if (setBackground == 0) {
        context.clearRect(0, 0, 500, 500);
        layoutPos3 = 1;
    }
    context.rect(25, 5, 170, 40);
    context.rect(25, 50, 80, 40);
    context.rect(115,50, 80, 40);
    context.rect(25, 95, 170, 40);
    context.stroke();
}
// functie pt incarcarea imaginii de fundal nr 1
function loadBackground1() {
    setBackground = 1;
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    var background = new Image();
    background.src = "media/instagram1.jpg";
    background.onload = function(){
        context.drawImage(background, 10, 0, 200, 145);
    }
}
// functie pt incarcarea imaginii de fundal nr 2
function loadBackground2() {
    setBackground = 2;
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    var background = new Image();
    background.src = "media/instagram2.jpg";
    background.onload = function(){
        context.drawImage(background, 10, 0, 200, 145);
    }
}

// functie pt incarcarea imaginii de fundal nr 3
function loadBackground3() {
    setBackground = 3;
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    var background = new Image();
    background.src = "media/instagram3.jpg";
    background.onload = function(){
        context.drawImage(background, 10, 0, 200, 145);
    }
}

// functie pt incarcarea imaginii de fundal nr 0(fundal alb, stergere fundal actual)
function loadBackground0() {
    setBackground = 0;
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    context.clearRect(0, 0, 500, 500);
    deleteSound.play();
}

//functie pentru incarcarea imaginilor cu ajutorul butonului "Choose file".
//Acestea se adauga in ordinea introducerii
function loadImages(image) {
    var x;
    if (image.files && image.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            if (imgPos == 1){
                x = document.getElementById("images1").setAttribute('src', e.target.result);
                imgPos = 2;
            }
            else if (imgPos == 2){
                x = document.getElementById("images2").setAttribute('src', e.target.result);
                imgPos = 3;
            }
            else if (imgPos == 3){
                x = document.getElementById("images3").setAttribute('src', e.target.result);
                imgPos = 4;
            }
            else if (imgPos == 4){
                x = document.getElementById("images4").setAttribute('src', e.target.result);
                imgPos = 1;
            }
        };
        reader.readAsDataURL(image.files[0]);
    }
    loadSound.play();
}

//functie de incarcare a imaginilor prin drag and drop
function loadImagesByDrop(image) {
    loadSound.play();
    var x;
            if (imgPos == 1){
                x = document.getElementById("images1").setAttribute('src', image.src);
                imgPos = 2;
            }
            else if (imgPos == 2){
                x = document.getElementById("images2").setAttribute('src', image.src);
                imgPos = 3;
            }
            else if (imgPos == 3){
                x = document.getElementById("images3").setAttribute('src', image.src);
                imgPos = 4;
            }
            else if (imgPos == 4){
                x = document.getElementById("images4").setAttribute('src', image);
                imgPos = 1;
            }
}

//aplicarea imaginilor pe canvas, in functie de sablonul ales
function insertPhoto(image) {
    if (layout == 0) {
        alert("Please select a layout!");
    } else if (layout == 1) {
        drawOnLayout1(image);
    } else if (layout == 2) {
        drawOnLayout2(image);
    } else if (layout == 3) {
        drawOnLayout3(image);
    }
}

//aplicarea imaginilor pe cavas, in sablonul nr 1, care perminte 2 imagini
function drawOnLayout1(image) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = image.getAttribute("src");
    if(layoutPos1 == 1) {
        ctx.drawImage(img, 50, 5, 50, 135);
        layoutPos1++;
    } else if (layoutPos1 == 2) {
        ctx.drawImage(img, 110, 5, 50, 135);
        layoutPos1 = 1;
    }
}
//aplicarea imaginilor pe cavas, in sablonul nr 1, care perminte 4 imagini
function drawOnLayout2(image) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = image.getAttribute("src");
    if(layoutPos2 == 1) {
        ctx.drawImage(img, 20, 6, 55, 55);
        layoutPos2++;
    } else if (layoutPos2 == 2) {
        ctx.drawImage(img, 84, 6, 100, 55);
        layoutPos2++;
    } else if (layoutPos2 == 3) {
        ctx.drawImage(img, 20, 70, 100, 55);
        layoutPos2++;
    } else if (layoutPos2 == 4) {
        ctx.drawImage(img, 129, 70, 55, 55);
        layoutPos2 = 1;
    }
}

//aplicarea imaginilor pe cavas, in sablonul nr 1, care perminte 4 imagini
function drawOnLayout3(image) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = image.getAttribute("src");
    if(layoutPos3 == 1) {
        ctx.drawImage(img, 25, 5, 170, 40);
        layoutPos3++;
    } else if (layoutPos3 == 2) {
        ctx.drawImage(img, 25, 50, 80, 40);
        layoutPos3++;
    } else if (layoutPos3 == 3) {
        ctx.drawImage(img, 115,50, 80, 40);
        layoutPos3++;
    } else if (layoutPos3 == 4) {
        ctx.drawImage(img, 25, 95, 170, 40);
        layoutPos3 = 1;
    }
}

//functie de salvare a imaginii obtinute in canvas, pe local
//ATENTIE: Din cauza standardelor CORS, functioneaza doar cand pagina este deschisa prin intermediul unui web server
function saveImage(){
    var canvas = document.getElementById("canvas");
    var img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.src = canvas.toDataURL("image/png").replace("image/png","image/octet-stream");
    var Link = document.createElement('a');
    Link.download = 'image.png';
    Link.href = img.src;
    document.body.appendChild(Link);
    Link.click();
    document.body.removeChild(Link);
    tadaSound.play();
}
