



function next(){
    document.getElementById('log').style.display = "none";
    document.getElementById('regis').style.display = "block";
    }
    function prev(){
    document.getElementById('regis').style.display = "none";
    document.getElementById('log').style.display = "block";
    }



const pass_field = document.querySelector(".pass-key");
const showBtn = document.querySelector(".show");

showBtn.addEventListener("click", function() {
    if(pass_field.type === "password") {
        pass_field.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.color = "#3498db";
    } else {
        pass_field.type = "password";
        showBtn.textContent = "SHOW";
        showBtn.style.color = "#222";
    }
});


var introDiv = document.querySelector(".intro");

function accept() {
    introDiv.remove();
}

function fruits() {
    var e = document.getElementById("sk");

    if (!e) return true;
    if (e.style.fontStyle == "oblique") {
        e.style.fontStyle = "normal"
    }
    else {
        e.style.fontStyle = "oblique"
    }
    return true;
}

function veggies() {
    var e = document.getElementById("sk");

    if (!e) return true;
    if (e.style.wordSpacing == "1px") {
        e.style.wordSpacing = "normal"
    }
    else {
        e.style.wordSpacing = "1px"
    }
    return true;
}

function dairyFree() {
    var e = document.getElementById("sk");

    if (!e) return true;
    if (e.style.wordSpacing == "-1px") {
        e.style.wordSpacing = "normal"
    }
    else {
        e.style.wordSpacing = "-1px"
    }
    return true;
}

function fish() {
    var e = document.getElementById("sk");

    if (!e) return true;
    if (e.style.lineHeight == "120%") {
        e.style.lineHeight = "100%"
    }
    else {
        e.style.lineHeight = "120%"
    }
    return true;
}

function hardFoods() {
    var e = document.getElementById("sk");

    if (!e) return true;
    if (e.style.fontSize == "large") {
        e.style.fontSize = "small"
    }
    else {
        e.style.fontSize = "large"
    }
    return true;
}

function nuts() {
    var e = document.getElementById("sk");

    if (!e) return true;
    if (e.style.fontSize == "150%") {
        e.style.fontSize = "100%"
    }
    else {
        e.style.fontSize = "150%"
    }
    return true;
}

function meat() {
    var e = document.getElementById("sk");

    if (!e) return true;
    if (e.style.fontWeight == "900") {
        e.style.fontWeight = "100"
    }
    else {
        e.style.fontWeight = "900"
    }
    return true;
}

function update() {
    var e = document.getElementById("sk");

    if (!e) return true;
    if (e.style.fontWeight == "normal") {
        e.style.fontWeight = "100"
    }
    else {
        e.style.fontWeight = "normal"
    }
    return true;
}












/*function toggleMe() {
    var e = document.getElementById("sk");

    if (!e) return true;
    if (e.style.fontWeight == "900") {
        e.style.fontWeight = "100"
    }
    else {
        e.style.fontWeight = "900"
    }
    return true;
}


function toggle() {
    var line = document.getElementById("sk");
    if(line.style.lineHeight = "16px") {
        return line.style.lineHeight += 2 + "px"
    }

}

function toe() {
    var e = document.getElementById("sk");

    if (!e) return true;
    if (e.style.lineHeight == 0) {
        e.style.lineHeight =+ 1
    }
    else {
        e.style.lineHeight = 0
    }
    return true;
}



const element = document.getElementById("btn");
element.addEventListener("mouseover", myFunction);
element.addEventListener("click", mySecondFunction);
element.addEventListener("mouseout", myThirdFunction);

function myFunction() {
    document.getElementById("sk").innerHTML += "Moused over!<br>"
}

function mySecondFunction() {
    document.getElementById("sk").innerHTML += "Clicked!<br>"
}

function myThirdFunction() {
    let i = "10px";
    let k = (i * 2)
    document.getElementById("sk").style.fontSize += (i*2)
}





/*
function onUpdate() {
    var x = (total)
    var y = (result)
    var r = 20
//    let h = 40
//    let l = 0
    var a = -2
    var b = -3
    var c = -4
    var d = 1
    var e = 2
    var f = 4
    var g = 5
    if (x) {
        x = r + a;
        x = r + b;
        x = r + c;
        x = r + d;
        x = r + e;
        x = r + f;
        x = r + g;
        x = y
            if (y < 30) {
                result = document.write(str.fontsize(+1))
            }
            else if (y > 10) {
                result = document.write(str.fontsize(-1))
            }
            else if (y >= 25 && y <= 30) {
                result = document.write(str.bold())
            }
            else if (y >= 15 && y <= 0); {
                result = document.write(str.italics())
            }
    }
        else {
            result = (noChange)
        }
}

function change() {
    var button = document.querySelector(".b" = -3, ".c" = -4, r = 20, y = result) 
    var number1 = r
    var number2 = (".b"
    , ".c")
    var result = y
    
    if (button == 'b') { 
        result = number1 + number2;
    }
    else if (button == 'c') {
        result = number1 + number2;  
    }
    else if (button == '*') {
        result = number1 * number2;
    }
    else {
        result = number1 / number2;
    }
    console.log(y);
}

style.fontWeight = "normal", style.fontSize = "9pt", style.wordSpacing = "1", style.textShadow = "10"



var MyGamePiece = document.getElementById("sk");

function startGame() {
    myGameArea.start();
}

var myGameArea = document.getElementById("sk")

function skull(robust, gracile, height, width) {
    this.width = robust;
    this.height = gracile;
    this.x = height;
    this.y = width; 
    this.update = function (){
    ctx = myGameArea.context;
    ctx.style.fontWeight = "normal";
    ctx.style.fontSize = "9pt";
    ctx.style.wordSpacing = "1";
    ctx.style.textShadow = "10";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGameArea() {
    myGameArea.clear ();
    MyGamePiece.newPos();
    MyGamePiece.update();
}

function moveup() {
    MyGamePiece.speedY -= 1; 
}

function movedown() {
    MyGamePiece.speedY += 1; 
}

function moveleft() {
    MyGamePiece.speedX -= 1;
}

function moveright() {
    MyGamePiece.speedX += 1;
}

function stopMove() {
    MyGamePiece.speedX = 0;
    MyGamePiece.speedY = 0;
}*/



/*var pet = {
    'name' : "",
    'hungry' : true,
    'weight' : 0,
    'age' : 0,
    'photo' : "",
};

function feed(pet) {
    if (pet.hungry === true) {

    } else  {
    console.log("I'm full. I already ate!");
    }
}

function doSomething () {
    alert("It's Done!");
};
doSomething();

const Pet = prompt ("Name your pet");
document.write(Action);
let Energy = 0;
let Happiness = 0;
document.write(Energy);
document.write(Happiness);
for (i=0; i<6; i++){
    var Action = prompt ("feed, pet, or walk?");
    if (Action === "feed") {
        Energy = (Energy + 2);
    } else if (Action === "pet") {
        Happiness = (Happiness + 1);
    } else if (Action === "walk")
    {
        Happiness = ( Happiness + 2); 
        Energy = (Energy - 1);
    } 
}; 
console.log (Pet)
console.log (Happiness)
console.log (Energy)
console.log(+ Pet + " has " + Happiness + " happiness and " + Energy + " energy");*/

function red() {
    var e = document.getElementById("cat-body");

    if (!e) return true;
    if (e.style.backgroundColor == "red") {
        e.style.backgroundColor = ""
    }
    else {
        e.style.backgroundColor = "red"
    }
    return true;
}
function pink() {
    var e = document.getElementById("cat-body");

    if (!e) return true;
    if (e.style.backgroundColor == "pink") {
        e.style.backgroundColor = ""
    }
    else {
        e.style.backgroundColor = "pink"
    }
    return true;
}
function yellow() {
    var e = document.getElementById("cat-body");

    if (!e) return true;
    if (e.style.backgroundColor == "yellow") {
        e.style.backgroundColor = ""
    }
    else {
        e.style.backgroundColor = "yellow"
    }
    return true;
}